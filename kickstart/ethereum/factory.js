import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x65A5d30D45eD10536E82377F1b37a4437e755F88"
);

export default instance;
