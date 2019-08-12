pragma solidity ^0.5.0;
import "./FFlibrary.sol";

contract modifiers{
    using FFlibrary for FFlibrary.FFModel;
    FFlibrary.FFModel Game;

    modifier isFishOwner() {
        require(Game.FishOwner[msg.sender] == msg.sender,"User is not Fish owner");
        _;
    }
    modifier HaveFrenzyCoin(uint256 _amount) {
        require(Game.Players[msg.sender].FrenzyCoinCount >= _amount,"insufficient balance");
        _;
    }
    modifier isArrayIndex(address[] memory _array,uint256 _position) {
        require(_position >= 0 && _position < _array.length,"Invalid Array Index");
        _;
    }
    modifier isArrayLength(uint256 _length,uint256 _position) {
        require(_position >= 0 && _position < _length,"Invalid Array Length");
        _;
    }
    function isSameAddress(address _address1,address _address2) internal pure{
        require(_address1 == _address2,"Address not equal");
    }
    function isNotSameAddress(address _address1,address _address2) internal pure{
        require(_address1 != _address2,"Address is equal");
    }
    function isSameValue(uint256 _value1,uint256 _value2) internal pure{
        require(_value1 == _value2,"Value not equal");
    }
}