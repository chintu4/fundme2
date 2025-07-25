//SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Fundme {
    address public owner;
    mapping(address => uint256) public atf;

    constructor(){
        owner = msg.sender;
    }

    //function fund() public payable{
    //    atf(msg.sender);
    //}
    address[] public funders;

    function fund() public payable {
        require(msg.value > 0, "You need to send some ether");
        atf[msg.sender] += msg.value;
        //funders.push(msg.sender);
    }



}