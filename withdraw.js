Web3 = require("web3");
web3 = new Web3("http://127.0.0.1:20636");

amount_wei=web3.utils.toWei("0.01")
from_ks="0x53781E106a2e3378083bdcEdE1874E5c2a7225f8"
withdraw_to="0x41eA6aD88bbf4E22686386783e7817bB7E82c1ed"
fee_wei=web3.utils.toWei("0.00010001")

contract = new web3.eth.Contract([{"constant":false,"inputs":[{"name":"_addr","type":"string"},{"name":"_amount","type":"uint256"},{"name":"_fee","type":"uint256"}],"name":"receivePayload","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_addr","type":"string"},{"indexed":false,"name":"_amount","type":"uint256"},{"indexed":false,"name":"_crosschainamount","type":"uint256"},{"indexed":true,"name":"_sender","type":"address"}],"name":"PayloadReceived","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_sender","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"},{"indexed":true,"name":"_black","type":"address"}],"name":"EtherDeposited","type":"event"}]);
contract.options.address = "0x491bC043672B9286fA02FA7e0d6A3E5A0384A31A";

acc = web3.eth.accounts.decrypt(from_ks, "asdfasdf");
cdata =contract.methods.receivePayload(withdraw_to,amount_wei,fee_wei).encodeABI()
tx = {data: cdata, to:contract.options.address, from:acc.address, gas: "3000000", gasPrice: "1"};
tx.value=amount_wei

acc.signTransaction(tx).then((res)=>{
   console.log("coming")
   stx=res;
   console.log(stx.rawTransaction)
   web3.eth.sendSignedTransaction(stx.rawTransaction).then(console.log)});
