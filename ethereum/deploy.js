//here truffle hdwalletprovider is used to get the account number basically and interact with the node provided by infura
// basically get a provider that tells which network we are supposed to be communicating with ie. ganache, rinkeby ,main etc
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

//here actually an instance of hd wallet provider is created and is being connected to the node to work on the chain
const provider = new HDWalletProvider(
  'famous damage assume renew unable cause diagram vacant vague because summer kid',
	'https://rinkeby.infura.io/v3/34d212a7526247ab9d2f8e05435b2fe0'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();
// address of deployed factory:0xBC8AAcdAc58993f4fb00db2E46a5E4f307fe22f1
//address of new deployed factory:0x0f3939b9E1B44a2313634ea5650C110FB0f0C7E4