pragma solidity ^0.5.0;
import './Fish.sol';
import './FishRod.sol';
contract FrenzyFish is FishRod,Fish{
    address[] public Fishes;
    constructor() public {
    }

    function Fishing() public{
        address newfish = address(new Fish(msg.sender,UsersRod[msg.sender].Level));
        Fishes.push(newfish);
    }
        function GetFishDetails(address fish) public view returns(uint256 _rarity,uint256 _weight,uint256 _price){
        return( Fish(fish).GetDetails() );
    }
    

}