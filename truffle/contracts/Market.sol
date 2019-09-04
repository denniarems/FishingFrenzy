pragma solidity ^0.5.0;
import './Fish.sol';
import './FishRod.sol';
contract Market{
    struct MarketOrders{
        address SellFish;
        address payable Seller;
        address Buyer;
        bool IsFilled;
    }
    MarketOrders[] public SellOrders;
    mapping (address=>address[]) public Fishes;

    constructor () public {
    }

    function SellFish(address _fish,uint256 _position) public returns (bool) {
        require(Fishes[msg.sender][_position] == _fish,"User is not Fish owner");
        MarketOrders memory Order;
        Order.SellFish = _fish;
        Order.Seller = msg.sender;
        SellOrders.push(Order);
        FishOwner[_fish] = address(this);
    }
    // address[] public Fishes;

}