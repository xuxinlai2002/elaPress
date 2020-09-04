let Web3 = require('web3');
let solc = require('solc');
let fs = require('fs');
let web3Obj

if (typeof web3Obj !== 'undefined') {
    web3Obj = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3Obj = new Web3(new Web3.providers.HttpProvider("http://0.0.0.0:20636"));
    //web3Obj = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
    //web3Obj = new Web3(new Web3.providers.WebsocketProvider("ws://127.0.0.1:8545"));
}



let data = fs.readFileSync('./MetaCoin.sol');
let output = solc.compile(data.toString(), 1);

let bytecode = "0x" + output.contracts[':MetaCoin'].bytecode;
console.log("----------bytecode start ----------")
console.log(bytecode)
console.log("----------bytecode end ----------")

let abi = output.contracts[':MetaCoin'].interface;
//console.log("----------abi----------")
console.log(abi)