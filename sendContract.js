const Web3 = require("web3");
const web3 = new Web3("http://127.0.0.1:20636");
let acc = ""

var arguments = process.argv.splice(2);

let constractAddr = arguments[0];
let toAddr = arguments[1];


web3.eth.getAccounts().then(function(value){
    acc=value[0];
    console.log("===>", acc);

    let bytecode = "0x608060405234801561001057600080fd5b5033600090815260208190526040902064174876e8009055610198806100376000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806390b98a111461003b578063f8b2cb4f1461007b575b600080fd5b6100676004803603604081101561005157600080fd5b506001600160a01b0381351690602001356100b3565b604080519115158252519081900360200190f35b6100a16004803603602081101561009157600080fd5b50356001600160a01b0316610147565b60408051918252519081900360200190f35b336000908152602081905260408120548211156100d257506000610141565b33600081815260208181526040808320805487900390556001600160a01b03871680845292819020805487019055805193845290830191909152818101849052517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360600190a15060015b92915050565b6001600160a01b03166000908152602081905260409020549056fea2646970667358221220114b46622bbba73729657daa51c703de4aaaaf9e36db1c21546f543b57ac9f6a64736f6c63430007010033";
    let abi = '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_from","type":"address"},{"indexed":false,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"sendCoin","outputs":[{"internalType":"bool","name":"sufficient","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'


   //let contract = new web3.eth.Contract(abi);
    let nonce = 0

    //let contract = new web3.eth.Contract(abi);

    // 相对于部署合约，多了第二个参数，即合约地址
    const contract = new web3.eth.Contract(JSON.parse(abi), constractAddr, {
        // 非必填，合约的bytecode
        data: bytecode,
        // 非必填，合约的创建者
        from: value[0]
    });


    web3.eth.getTransactionCount(acc).then(function(num) {

    nonce = num; console.log("nonce:", nonce)    
    //const data = contract.deploy({data: bytecode}).encodeABI();
    var data = contract.methods.sendCoin(toAddr,1).encodeABI();


    // // 调用合约中的sendCoin方法
    // myContract.methods.sendCoin(toAddr, 1).send({
    //     //非必填，该合约方法的调用者
    //     from: value[0]
    // })


    const tx = {data: data, from: acc, gas: "2000000", gasPrice: "2000000000",nonce:nonce};

    web3.eth.signTransaction(tx).then((stx) => {
    console.log("mmm", stx.raw)

        web3.eth.sendSignedTransaction(stx.raw).on("transactionHash", console.log).then(console.log).catch(console.log)


    })

   })

    
})

