//this is used by the react app
import web3 from './web3.js';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0x0f3939b9E1B44a2313634ea5650C110FB0f0C7E4'
);

export default instance;