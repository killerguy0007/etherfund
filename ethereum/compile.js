// we can't simply require the inbox.sol because it will try to get run but not a javascript file. so we read our source code

//path module to get cross platform operatability
const path= require('path');
//file system module used to read the contents of file.
const fs= require('fs-extra');
//node module solc required to compile as this is the compiler
const solc=require('solc');


// we follow the four steps that were mentioned in diagram

//1. remove the build folder and everything inside
//this here is a path to build folder.
const buildPath=path.resolve(__dirname,'build');
// basically rmdir -r on the build directory
fs.removeSync(buildPath);


//2.read the camaign file from the contracts dir
// constpath generates a path from the compile.js to inbox.sol file
// here the __ dirname takes us to the boilerplate folder
// the second parameter is the inbox.sol location.
// the third index is inbox.sol itself.

const campaignPath=path.resolve(__dirname,'contracts','Campaign.sol');
//source variable gets the source code from the inbox.sol
//utf8 is encoding type
const source=fs.readFileSync(campaignPath,'utf8');


//3. compile the contracts with solidity compiler
//the solc.compile basically compiles and give the ABI and bytecode
//solc.compile(1.the source codes of the contracts,2. no of contracts);
const output= solc.compile(source,1).contracts;

//4. we firstly rebuild the folder and then we go to save contracts in build dir
fs.ensureDirSync(buildPath);

for(let contract in output)
{
	fs.outputJsonSync(
		path.resolve(buildPath,contract.replace(':','') + '.json'),
		output[contract]
	);
}