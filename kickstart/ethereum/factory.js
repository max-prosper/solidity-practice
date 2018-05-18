import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x234531ea26629C069D9c62515516d0E40eEF4Fc6"
);

export default instance;
