import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnect from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { createContext, useContext, useEffect, useState } from "react";
import { InstanceContext } from "./InstanceContext";

const WalletContext = createContext();

const WalletProvider = ({ children }) => {

    //initialized states
    const [wallet, setWallet] = useState({
        address:"",
        signer:"",
        network:"",
        provider:"",
        type:"",
        isConnected:false
    })

    //---GETTING THE INSTANCE CONTEXT
    const {loadEscrowContract, dic_net, loadMultiVendorContract} = useContext(InstanceContext)

    //---USEEFFECT CALL FOR GETTING ESCROW CONTRACT & MULTI VENDOR CONTRACT
    useEffect(() => {
      if(wallet.isConnected && wallet.signer != "")
      {
        loadEscrowContract(wallet.signer)
        loadMultiVendorContract(wallet.signer)
      }
      else if(wallet.isConnected && wallet.signer == "")
      {
          const signer = new ethers.Wallet(
            `${process.env.React_App_ACCOUNT_PRIVATE_KEY}`,
            ethers.getDefaultProvider(dic_net)
        );
        loadEscrowContract(signer)
      }
    },[wallet])

    useEffect(() => {
      if(wallet.isConnected && wallet.address != "")
      {
        let obj = {
          address:wallet.address,
          type:wallet.type,
          isConnected:wallet.isConnected
        }
        localStorage.setItem("wallet",JSON.stringify(obj))
      }
    }, [wallet])

    useEffect(() => {
      const loadSession = async () => 
      {
        let isWallet = localStorage.getItem("wallet");
        isWallet = JSON.parse(isWallet)
        if(isWallet.isConnected == true)
        {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
          const signer = provider.getSigner();
          const Address = await signer.getAddress();
          if(Address == isWallet.address)
          {
            setWallet({
              address:isWallet.address,
              signer:signer,
              network:"",
              provider:provider,
              isConnected:isWallet.isConnected
            })
          }
          else 
          {
            localStorage.removeItem("wallet")
          }
        }
      }

      loadSession()
    }, [])

    if(window.ethereum)
    {
        window.ethereum.on('accountsChanged', function (accounts) {
            setWallet({
              address:"",
              signer:"",
              network:"",
              provider:"",
              isConnected:false
            })
            localStorage.removeItem("wallet")
            window.location.reload()
        })
    }

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