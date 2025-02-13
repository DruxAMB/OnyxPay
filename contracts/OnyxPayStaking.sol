// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @title OnyxPayStaking
 * @dev Handles staking operations across multiple L2 chains
 */
contract OnyxPayStaking is Initializable, PausableUpgradeable, OwnableUpgradeable, ReentrancyGuardUpgradeable {
    // Staking pool configuration for each chain
    struct StakingPool {
        uint256 chainId;
        uint256 totalStaked;
        uint256 rewardRate; // Rewards per second
        uint256 lastUpdateTime;
        uint256 rewardPerTokenStored;
    }

    mapping(uint256 => StakingPool) public stakingPools;
    
    // User staking info per chain
    struct UserStakingInfo {
        uint256 stakedAmount;
        uint256 rewards;
        uint256 rewardPerTokenPaid;
    }

    mapping(address => mapping(uint256 => UserStakingInfo)) public userStakingInfo;

    // Events
    event Staked(address indexed user, uint256 indexed chainId, uint256 amount);
    event Withdrawn(address indexed user, uint256 indexed chainId, uint256 amount);
    event RewardPaid(address indexed user, uint256 indexed chainId, uint256 amount);
    event PoolUpdated(uint256 indexed chainId, uint256 rewardRate);

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize() public initializer {
        __Pausable_init();
        __Ownable_init(msg.sender);
        __ReentrancyGuard_init();

        // Initialize staking pools for supported chains
        _initializePool(8453, 100 ether); // Base
        _initializePool(5000, 150 ether); // Mantle
        _initializePool(4001, 120 ether); // Lisk
    }

    /**
     * @dev Initialize a staking pool for a chain
     * @param chainId The chain ID
     * @param rewardRate Initial reward rate per second
     */
    function _initializePool(uint256 chainId, uint256 rewardRate) internal {
        stakingPools[chainId] = StakingPool({
            chainId: chainId,
            totalStaked: 0,
            rewardRate: rewardRate,
            lastUpdateTime: block.timestamp,
            rewardPerTokenStored: 0
        });
    }

    /**
     * @dev Calculate rewards per token for a specific chain
     * @param chainId The chain ID
     */
    function rewardPerToken(uint256 chainId) public view returns (uint256) {
        StakingPool storage pool = stakingPools[chainId];
        if (pool.totalStaked == 0) {
            return pool.rewardPerTokenStored;
        }
        return pool.rewardPerTokenStored + (
            ((block.timestamp - pool.lastUpdateTime) * pool.rewardRate * 1e18) / pool.totalStaked
        );
    }

    /**
     * @dev Calculate earned rewards for a user on a specific chain
     * @param account The user address
     * @param chainId The chain ID
     */
    function earned(address account, uint256 chainId) public view returns (uint256) {
        UserStakingInfo storage userInfo = userStakingInfo[account][chainId];
        return (
            (userInfo.stakedAmount * (rewardPerToken(chainId) - userInfo.rewardPerTokenPaid)) / 1e18
        ) + userInfo.rewards;
    }

    /**
     * @dev Update reward variables for a specific chain
     * @param chainId The chain ID
     */
    modifier updateReward(uint256 chainId, address account) {
        StakingPool storage pool = stakingPools[chainId];
        pool.rewardPerTokenStored = rewardPerToken(chainId);
        pool.lastUpdateTime = block.timestamp;

        if (account != address(0)) {
            UserStakingInfo storage userInfo = userStakingInfo[account][chainId];
            userInfo.rewards = earned(account, chainId);
            userInfo.rewardPerTokenPaid = pool.rewardPerTokenStored;
        }
        _;
    }

    /**
     * @dev Stake tokens on a specific chain
     * @param amount Amount to stake
     * @param chainId The chain ID
     */
    function stake(uint256 amount, uint256 chainId) 
        external 
        nonReentrant 
        whenNotPaused 
        updateReward(chainId, msg.sender) 
    {
        require(amount > 0, "Cannot stake 0");
        require(stakingPools[chainId].chainId != 0, "Chain not supported");

        stakingPools[chainId].totalStaked += amount;
        userStakingInfo[msg.sender][chainId].stakedAmount += amount;
        
        // Transfer tokens to this contract
        require(IERC20(getStablecoinAddress(chainId)).transferFrom(msg.sender, address(this), amount), "Transfer failed");
        
        emit Staked(msg.sender, chainId, amount);
    }

    /**
     * @dev Withdraw staked tokens from a specific chain
     * @param amount Amount to withdraw
     * @param chainId The chain ID
     */
    function withdraw(uint256 amount, uint256 chainId) 
        external 
        nonReentrant 
        updateReward(chainId, msg.sender) 
    {
        require(amount > 0, "Cannot withdraw 0");
        UserStakingInfo storage userInfo = userStakingInfo[msg.sender][chainId];
        require(userInfo.stakedAmount >= amount, "Insufficient staked amount");

        stakingPools[chainId].totalStaked -= amount;
        userInfo.stakedAmount -= amount;
        
        // Transfer tokens back to user
        require(IERC20(getStablecoinAddress(chainId)).transfer(msg.sender, amount), "Transfer failed");
        
        emit Withdrawn(msg.sender, chainId, amount);
    }

    /**
     * @dev Claim rewards from a specific chain
     * @param chainId The chain ID
     */
    function getReward(uint256 chainId) 
        external 
        nonReentrant 
        updateReward(chainId, msg.sender) 
    {
        uint256 reward = userStakingInfo[msg.sender][chainId].rewards;
        if (reward > 0) {
            userStakingInfo[msg.sender][chainId].rewards = 0;
            require(IERC20(getStablecoinAddress(chainId)).transfer(msg.sender, reward), "Transfer failed");
            emit RewardPaid(msg.sender, chainId, reward);
        }
    }

    /**
     * @dev Update reward rate for a specific chain
     * @param chainId The chain ID
     * @param newRate New reward rate
     */
    function setRewardRate(uint256 chainId, uint256 newRate) 
        external 
        onlyOwner 
        updateReward(chainId, address(0)) 
    {
        require(stakingPools[chainId].chainId != 0, "Chain not supported");
        stakingPools[chainId].rewardRate = newRate;
        emit PoolUpdated(chainId, newRate);
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