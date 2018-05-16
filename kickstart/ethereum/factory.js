import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x4e47B57f4639A46c731a9A557ca2c12c8b0f405d"
);

export default instance;
