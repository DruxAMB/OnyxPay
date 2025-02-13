// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @title OnyxPayBridge
 * @dev Manages cross-chain token transfers and message passing between supported L2 chains
 */
contract OnyxPayBridge is Initializable, PausableUpgradeable, OwnableUpgradeable, ReentrancyGuardUpgradeable {
    // Supported chains configuration
    struct ChainConfig {
        bool supported;
        address bridgeEndpoint;
        uint256 gasLimit;
        uint256 confirmations;
    }

    mapping(uint256 => ChainConfig) public chainConfigs;
    
    // Cross-chain transfer status
    struct Transfer {
        uint256 sourceChain;
        uint256 targetChain;
        address sender;
        address recipient;
        uint256 amount;
        bool completed;
        uint256 timestamp;
    }

    mapping(bytes32 => Transfer) public transfers;
    
    // Events
    event TransferInitiated(
        bytes32 indexed transferId,
        uint256 indexed sourceChain,
        uint256 indexed targetChain,
        address sender,
        address recipient,
        uint256 amount
    );
    event TransferCompleted(bytes32 indexed transferId);
    event ChainConfigUpdated(uint256 indexed chainId, address bridgeEndpoint);

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
            supported: true,
            bridgeEndpoint: address(0), // To be set
            gasLimit: 200000,
            confirmations: 1
        });

        // Mantle
        chainConfigs[5000] = ChainConfig({
            supported: true,
            bridgeEndpoint: address(0), // To be set
            gasLimit: 200000,
            confirmations: 1
        });

        // Lisk
        chainConfigs[4001] = ChainConfig({
            supported: true,
            bridgeEndpoint: address(0), // To be set
            gasLimit: 200000,
            confirmations: 1
        });
    }

    /**
     * @dev Initiate a cross-chain transfer
     * @param targetChain Target chain ID
     * @param recipient Recipient address on target chain
     * @param amount Amount to transfer
     */
    function initiateTransfer(
        uint256 targetChain,
        address recipient,
        uint256 amount
    ) external nonReentrant whenNotPaused returns (bytes32) {
        require(chainConfigs[targetChain].supported, "Target chain not supported");
        require(amount > 0, "Amount must be greater than 0");
        require(recipient != address(0), "Invalid recipient");

        uint256 sourceChain = getChainId();
        require(sourceChain != targetChain, "Same chain transfer not allowed");

        // Generate transfer ID
        bytes32 transferId = keccak256(
            abi.encodePacked(
                sourceChain,
                targetChain,
                msg.sender,
                recipient,
                amount,
                block.timestamp
            )
        );

        // Store transfer details
        transfers[transferId] = Transfer({
            sourceChain: sourceChain,
            targetChain: targetChain,
            sender: msg.sender,
            recipient: recipient,
            amount: amount,
            completed: false,
            timestamp: block.timestamp
        });

        // Lock tokens on source chain
        address sourceToken = getStablecoinAddress(sourceChain);
        require(IERC20(sourceToken).transferFrom(msg.sender, address(this), amount), "Transfer failed");

        emit TransferInitiated(
            transferId,
            sourceChain,
            targetChain,
            msg.sender,
            recipient,
            amount
        );

        return transferId;
    }

    /**
     * @dev Complete a cross-chain transfer (called by bridge endpoint)
     * @param transferId Transfer ID
     */
    function completeTransfer(bytes32 transferId) external nonReentrant whenNotPaused {
        require(msg.sender == chainConfigs[getChainId()].bridgeEndpoint, "Unauthorized");
        
        Transfer storage transfer = transfers[transferId];
        require(!transfer.completed, "Transfer already completed");
        require(transfer.targetChain == getChainId(), "Wrong chain");

        transfer.completed = true;

        // Mint or unlock tokens on target chain
        address targetToken = getStablecoinAddress(transfer.targetChain);
        require(IERC20(targetToken).transfer(transfer.recipient, transfer.amount), "Transfer failed");

        emit TransferCompleted(transferId);
    }

    /**
     * @dev Get current chain ID
     */
    function getChainId() public view returns (uint256) {
        uint256 id;
        assembly {
            id := chainid()
        }
        return id;
    }

    /**
     * @dev Get stablecoin address for a specific chain
     * @param chainId The chain ID
     */
    function getStablecoinAddress(uint256 chainId) public pure returns (address) {
        if (chainId == 8453) { // Base
            return 0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913; // USDC
        } else if (chainId == 5000) { // Mantle
            return 0x201EBa5CC46D216Ce6DC03F6a759e8E766e956aE; // USDT
        } else if (chainId == 4001) { // Lisk
            return address(0); // To be updated when available
        }
        revert("Chain not supported");
    }

    /**
     * @dev Update chain configuration
     * @param chainId Chain ID to update
     * @param config New configuration
     */
    function updateChainConfig(uint256 chainId, ChainConfig memory config) external onlyOwner {
        chainConfigs[chainId] = config;
        emit ChainConfigUpdated(chainId, config.bridgeEndpoint);
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
