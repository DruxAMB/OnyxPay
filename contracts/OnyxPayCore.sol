// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

/**
 * @title OnyxPayCore
 * @dev Core contract for OnyxPay platform handling multi-chain staking and payments
 */
contract OnyxPayCore is Initializable, PausableUpgradeable, OwnableUpgradeable, ReentrancyGuardUpgradeable {
    // Chain-specific configurations
    struct ChainConfig {
        uint256 chainId;
        address stablecoinAddress;
        address nativeStakingPool;
        address priceOracle;
        uint256 minConfirmations;
    }

    mapping(uint256 => ChainConfig) public chainConfigs;
    
    // User balances across chains
    mapping(address => mapping(uint256 => uint256)) public userBalances;
    
    // Subscription configurations
    struct Subscription {
        address merchant;
        uint256 amount;
        uint256 frequency;
        uint256 lastPayment;
        bool active;
        uint256 chainId;
    }

    mapping(address => Subscription[]) public userSubscriptions;

    // Events
    event StakeDeposited(address indexed user, uint256 indexed chainId, uint256 amount);
    event RewardsClaimed(address indexed user, uint256 indexed chainId, uint256 amount);
    event SubscriptionCreated(address indexed user, address indexed merchant, uint256 indexed chainId);
    event PaymentProcessed(address indexed user, address indexed merchant, uint256 amount, uint256 indexed chainId);

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize() public initializer {
        __Pausable_init();
        __Ownable_init(msg.sender);
        __ReentrancyGuard_init();
        
        // Initialize chain configurations
        // Base
        chainConfigs[8453] = ChainConfig({
            chainId: 8453,
            stablecoinAddress: 0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913, // USDC on Base
            nativeStakingPool: address(0), // To be set
            priceOracle: 0x7e860098F58bBFC8648a4311b374B1D669a2bc6B, // Base/USD Chainlink feed
            minConfirmations: 1
        });
        
        // Mantle
        chainConfigs[5000] = ChainConfig({
            chainId: 5000,
            stablecoinAddress: 0x201EBa5CC46D216Ce6DC03F6a759e8E766e956aE, // USDT on Mantle
            nativeStakingPool: address(0), // To be set
            priceOracle: address(0), // To be set when available
            minConfirmations: 1
        });
        
        // Lisk
        chainConfigs[4001] = ChainConfig({
            chainId: 4001,
            stablecoinAddress: address(0), // To be set when Lisk stablecoin is available
            nativeStakingPool: address(0), // To be set
            priceOracle: address(0), // To be set when available
            minConfirmations: 1
        });
    }

    /**
     * @dev Deposit funds for staking on a specific chain
     * @param chainId The ID of the chain to stake on
     * @param amount The amount to stake
     */
    function deposit(uint256 chainId, uint256 amount) external nonReentrant whenNotPaused {
        require(chainConfigs[chainId].chainId != 0, "Chain not supported");
        require(amount > 0, "Amount must be greater than 0");
        
        IERC20 stablecoin = IERC20(chainConfigs[chainId].stablecoinAddress);
        require(stablecoin.transferFrom(msg.sender, address(this), amount), "Transfer failed");
        
        userBalances[msg.sender][chainId] += amount;
        emit StakeDeposited(msg.sender, chainId, amount);
    }

    /**
     * @dev Create a new subscription
     * @param merchant The merchant address
     * @param amount The subscription amount
     * @param frequency The payment frequency in seconds
     * @param chainId The chain ID for the subscription
     */
    function createSubscription(
        address merchant,
        uint256 amount,
        uint256 frequency,
        uint256 chainId
    ) external whenNotPaused {
        require(chainConfigs[chainId].chainId != 0, "Chain not supported");
        require(merchant != address(0), "Invalid merchant");
        require(amount > 0, "Amount must be greater than 0");
        require(frequency > 0, "Frequency must be greater than 0");

        Subscription memory newSub = Subscription({
            merchant: merchant,
            amount: amount,
            frequency: frequency,
            lastPayment: block.timestamp,
            active: true,
            chainId: chainId
        });

        userSubscriptions[msg.sender].push(newSub);
        emit SubscriptionCreated(msg.sender, merchant, chainId);
    }

    /**
     * @dev Process subscription payment
     * @param userId The user's address
     * @param subscriptionIndex The index of the subscription
     */
    function processPayment(address userId, uint256 subscriptionIndex) external nonReentrant whenNotPaused {
        Subscription storage sub = userSubscriptions[userId][subscriptionIndex];
        require(sub.active, "Subscription not active");
        require(block.timestamp >= sub.lastPayment + sub.frequency, "Payment not due");
        
        uint256 chainId = sub.chainId;
        require(userBalances[userId][chainId] >= sub.amount, "Insufficient balance");
        
        userBalances[userId][chainId] -= sub.amount;
        userBalances[sub.merchant][chainId] += sub.amount;
        
        sub.lastPayment = block.timestamp;
        emit PaymentProcessed(userId, sub.merchant, sub.amount, chainId);
    }

    /**
     * @dev Update chain configuration
     * @param chainId The chain ID to update
     * @param config The new configuration
     */
    function updateChainConfig(uint256 chainId, ChainConfig memory config) external onlyOwner {
        require(config.chainId == chainId, "Chain ID mismatch");
        chainConfigs[chainId] = config;
    }

    /**
     * @dev Pause the contract
     */
    function pause() external onlyOwner {
        _pause();
    }

    /**
     * @dev Unpause the contract
     */
    function unpause() external onlyOwner {
        _unpause();
    }
}