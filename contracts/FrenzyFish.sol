pragma solidity ^0.5.0;
import './Fish.sol';
contract Main{
    address[] public Fishes;
    constructor() public {
    }

    function Fishing() public{
        address newfish = address(new Fish(msg.sender,1,10,200));
        Fishes.push(newfish);
    }
}