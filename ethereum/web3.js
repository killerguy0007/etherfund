import Web3 from 'web3';
// const provider= window.web3.provider;
// const web3=new Web3(provider);

//let means we want to be able to reassign this variable;
let web3;
//if we are in the browser && metamask is running
if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
	//then create a 
	web3 =  new Web3(window.web3.currentProvider);
}else {
	//if we are at the server *or* the user is not running metamask
	//we set up our own provider
	const provider=new Web3.providers.HttpProvider(
			'https://rinkeby.infura.io/v3/34d212a7526247ab9d2f8e05435b2fe0',
	);
	web3 = new Web3(provider);
}

//---------------------this was first hit and try solution--------------------------------

// window.addEventListener("load", async () => {
//   // Modern dapp browsers...
//   if (window.ethereum) {
//     window.web3 = new Web3(window.ethereum);
//     try {
//       // Request account access if needed
//       await window.ethereum.enable();
//     } catch (error) {
//       // User denied account access...
//     }
//   }
//   // Legacy dapp browsers...
//   else if (window.web3) {
//     window.web3 = new Web3(web3.currentProvider);
//   }
//   // Non-dapp browsers...
//   else {
//     console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");
//   }
// });


//------------------------------------------------------------------------------------------

export default web3;

