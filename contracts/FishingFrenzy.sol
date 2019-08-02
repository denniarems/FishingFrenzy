pragma solidity ^0.5.0;
contract FishingFrenzy{
    enum Rarity{common,rare,epic}
    
    struct Fish{
        uint8 weight;
        Rarity fishRarity;
    }
    struct FishRod{
        uint8 power;
    }
    struct User{
        bool ExistingUser;
        FishRod fishRod;
        Fish fish;
    }
    mapping(address => User) Userdeails;
    function GetUserDetails() public view returns(bool _isexsiting, uint8 _weight ,Rarity _rarity){
        _isexsiting = Userdeails[msg.sender].ExistingUser;
        _weight=Userdeails[msg.sender].fish.weight;
        _rarity=Userdeails[msg.sender].fish.fishRarity;
    }
    function SetUserDetails() public{
        Userdeails[msg.sender].ExistingUser = true;
    }
    function SetRodDetails(uint8 _power)public{
        Userdeails[msg.sender].fishRod.power= _power;
    }
    function SetFishDetails(uint8 _weight,Rarity _Rarity) public{
        Userdeails[msg.sender].fish.weight=_weight;
         Userdeails[msg.sender].fish.fishRarity=_Rarity;
        
    }
}