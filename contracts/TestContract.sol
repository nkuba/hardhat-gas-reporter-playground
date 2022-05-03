pragma solidity ^0.8.9;


contract TestContract {
    string storedValue;

    function initialize(string memory initialValue)  public {
        storedValue = initialValue;
    }

    function setValue(string memory newValue) public {
    storedValue = newValue;
    }
}
