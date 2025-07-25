//SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Fundme {
    mapping(address => uint256) public addressToAmountFunded;
    address[] public funders;

    function fund() public payable {
        require(msg.value > 0, "You need to send some ether");
        addressToAmountFunded[msg.sender] += msg.value;
        //funders.push(msg.sender);
    }

    function getFunder(uint256 index) public view returns (address) {
        return funders[index];
    }
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
    function getFunderContribution(address funder) public view returns (uint256) {
        return addressToAmountFunded[funder];
    }

    function getAddressToAmountFunded(address funder) public view returns (uint256) {
        return addressToAmountFunded[funder];
    }
    function withdraw() public {
        require(msg.sender == address(this), "Only the contract owner can withdraw");
        // Reset the mapping and array before transferring funds        
        for (uint256 funderIndex = 0; funderIndex < funders.length; funderIndex++) {
            address funder = funders[funderIndex];
            addressToAmountFunded[funder] = 0;
        }
        funders = new address[](0);
        payable(msg.sender).transfer(address(this).balance);
    }   
}