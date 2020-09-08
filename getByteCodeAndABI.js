// SPDX-License-Identifier: MIT

let solc = require('solc');
let fs = require('fs');

// let data = fs.readFileSync('./MetaCoin.sol');

// solc.compile(data.toString(),function(data){

//     console.log(data);
// });


// solc.compile(data.toString(), data=>{
    
//     console.log(data);
//     // console.log(abi);

// });






// let bytecode = "0x" + output.contracts[':MetaCoin'].bytecode;
// console.log("----------bytecode start ----------")
// console.log(bytecode)
// console.log("----------bytecode end ----------")

// let abi = output.contracts[':MetaCoin'].interface;
// //console.log("----------abi----------")
// console.log(abi)







// let output = solc.compile(data.toString(), 1);

// let bytecode = "0x" + output.contracts[':MetaCoin'].bytecode;
// console.log("----------bytecode start ----------")
// console.log(bytecode)
// console.log("----------bytecode end ----------")

// let abi = output.contracts[':MetaCoin'].interface;
// //console.log("----------abi----------")
// console.log(abi)


let MetaCoinSol = fs.readFileSync('./MetaCoin.sol' , 'utf8')
let complierInput = {
    language: 'Solidity',
    sources:
    {
        'MetaCoin.sol': 
        {
            content: MetaCoinSol
        }
    },
    settings:
    {
        optimizer:
        {
            enabled: true
        },
        outputSelection:
        {
            '*':{
                '*':['*']
            }
        }
    }
};
console.log('compiling contract');
let compiledContract = JSON.parse(solc.compile(JSON.stringify(complierInput)));

console.log(compiledContract);
console.log('Contract Compiled');
for (let contractName in compiledContract.contracts['MetaCoin.sol']) {


    console.log(contractName , compiledContract.contracts['MetaCoin.sol'][contractName].abi);      
    let abi = compiledContract.contracts['MetaCoin.sol'][contractName].abi;
    console.log(JSON.stringify(abi));

    let bytecode = compiledContract.contracts['MetaCoin.sol'].bytecode;
    console.log(compiledContract.contracts['MetaCoin.sol'][contractName].evm.bytecode.object);



    // fs.writeFileSync(`./contracts/bin/${contractName}_abi.json` , JSON.stringify(abi));
    // return compiledContract.contracts['MetaCoin.sol'][contractName];
}


















