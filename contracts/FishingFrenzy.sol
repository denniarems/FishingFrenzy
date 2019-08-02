pragma solidity ^0.5.0;
contract FishingFrenzy{
    struct FishRod{
        uint8 power;
    }
    struct Fish{
        uint8 power;
    }
    struct User{
        bool ExistingUser;
        FishRod fishRod;
        Fish fish;
    }
    mapping(address => User) Userdeails;
    function GetUserDetails() public view returns(bool _isexsiting){
        _isexsiting  = Userdeails [msg.sender] . ExistingUser;
    }
    function SetUserDetails() public{
        Userdeails[msg.sender].ExistingUser = true;
    }

}