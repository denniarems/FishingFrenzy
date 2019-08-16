pragma solidity ^0.5.0;


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
        UsersRod[msg.sender].Power = 3;
        UsersRod[msg.sender].CurrentPrice = 255;
        UsersRod[msg.sender].NextPrice = 385;
    }}
    function UpgradeFishRod() public{
        assert(UsersRod[msg.sender].Level!=0);
        uint256 Price = UsersRod[msg.sender].NextPrice;
        UsersRod[msg.sender].Level = UsersRod[msg.sender].Level.add(1);
        UsersRod[msg.sender].Power = UsersRod[msg.sender].Power.add(3);
        UsersRod[msg.sender].NextPrice = UsersRod[msg.sender].NextPrice.add(UsersRod[msg.sender].CurrentPrice);
        UsersRod[msg.sender].CurrentPrice = Price;
    }
    function GetDetails() public view returns(uint256,uint256,uint256){
        return(UsersRod[msg.sender].Level,UsersRod[msg.sender].Power,UsersRod[msg.sender].NextPrice);
    }
}