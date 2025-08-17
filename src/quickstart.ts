// via https://cocdap.github.io/agent-docs/quickstart.html
import { PolkadotAgentKit } from '@polkadot-agent-kit/sdk';

// Define the Polkadot Agent Kit API
const agent = new PolkadotAgentKit("someprivkey", {
      keyType: "Sr25519", // "Ed25519", "Ecdsa"
  });
// Initialize the Polkadot Agent Kit API to connect to the Polkadot network
agent.initializeApi();

// Set up tools
// Get balance of agent account
const checkBalance = agent.getNativeBalanceTool();
// Transfer native tokens to a recipient address on a specific chain.
// const transferNative = agent.transferNativeTool();
// Transfer native tokens to a recipient address on a specific chain via xcm.
// TODO: agent.xcmTransferNativeTool does not exist - guessing transferNativeTool is just for chain-local transfers
// const xcmTransferNativeAsset = agent.xcmTransferNativeTool();
