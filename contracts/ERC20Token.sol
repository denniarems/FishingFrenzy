pragma solidity ^0.5.0;
import './SafeMath.sol';

contract FrenzyFishToken {
    using SafeMath for uint256;
    string public name;
    string public symbol;
    uint8 public decimals;
    uint256 public totalSupply;
	address payable public owner;

    /* This creates an array with all balances */
    mapping (address => uint256) public balanceOf;

    mapping (address => mapping (address => uint256)) public allowance;

    /* This generates a public event on the blockchain that will notify clients */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /* Initializes contract with initial supply tokens to the creator of the contract */
    constructor(
		uint256 initialSupply,string memory tokenName,
		uint8 decimalUnits,string memory tokenSymbol,
		address payable _owner) public {

        balanceOf[_owner] = initialSupply;  // Give the creator all initial tokens
        totalSupply = initialSupply;   // Update total supply
        name = tokenName;     // Set the name for display purposes
        symbol = tokenSymbol;          // Set the symbol for display purposes
        decimals = decimalUnits;        // Amount of decimals for display purposes
		owner = _owner;          // Contract owner address
    }
    /* Send coins */
    function transfer(address _to, uint256 _value) public returns (bool success){
        require(_to != address(0),"Use burn() instead");     // Prevent transfer to 0x0 address. Use burn() instead
		require(_value > 0, "Value must be greater than zero");
        require(balanceOf[msg.sender] >= _value,"insufficient funds");   // Check if the sender has enough
        balanceOf[msg.sender] = balanceOf[msg.sender].sub(_value);     // Subtract from the sender
        balanceOf[_to] = balanceOf[_to].add(_value);   // Add the same to the recipient
        emit Transfer(msg.sender, _to, _value);     // Notify anyone listening that this transfer took place
        return true;
    }

    /* Allow another contract to spend some tokens in your behalf */
    function approve(address _spender, uint256 _value) public
        returns (bool success) {
		require(_value > 0,"Value must be greater than zero");
        allowance[msg.sender][_spender] = _value;
        return true;
    }

    /* A contract attempts to get the coins */
    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        require(_to != address(0),"Use burn() instead");                                // Prevent transfer to 0x0 address. Use burn() instead
		require(_value > 0, "Value must be greater than zero");
        require(balanceOf[_from] >= _value,"insufficient funds");                 // Check if the sender has enough
        require(_value >= allowance[_from][msg.sender],"Transfer not allowed from this contract");     // Check allowance
        balanceOf[_from] = balanceOf[_from].sub(_value);                           // Subtract from the sender
        balanceOf[_to] = balanceOf[_to].add(_value);                             // Add the same to the recipient
        allowance[_from][msg.sender] = allowance[_from][msg.sender].sub(_value);
        emit Transfer(_from, _to, _value);
        return true;
    }















}