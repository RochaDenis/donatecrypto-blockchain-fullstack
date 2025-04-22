import { ethers } from "ethers";

const CONTRACT_ADDRESS = "0xD7ACd2a9FD159E69Bb102A1ca21C9a3e3A5F771B";

const CONTRACT_ABI: ethers.InterfaceAbi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      { "internalType": "string", "name": "title", "type": "string" },
      { "internalType": "string", "name": "description", "type": "string" },
      { "internalType": "string", "name": "videoUrl", "type": "string" },
      { "internalType": "string", "name": "imageUrl", "type": "string" }
    ],
    "name": "addCampaign",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getLastFiveCampaigns",
    "outputs": [
      {
        "components": [
          { "internalType": "address", "name": "author", "type": "address" },
          { "internalType": "string", "name": "title", "type": "string" },
          { "internalType": "string", "name": "description", "type": "string" },
          { "internalType": "string", "name": "videoUrl", "type": "string" },
          { "internalType": "string", "name": "imageUrl", "type": "string" },
          { "internalType": "uint256", "name": "balance", "type": "uint256" },
          { "internalType": "bool", "name": "active", "type": "bool" },
          { "internalType": "uint256", "name": "supporters", "type": "uint256" }
        ],
        "internalType": "struct Campaign[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

export async function getContract() {
  if (!window.ethereum) {
    throw new Error("MetaMask não encontrada");
  }

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();

  return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
}
