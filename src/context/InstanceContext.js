import React, { createContext, useState, useEffect, useContext } from "react";
import {ethers} from 'ethers';
import InAppWalletAbi from '../utils/InAppWallet.json';
import {toast} from 'react-hot-toast';
import { WalletContext } from "./WalletContext";

const InstanceContext = createContext();

const InstanceProvider = ({ children }) => {

    //Intialized states
    const [InAppInstance, setInAppInstance] = useState("");
    const [InAppWalletAddress,setInAppWalletAddress] = useState("");
    const [loading, setLoading] = useState(false);

    //Getting Wallet Context
    const {setWallet} = useContext(WalletContext);

    //Intialized Provider
    const dic_net = {
        name: 'rinkeby',
        chainId: 4,
        _defaultProvider: (providers) => new providers.JsonRpcProvider(`${process.env.React_App_INFURIA_KEY}`)
    };

    //Load the smart contracts
    useEffect(() => {
        loadInAppWalletContract()
    }, [])

    //In App Contract load function with custom signer
    const loadInAppWalletContract = async () => 
    {
        try {

            const signer = new ethers.Wallet(
                `${process.env.React_App_ACCOUNT_PRIVATE_KEY}`,
                 ethers.getDefaultProvider(dic_net)
             );

            const contract = new ethers.Contract(`${process.env.React_App_IN_WALLET_CONTRACT_ADDRESS}`,InAppWalletAbi, signer);
            setInAppInstance(contract)
            console.log(contract)

        } catch (error) {
            console.log(error)
        }
    }

    //create wallet function
    const createWallet = (username,password) => 
    {
        try {
            if(InAppInstance != "")
            {
                setLoading(true)
                toast.promise(
                    InAppInstance.createWallet(username,password).then(resp => {
                        toast.promise(
                            resp.wait().then(res => {
                                console.log(res['events'][0]['args'][0])
                                setInAppWalletAddress(res['events'][0]['args'][0])
                                setWallet({
                                    address:res['events'][0]['args'][0],
                                    signer:"",
                                    network:"",
                                    isConnected:true
                                })
                                setLoading(false)
                            }).catch(err => console.log(err))
                            , 
                            {
                                loading: 'Creating wallet Please Wait',
                                success: 'Wallet created Successfully',
                                error: 'Something Went Wrong',
                            }
                        )
                    }).catch(err => console.log(err))
                    , {
                        loading: 'Processing',
                        success:'Processed Successfully',
                        error: 'Error when fetching',
                      }
                )  
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
      <InstanceContext.Provider value={{ InAppInstance, createWallet, InAppWalletAddress, loading}}>
        {children}
      </InstanceContext.Provider>
    );
};


export {InstanceContext, InstanceProvider}