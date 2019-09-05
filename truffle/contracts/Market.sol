pragma solidity ^0.5.0;
import './Fish.sol';
import './FishRod.sol';
import './SafeMath.sol';
import './AddressArrayUtil.sol';
contract Market {
    using SafeMath for uint256;
    using AddressArrayUtil for address;
    struct MarketOrders{
        address SellFish;
        address payable Seller;
        address Buyer;
        bool IsFilled;
    }
    MarketOrders[] public SellOrders;
    mapping (address=>address[]) public Fishes;
    // mapping(address => address) public FishOwner;

    constructor () public {
    }

    function SellFish(address _fish,uint256 position) public returns (bool) {
        // uint256 position = Fishes[msg.sender].IndexOf(_fish);
        require(Fishes[msg.sender][position] == _fish,"User is not Fish owner");
        require(Fish(_fish).GetOrderStatus() == false,"Already in Order");
        MarketOrders memory Order;
        Order.SellFish = _fish;
        Order.Seller = msg.sender;
        SellOrders.push(Order);
        return Fish(_fish).ChangeOrderStatus();
        // FishOwner[_fish] = address(this);
    }
    // address[] public Fishes;

}