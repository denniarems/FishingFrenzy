pragma solidity ^0.5.0;
contract SampleToken{
    address owner;
    mapping(address => uint256) public accounts;
    constructor(uint256 initialSupply) public{
        owner= msg.sender;
        accounts[owner]=initialSupply;
    }
    function Transfer(address to,uint256 value) public {
        require(accounts[msg.sender]>=value);
        require(accounts[to] + value >=accounts[to]);
        accounts[owner]-=value;
        accounts[to]+=value;
    }
    function getBalance() public view returns(uint256){
        uint256 balance =accounts[msg.sender];
        return balance;
    }
    function getBalanceofOther(address other) public view returns(uint256){
        uint256 balance =accounts[other];
        return balance;
    }
}