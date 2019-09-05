pragma solidity ^0.5.0;

library AddressArrayUtil {

  /** Finds the index of a given value in an array. */
function IndexOf(address[] memory self, address value) public pure returns(uint256) {
    uint256 i = 0;
    while (self[i] != value) {
      i++;
    }
    return i;
  }

  /** Removes the given value in an array. */
  function RemoveByValue(address[] memory self, address value) public pure {
    uint256 i = IndexOf(self,value);
    RemoveByIndex(self,i);
    
  }

  /** Removes the value at the given index in an array. */
  function RemoveByIndex(address[] memory self,uint256 index) public pure {
   delete self[index];
  }

}