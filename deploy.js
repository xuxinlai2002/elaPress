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

let bytecode = "0x608060405234801561001057600080fd5b5033600090815260208190526040902061271090556101ca806100346000396000f30060806040526004361061004b5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166390b98a118114610050578063f8b2cb4f14610095575b600080fd5b34801561005c57600080fd5b5061008173ffffffffffffffffffffffffffffffffffffffff600435166024356100d5565b604080519115158252519081900360200190f35b3480156100a157600080fd5b506100c373ffffffffffffffffffffffffffffffffffffffff60043516610176565b60408051918252519081900360200190f35b336000908152602081905260408120548211156100f457506000610170565b336000818152602081815260408083208054879003905573ffffffffffffffffffffffffffffffffffffffff871680845292819020805487019055805193845290830191909152818101849052517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360600190a15060015b92915050565b73ffffffffffffffffffffffffffffffffffffffff16600090815260208190526040902054905600a165627a7a723058202833d06a58d35d993741ca58b629ca7ecf4a43527b0ad0259bf000efcb650c6b0029";
let abi = '[{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendCoin","outputs":[{"name":"sufficient","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"}]';

web3Obj.eth.getAccounts().then(function (value) { 
    
    let myContract = new web3Obj.eth.Contract(JSON.parse(abi), '', {
        defaultAccount: value[0], // default from address
        defaultGasPrice: '20000' // default gas price in wei, 20 gwei in this case
    });

    myContract.deploy({
        data: bytecode,
        arguments: []
    })
    .send({
        from: value[0],
        gas: 1500000,
        gasPrice: '300000'
    },(error, transactionHash) => {
            console.log("deploy tx : " + transactionHash);
            console.log(error);
    });

})
