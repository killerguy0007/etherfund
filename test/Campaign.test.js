// // assert is used to make assumptions a==b etc in the code
// const assert=require('assert');
// // this is used to create a local ethereum test network and also a set of accounts that are open i.e. no keys to configure
// const ganache =require('ganache-cli');
// //here W is capital and indicates that an instance is made with the constructor call and returns a class of web3.
// //web3=Web3 will work just as var web3 = new Web3(); in sorts.
// const Web3=require('web3');
// //now this here is an instance of web3 in which ganache network provides with the provider.i.e. a connection is established.
// const provider=ganache.provider();
// const web3= new Web3(provider);
// //usually we get bytecode and ABI of the compiled contract but here we are getting the full json.
// // byte code is the actually deployed contract while the abi is fed to web3 library that helps to interact with the deployed contract on the network.
// const compiledFactory = require('../ethereum/build/CampaignFactory.json');
// const compiledCampaign= require('../ethereum/build/Campaign.json');


// // these variables take some value in the beforeEach{} block and is later to be used in the it{} block.
// let accounts;
// let factory;

// // here it is absurd especially for testing purposes to ask factory for an instance of campaign so we simply just use the 
// let campaignAddress;
// let campaign;

// beforeEach(async () => {
// 	//web3 has different modules for different crypto here we use the eth module and the particular functionality getAccounts();remember each web3 function or module you use is asynchronous in nature as it returns promises.
// 	//first we fetch accounts
// 	accounts = await web3.eth.getAccounts();
	
// 	//use one of those account to deploy the contract 
// 	factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
// 	.deploy({
// 		data: compiledFactory.bytecode
// 	})
// 	.send({
// 		from : accounts[0], 
// 		gas:'1000000' 
// 	});
	
// 	//here the method of createdCampaign to create a campaign is called
// 	await factory.methods.createCampaign('100').send({
// 		from: accounts[0],
// 		gas: '1000000'
// 	});
	
// 	//here a method to get the address of that deployed contract is called
// 	const addresses=await factory.methods.getDeployedCampaign().call();
// 	campaignAddress=addresses[0];
	
// 	//we use the interface to make the connection between contract and js ie the campaign
// 	campaign = await new web3.eth.Contract(JSON.parse(compiledCampaign.interface),campaignAddress);
	
	
	
// });

// describe('campaigns', () => {
// 	it('deploys a factory and a campaign', () => {
// 		assert.ok(factory.options.address);
// 		assert.ok(campaign.options.address);
// 	});
	
// 	it('marks caller as the campaign manager', async () => {
// 		const manager = await campaign.methods.manager().call();
// 		assert.equal(accounts[0],manager);
// 	});
	
// 	// it('allows people to contribute money and marks them as approver', async (done) =>{
// 	// 	await campaign.methods.contribute().send({ 
// 	// 		value: '200',
// 	// 		from:accounts[1]
// 	// 	});
		
// 	// 	const isContributer = await campaign.methods.approvers(accounts[1]).call();
// 	// 	assert(isContributer);
		
// 	// 	done();
// 	// }).catch(done);
	
	
// });

///////////////////////////////////////////////////////////////
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: '1000000' });

  await factory.methods.createCampaign('100').send({
    from: accounts[0],
    gas: '1000000'
  });

  [campaignAddress] = await factory.methods.getDeployedCampaigns().call();
  campaign = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface),
    campaignAddress
  );
});

describe('Campaigns', () => {
	// that a contract is depoyed actually
  it('deploys a factory and a campaign', () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });
// this assures that the one creating the campaign is the manager
  it('marks caller as the campaign manager', async () => {
    const manager = await campaign.methods.manager().call();
    assert.equal(accounts[0], manager);
  });

  it('allows people to contribute money and marks them as approvers', async () => {
    await campaign.methods.contribute().send({
      value: '200',
      from: accounts[1]
    });
    const isContributor = await campaign.methods.approvers(accounts[1]).call();
    assert(isContributor);
  });

  it('requires a minimum contribution', async () => {
    try {
      await campaign.methods.contribute().send({
        value: '5',
        from: accounts[1]
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it('allows a manager to make a payment request', async () => {
    await campaign.methods
      .createRequest('Buy batteries', '100', accounts[1])
      .send({
        from: accounts[0],
        gas: '1000000'
      });
    const request = await campaign.methods.requests(0).call();

    assert.equal('Buy batteries', request.description);
  });

  it('processes requests', async () => {
    await campaign.methods.contribute().send({
      from: accounts[0],
      value: web3.utils.toWei('10', 'ether')
    });

    await campaign.methods
      .createRequest('A', web3.utils.toWei('5', 'ether'), accounts[1])
      .send({ from: accounts[0], gas: '1000000' });

    await campaign.methods.approveRequest(0).send({
      from: accounts[0],
      gas: '1000000'
    });

    await campaign.methods.finalizeRequest(0).send({
      from: accounts[0],
      gas: '1000000'
    });

    let balance = await web3.eth.getBalance(accounts[1]);
    balance = web3.utils.fromWei(balance, 'ether');
    balance = parseFloat(balance);

    assert(balance > 104);
  });
});











