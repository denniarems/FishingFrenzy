pragma solidity ^0.5.0;

<<<<<<< HEAD
import './SafeMath.sol';
// import './SafeMath.sol';
contract FishRod {
    using SafeMath for uint256;
    struct  Rod{
        uint256 Level;
        uint256 Power;
        uint256 CurrentPrice;
        uint256 NextPrice;
    }
mapping (address=>Rod) public UsersRod;

function FirstUserInitialRod() public{
    if(UsersRod[msg.sender].Level == 0){
        UsersRod[msg.sender].Level = 1;
        UsersRod[msg.sender].Power = 10;
        UsersRod[msg.sender].CurrentPrice = 10;
        UsersRod[msg.sender].NextPrice = 20;
}}
    function UpgradeFishRod() public{
        assert(condiUsersRod[msg.sender].Level!=0);
        uint256 Price = UsersRod[msg.sender].NextPrice;
        UsersRod[msg.sender].Level = UsersRod[msg.sender].Level.add(1);
        UsersRod[msg.sender].Power = UsersRod[msg.sender].Power.add(10);
        UsersRod[msg.sender].NextPrice = UsersRod[msg.sender].NextPrice.add(UsersRod[msg.sender].CurrentPrice);
        UsersRod[msg.sender].CurrentPrice = Price;
    }

=======
contract Fishrod{
    using SafeMath for uint256;
    struct Rod{
        uint256 Level;
        uint256 Power;
        uint256 CurretPrice;
        uint256 NextPrice;
    }
    mapping (address=>Rod) public UsersRod;

function FirstUserInitialRod()ublic{
    if (UsersRod[msg.sender].level=0)
    {
        UsersRod[msg.sender].level=1;
        UsersRod[msg.sender].power=10;
        UsersRod[msg.sender].CurretPrice=10;
        UsersRod[msg.sender].NextPrice=10;
        
    }
}

function UpgradeFishRod()public{
    assert(UsersRod[msg.sender].level!=0);
    uint256 price=UsersRod[msg.sender].NextPrice;
    UsersRode[msg.sender].level =  UsersRode[msg.sender].level.add(1);
     UsersRode[msg.sender].Power=  UsersRode[msg.sender].power.add(10);
      UsersRode[msg.sender].NextPrice= UsersRode[msg.sender].NextPrice.add(UsersRod[msg.sender].CurretPrice);
      UsersRode[msg.sender].CurretPrice=price;
}
>>>>>>> e8d42b9e03db6ab6d46583570c0bae7c5aff5fab
}