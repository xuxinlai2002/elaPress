let Web3 = require('web3');
let web3Obj

if (typeof web3Obj !== 'undefined') {
    web3Obj = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3Obj = new Web3(new Web3.providers.HttpProvider("http://0.0.0.0:20636"));
    //web3Obj = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
    //web3Obj = new Web3(new Web3.providers.WebsocketProvider("ws://127.0.0.1:8545"));
}

web3Obj.eth.getAccounts().then(function (value) { 
    
    console.log(value[0]);
    web3Obj.eth.getBalance(value[0])
    .then(value =>{
        console.log(value);
    });

    console.log(value[1]);
    web3Obj.eth.getBalance(value[1])
    .then(value =>{
        console.log(value);
    });

})
