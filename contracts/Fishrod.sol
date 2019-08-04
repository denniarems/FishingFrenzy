pragma solidity ^0.5.0;

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
}