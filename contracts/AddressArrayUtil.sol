pragma solidity ^0.5.0;

library AddressArrayUtil {

  /** Finds the index of a given value in an array. */
function IndexOf(address[] memory self, address value) internal pure returns(uint256) {
  require(self.length >= 0, "Empty Array");
    uint256 i = 0;
    while (self[i] != value) {
      i++;
    }
    if (self[i] == value) {
    return i+1;
    } else {
    return 0;
    }
  }

  /** Removes the given value in an array. */
  // function RemoveByValue(address[] memory self, address value) internal pure {
  //   uint256 i = IndexOf(self,value);
  //   RemoveByIndex(self,i);
    
  // }

  /** Removes the value at the given index in an array. */
  // function RemoveByIndex(address[] memory self,uint256 index) internal pure {
  //  delete self[index];
  // }
  function RemoveByIndex(address[] storage self,uint256 index) internal {
    for (uint256 i = index; i < self.length-1; i++) {
      self[i] = self[i+1];
    }
    delete self[self.length-1];
    self.length--;
    // return self;
  }

}