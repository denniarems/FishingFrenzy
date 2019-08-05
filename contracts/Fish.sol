pragma solidity ^0.5.0;


import './openzeppelin-solidity/contracts/math/SafeMath.sol';

contract Fish  {
    using SafeMath for uint256;

    struct FishModel  {
        uint256 Rarity;
        uint256 Weight;
        address Owner;
        uint256 Price;
    }
    FishModel public ThisFish;

        constructor(address _owner,uint256 _weight,uint256 _price) public   {
        ThisFish.Owner = _owner;
        ThisFish.Rarity = Rarity();
        ThisFish.Weight = _weight;
        ThisFish.Price = _price;
    }

    function Rarity() public view returns(uint256)  {
        if ((block.gaslimit+block.difficulty+now).mod(100)==0) {
            return 0;
        } 
        if ((block.gaslimit+block.difficulty+now).mod(10)==0) {
            return 1;
        } else{
            return 2;

        } 
    }

}