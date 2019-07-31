pragma solidity ^0.5.0;

contract BuyRode {
    
    enum rodetype {copper, silver, gold}
    
    struct property {
       
        uint power;
       
        rodetype mytype;
    }
    
    mapping(uint => property) rode;
    
    function setRode(uint _roll,  uint _power, rodetype _mytype) public {
        rode[_roll] = property(_power, _mytype );
    }
    
    function getRode(uint _roll) public view returns ( uint _power,  rodetype _mytype){
        _power = rode[_roll].power;
        
        _mytype = rode[_roll].mytype;
    }
    
}