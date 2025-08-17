import { PolkadotAgentKit } from '@polkadot-agent-kit/sdk';

// Define the Polkadot Agent Kit API
const agent = new PolkadotAgentKit(<your private key>, {
    keyType: "Sr25519", // "Ed25519", "Ecdsa"
});
// Initialize the Polkadot Agent Kit API to connect to the Polkadot network
agent.initializeApi();

// Set up tools
// Get balance of agent account
const checkBalance = agent.getNativeBalanceTool();
// Transfer native tokens to a recipient address on a specific chain.
const transferNative = agent.transferNativeTool();
// Transfer native tokens to a recipient address on a specific chain via xcm.
const xcmTransferNativeAsset = agent.xcmTransferNativeTool();
