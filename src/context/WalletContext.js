import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnect from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { createContext, useEffect, useState } from "react";

const WalletContext = createContext();

const WalletProvider = ({ children }) => {

    //initialized states
    const [wallet, setWallet] = useState({
        address:"",
        signer:"",
        network:"",
        isConnected:false
    })

    //intialized the web3 provider for wallet connection
    const providerOptions = {
        walletlink: {
          package: CoinbaseWalletSDK,
          options: {
            appName: "The Spot Room",
            infuraId: "219cce269f774a9f9970dd42da83cb5b",
          },
        },
        walletconnect: {
            package: WalletConnect, 
            options: {
              infuraId: "219cce269f774a9f9970dd42da83cb5b",
            },
          },
      };

    //initialized the web3model
    const web3Modal = new Web3Modal({
        network: "rinkeby",
        cacheProvider:false,
        disableInjectedProvider: false,
        providerOptions 
    });

    
    //wallet connect functionality.
    const connect = async () => 
      {
        let provider = await web3Modal.connect();
        const web3ModalProvider = new ethers.providers.Web3Provider(provider);
        const account = await web3ModalProvider.listAccounts();
        const _signer = web3ModalProvider.getSigner();
        setWallet({
            address:account[0],
            signer:_signer,
            network: web3ModalProvider._network,
            isConnected:false
        })
      }

    //disconnect wallet
    const disConnect = () => 
    {
        setWallet({
            address:"",
            signer:"",
            network:"",
            isConnected:false
        })
    }
    return (
        <WalletContext.Provider value={{connect, wallet, disConnect, setWallet, web3Modal}}>
          {children}
        </WalletContext.Provider>
      );
}

export {WalletContext, WalletProvider}