// SPDX-License-Identifier: GPL-3.0
pragma solidity >0.5.99 <0.8.0;



contract MetaCoin {
    mapping(address => uint) balances;

    event Transfer(address _from, address _to, uint256 _value);

    constructor(){
        balances[msg.sender] = 10000;
    }

    function sendCoin(address receiver, uint amount) public returns (bool sufficient) {

        if (balances[msg.sender] < amount) return false;

        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        emit Transfer(msg.sender, receiver, amount);
        
        return true;
    }


    function getBalance(address addr) public view returns (uint) {
        return balances[addr];
    }
}
