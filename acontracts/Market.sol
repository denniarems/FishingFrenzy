pragma solidity ^0.5.0;
contract Market{
    constructor() public{
    }
        struct MarketOrders{
        address SellFish;
        address payable Seller;
        address Buyer;
        bool IsFilled;
    }
    mapping(address => address) public FishOwner;
    MarketOrders[] public SellOrders;
    function SellFish(address _fish) public{
        require(FishOwner[_fish] == msg.sender,"User is not Fish owner");
        MarketOrders memory Order;
        Order.SellFish = _fish;
        Order.Seller = msg.sender;
        SellOrders.push(Order);
        FishOwner[_fish] = address(this);
    }
    /**
    * This function used to cancel sell Fish order
    * @param _position Array Index of Sell Orders list
    */
    function CancelSellOrder(uint256 _position) public{
        require(_position >= 0 && _position < SellOrders.length,"Invalid Array Index");
        MarketOrders memory Fish = SellOrders[_position];
        require(FishOwner[Fish.SellFish] == address(this),"Order already filled/canceled");
        require(Fish.Seller == msg.sender,"Order is not Made by user");
        SellOrders[_position].IsFilled = true;
        FishOwner[Fish.SellFish] = msg.sender;
    }
    /**
    * This function used to buy another user Fish
    * @param _position Array Index of Sell Orders list
    */
    function BuyFish(uint256 _position) public payable{
        require(_position >= 0 && _position < SellOrders.length,"Invalid Array Index");
        MarketOrders memory Fish = SellOrders[_position];
        require(FishOwner[Fish.SellFish] == address(this),"Order already filled/canceled");
        require(Fish.Seller != msg.sender,"Order Made by user, use Cancel Order insted");
        require(msg.value == Fish.SellPrice,"Price not matched");
        uint256 NumberOfTown = Players[msg.sender].Towns.length;
        uint256 GemsRequired = NumberOfTown.mul(TownBasicPrice ** NumberOfTown).div(2);
        require(Players[msg.sender].GemsCount >= GemsRequired, "insufficient gems");
        Players[msg.sender].GemsCount = Players[msg.sender].GemsCount.sub(GemsRequired);
        uint256 GemtoSeller = GemsRequired.mul(SellCommission).div(100);
        uint256 GemtoOwner = GemsRequired.sub(GemtoSeller);
        Players[Fish.Seller].GemsCount = Players[Fish.Seller].GemsCount.add(GemtoSeller);
        Players[owner()].GemsCount = Players[owner()].GemsCount.add(GemtoOwner);
        Fish.Seller.transfer(msg.value);
        SellOrders[_position].IsFilled = true;
        FishOwner[Fish.SellFish] = msg.sender;
        Players[msg.sender].Towns.push(Fish.SellFish);
        Players[Fish.Seller].Towns[Fish.TownPosition] = address(0);
        //impliment gem reducton from user and give seller gem  , deduct commission from seller
    }
}