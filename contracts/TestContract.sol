pragma solidity ^0.8.9;


import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract TestContract is Initializable {
    string storedValue;

    function initialize(string memory initialValue) initializer public {
        storedValue = initialValue;
    }

    function setValue(string memory newValue) public {
    storedValue = newValue;
    }
}
