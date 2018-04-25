const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "pistol win unit moment connect glide elephant filter salt gown face city",
  "https://rinkeby.infura.io/pCfsJrvQhy5LpIVDodz2"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attemting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: 1000000, from: accounts[0], gasPrice: 50 * 1000000000 });

  console.log("Contract deployed to", result);
};

deploy();
