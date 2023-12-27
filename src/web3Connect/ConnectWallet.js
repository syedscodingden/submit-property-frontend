import {
  createWeb3Modal,
  defaultWagmiConfig,
  useWeb3Modal,
} from "@web3modal/wagmi/react";
import classes from "./ConnectWallet.module.css";

import { WagmiConfig } from "wagmi";
import { arbitrum, mainnet } from "viem/chains";
import { useState, useEffect } from "react";
// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "9fb5f1f8443520f624b8dfc06f7de8f0";

// 2. Create wagmiConfig
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });

export default function ConnectWallet(props) {
  const { open } = useWeb3Modal();

  useEffect(() => {
    getCurrentlyConnectedWallets();
    addWalletListener();
  }, []);

  const handleDisconnect = () => {
    // clearCachedProvider();
    // window.localStorage.clear();
  };

  async function requestAccount() {
    console.log("Requesting Account");

    if (window.ethereum) {
      console.log("detected");

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        props.onWalletChange(accounts);
        console.log(accounts);
      } catch (error) {
        console.log("Error connecting");
      }
    } else {
      alert("Meta mask not detected");
    }
  }

  async function getCurrentlyConnectedWallets() {
    console.log("Requesting Account");

    if (window.ethereum) {
      console.log("detected");

      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        console.log("got accounts");
        if (accounts.length > 0) {
          props.onWalletChange(accounts);
          console.log(accounts);
        }
      } catch (error) {
        console.log("Error connecting to connected wallets");
      }
    } else {
      alert("Meta mask not detected");
    }
  }

  const addWalletListener = async () => {
    try {
      if (
        typeof window != "undefined" &&
        typeof window.ethereum != "undefined"
      ) {
        window.ethereum.on("accountsChanged", (accounts) => {
          props.onWalletChange(accounts);
          console.log("From listener", accounts);
        });
      } else {
        props.onWalletChange([]);
        console.log("Please install metamask");
      }
    } catch (error) {
      console.log("Error connecting to connected wallets");
    }
  };
  //() => open()
  return (
    <WagmiConfig config={wagmiConfig}>
      {/* <w3m-button size="sm" /> */}
      <button onClick={requestAccount} className={classes.connectWallet}>
        {props.walletAddress === "" || props.walletAddress === null
          ? "Connect Wallet"
          : "Wallet Connected"}
      </button>
      {/* <button onClick={() => handleDisconnect()}>Disconnect Wallet</button> */}
    </WagmiConfig>
  );
}
