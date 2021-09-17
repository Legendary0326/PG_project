import { pinJSONToIPFS } from "./pinata.js";
require("dotenv").config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const nft_contractABI = require("../contract_ABI/nft_contract-abi.json");
const life_contractABI = require("../contract_ABI/life_contract-abi.json");
// const nftContractAddress = "0xc0dfddc8bbc74c3c454d418b7801b7e81b6e9130";
const nftContractAddress = "0x530335c6f266dd3cfa083ac793a31bd87511446c";
const lifeContractAddress = "0x4fe34797fb017b1579feada89bac57e07523dae6";
const adminAddress = "0x6C6A7Bada6D38C718a27026b74B392Fda5a97d17";
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
const lifeAmount = 1000;

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        // status: "👆🏽 Write a message in the text-field above.",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          // status: "👆🏽 Write a message in the text-field above.",
          status: "minted",
        };
      } else {
        return {
          address: "",
          status: "🦊 Connect to Metamask using the top right button.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

async function loadContract() {
  // return new web3.eth.Contract(nft_contractABI, contractAddress);
}

export const mintNFT = async (url, name, description) => {
  if (url.trim() == "" || name.trim() == "" || description.trim() == "") {
    return {
      success: false,
      status: "❗Please make sure all fields are completed before minting.",
    };
  }

  //make metadata
  const metadata = new Object();
  metadata.name = name;
  metadata.image = url;
  metadata.description = description;

  const pinataResponse = await pinJSONToIPFS(metadata);
  if (!pinataResponse.success) {
    return {
      success: false,
      status: "😢 Something went wrong while uploading your tokenURI.",
    };
  }
  const tokenURI = pinataResponse.pinataUrl;
  window.nft_contract = await new web3.eth.Contract(nft_contractABI, nftContractAddress);
  window.life_contract = await new web3.eth.Contract(life_contractABI, lifeContractAddress);

  //mint NFT transaction
  const nftTransactionParameters = {
    to: nftContractAddress, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    data: window.nft_contract.methods
      .mintNFT(window.ethereum.selectedAddress, tokenURI)
      .encodeABI(),
  };

  //transfer 1000 life token to admin
  const lifeTransactionParameters = {
    to: lifeContractAddress, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    data: window.life_contract.methods
      .transfer(adminAddress, lifeAmount)
      .encodeABI(),
  };


  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [lifeTransactionParameters],
    });

    if(txHash){
      txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [nftTransactionParameters],
      });
    }

    return {
      success: true,
      status:
        "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" +
        txHash,
    };
  } catch (error) {
    return {
      success: false,
      status: "😥 Something went wrong: " + error.message,
    };
  }
};

export const getBalanceOf = async() => {

  await window.ethereum.enable();
  const nft_contract = await new web3.eth.Contract(nft_contractABI, nftContractAddress);
  const balance = await nft_contract.methods.getNFTBalance(window.ethereum.selectedAddress).call();
  // const balance = await web3.eth.getBalance("0x407d73d8a49eeb85d32cf465507dd71d507100c1");
  if(!balance){
    console.log('err');
    return false;
  }
  else{
    console.log('balance is', balance);
    return balance;
  }
    
};