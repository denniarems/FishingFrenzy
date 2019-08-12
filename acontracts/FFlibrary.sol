pragma solidity ^0.5.0;
import "./SafeMath.sol";
/**
 * @title FrenzyFish Library
 */
library FFlibrary{
    using SafeMath for uint256;
    struct FisherModel{
        uint256 FishRodLevel;
        address[] Fishes;
        uint256 FrenzyCoinCount;
    }

    struct FFModel{
        address[] Fishes;
        mapping(address => address) FishOwner;
        mapping(address => FisherModel) Players;
        MarketOrders[] SellOrders;
    }
    function getPlayerFishes(FFModel storage self) public view returns(address[] memory){
        return self.Players[msg.sender].Fishes;
    }
    function subThisPlayerFrenzyCoin(FFModel storage self, uint256 _amount) internal{
        require(self.Players[msg.sender].FrenzyCoinCount >= _amount, "insufficient FrenzyCoin");
        self.Players[msg.sender].FrenzyCoinCount = self.Players[msg.sender].FrenzyCoinCount.sub(_amount);
    }
    function addPlayerFrenzyCoin(FFModel storage self, address _user, uint256 _amount) internal {
        self.Players[_user].FrenzyCoinCount = self.Players[_user].FrenzyCoinCount.add(_amount);
    }
    function addPlayerFish(FFModel storage self, address _fish) internal {
        self.FishOwner[_fish] = msg.sender;
        self.Players[msg.sender].Fishes.push(_fish);
    }
}