pragma solidity ^0.5.0;

contract Fish{
    struct FishModel{
        uint256 Rarity;
        uint256 Weight;
        address Owner;
        uint256 Price;
    }
    FishModel public ThisFish;
    
    
        constructor(address _owner,uint256 _rarity,uint256 _weight,uint256 price) public{
        ThisFish.Owner = _owner;
        ThisFish.Weight = _weight;
        ThisFish.Rarity = _rarity;
        ThisFish.Price = price;
    }

}