pragma solidity ^0.5.0;

import './SafeMath.sol';
import './Fish.sol';

contract Market {
    struct MarketOrders{
        address SellFish;
        address payable Seller;
        address Buyer;
        bool IsFilled;
    }

    mapping(address => address) public FishOwner;
    MarketOrders[] public SellOrders;

    constructor () public {
        
    }

    function SellFish(address _fish) public returns (bool) {
        require(FishOwner[_fish] == msg.sender,"User is not Fish owner");
        MarketOrders memory Order;
        Order.SellFish = _fish;
        Order.Seller = msg.sender;
        SellOrders.push(Order);
        FishOwner[_fish] = address(this);
    }
    // function BuyFish(address fish) public returns (bool) {
        
    // }
    function CancelFishOrder(uint256 _position) public{
        require(_position >= 0 && _position < SellOrders.length,"Invalid Array Index");
        MarketOrders memory Fish = SellOrders[_position];
        require(FishOwner[Fish.SellFish] == address(this),"Order already filled/canceled");
        require(Fish.Seller == msg.sender,"Order is not Made by user");
        SellOrders[_position].IsFilled = true;
        FishOwner[Fish.SellFish] = msg.sender;
    }
}