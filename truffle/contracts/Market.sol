pragma solidity ^0.5.0;
import './Fish.sol';
import './FishRod.sol';
import './SafeMath.sol';
contract Market {
    using SafeMath for uint256;
    struct MarketOrders{
        address SellFish;
        address payable Seller;
        uint256 OwnerFishPosition;
        address Buyer;
        bool IsFilled;
    }
    MarketOrders[] public SellOrders;
    mapping (address=>address[]) public Fishes;
    // mapping(address => address) public FishOwner;

    constructor () public {
    }

    function SellFish(address _fish,uint256 position) public returns (bool) {
        require(Fishes[msg.sender][position] == _fish,"User is not Fish owner");
        require(Fish(_fish).GetOrderStatus() == false,"Already in Order");
        MarketOrders memory Order;
        Order.SellFish = _fish;
        Order.Seller = msg.sender;
        Order.OwnerFishPosition = position;
        Order.IsFilled = false;
        SellOrders.push(Order);
        return Fish(_fish).ChangeOrderStatus();
    }
    function CancelSellFishOrder(address  _fish,uint256 _orderPosition) public returns (bool) {
        require(SellOrders[_orderPosition].SellFish==_fish && Fish(_fish).GetOrderStatus() == true,"Not in OrderList");
        require(SellOrders[_orderPosition].IsFilled == false,"Order Already Filled");
        require(SellOrders[_orderPosition].Seller == msg.sender,"User is not Fish owner");
        if (!Fish(_fish).ChangeOrderStatus()) {
            delete SellOrders[_orderPosition];
            return true;
        } else return false;
    }

    function ListMarketOrders() public view returns(address[] memory  ,address[] memory,address[] memory,uint256[] memory,bool[] memory) {
        uint256 length = SellOrders.length;
        address[] memory _SellFish = new address[](length);
        address[] memory _Seller = new address[](length);
        address[] memory _Buyer = new address[](length);
        uint256[] memory _OwnerFishPosition = new uint256[](length);
        bool[] memory _IsFilled = new bool[](length);
        for(uint256 i = 0;i < SellOrders.length; i++){
        _SellFish[i] = SellOrders[i].SellFish;
        _Seller[i] = SellOrders[i].Seller;
        _Buyer[i] = SellOrders[i].Buyer;
        _OwnerFishPosition[i] = SellOrders[i].OwnerFishPosition;
        _IsFilled[i] = SellOrders[i].IsFilled;
        }
        return (_SellFish,_Seller,_Buyer,_OwnerFishPosition,_IsFilled);
    }

}