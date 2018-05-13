import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xb1f0B2114F5d232Bf8627BddaC90A4C2b51B4535"
);

export default instance;
