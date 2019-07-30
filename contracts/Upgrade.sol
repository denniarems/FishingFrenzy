pragma solidity ^0.5.0;


contract Upgrade{

    address public owner;
    uint public current_rod;

    constructor() public{
        owner = msg.sender;
    }



}