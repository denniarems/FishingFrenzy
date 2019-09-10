pragma solidity ^0.5.0;
import './Fish.sol';
import './FishRod.sol';
import './Market.sol';
contract FrenzyFish is FishRod,Market{
  // Constructor
    constructor () public {
    }
    // address[] public Fishes;

 // Function to Fishing a new Fish into Structure "FishModel" with reference to msg.sender .
    function Fishing() public{
        address newfish = address(new Fish(msg.sender,UsersRod[msg.sender].Level));
        Fishes[msg.sender].push(newfish);
    }
    //function to list all the fish of an account
     function ListAllFishes() public view returns(address[] memory) {
         return Fishes[msg.sender];
     }
      //function to get the details of a fish
        function GetFishDetails(address fish) public view returns(uint256 _rarity,uint256 _weight,uint256 _price,bool _onOrder){
        return Fish(fish).GetDetails();
    }


    // function RechargeUsingFish(address _Fish,uint256 _position) public{
    //     require(FishOwner[_Fish] == msg.sender,"User is not Fish owner");
    //     require(_position >= 0 && _position < Players[msg.sender].Towns.length,"Invalid Array Index");
    //     require(Players[msg.sender].Towns[_position] == _Fish,"Invalid Town Index");
    //     Fish(_Fish).DestroyFish();
    //     FishOwner[_Fish] = address(0);
    //     Players[msg.sender].Towns[_position] = address(0);
    // }

}