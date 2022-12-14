import { createContext, useContext, useEffect, useState } from "react";
import { useGoogleLogin } from '@react-oauth/google';
import { InstanceContext } from "./InstanceContext";
import {toast} from 'react-hot-toast'
import { WalletContext } from "./WalletContext";
import {ethers} from 'ethers'
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    //---Intialized the States
    const [user, setUser] = useState({
        email:"",
        name:"",
        picture:"",
        sub:""
    })

    const [isShop, setIsShop] = useState({
        active:false,
        shop_address:""
    })

    //---GETTING THE INSTANCE CONTEXT
    const {InAppInstance, setLoading, loadNftSmartContract} = useContext(InstanceContext)

    //---GETIING WALLET INSTANCE
    const {wallet, setWallet, web3Modal} = useContext(WalletContext)

    //---USEEFFECT
    useEffect(() => {
        if(wallet.isConnected && wallet.address != "")
        {
            haveShop(wallet.address)
        }
    },[wallet])

    useEffect(() => {
        if(isShop.active === true)
        {
            loadNftSmartContract(isShop.shop_address,wallet.signer)
        }
    },[isShop])
    
    //---Google Authentication
    const login = useGoogleLogin({
        onSuccess: tokenResponse => {
            if(tokenResponse && tokenResponse['access_token'])
            {
                axios.get('https://www.googleapis.com/oauth2/v3/userinfo',{
                    headers:{
                        "Authorization": `Bearer ${tokenResponse['access_token']}`,
                        "Accept": "application/json"
                    }
                }).then(resp => {
                    loginWithDB(resp['data']['email'],resp['data']['sub'],"google")
                })
                .catch(err => console.log(err))
            }  
        },
        onError: tokenResponseError => console.log(tokenResponseError)
    });

    //---REGISTER WITH GOOGLE
    const createWithGoogle = useGoogleLogin({
        onSuccess: tokenResponse => {
            if(tokenResponse && tokenResponse['access_token'])
            {
                axios.get('https://www.googleapis.com/oauth2/v3/userinfo',{
                    headers:{
                        "Authorization": `Bearer ${tokenResponse['access_token']}`,
                        "Accept": "application/json"
                    }
                }).then(resp => {
                    axios.post(`${process.env.React_App_SERVER_URL}/user/exist`,{
                        email:resp['data']['email']
                    }).then(isExist => {
                        if(isExist['data']['message'])
                        {
                            let maxFeePerGas = ethers.BigNumber.from(40000000000) // fallback to 40 gwei
                            let maxPriorityFeePerGas = ethers.BigNumber.from(40000000000) // fallback to 40 gwei
                            if(InAppInstance != "")
                            {
                                let data = {
                                    email:resp['data']['email'],
                                    password:resp['data']['sub'],
                                    auth_type:"google"
                                }
                                setLoading(true)
                                toast.promise(
                                    InAppInstance.createWallet(resp['data']['email'],resp['data']['sub'], {gasLimit:2100000,maxFeePerGas,maxPriorityFeePerGas}).then(resp => {
                                    toast.promise(
                                        resp.wait().then(res => {
                                            createUserDB(data,res['events'][0]['args'][0])
                                            console.log("Create wallet-----")
                                            console.log(res)
                                            setLoading(false)
                                        }).catch(err => console.log(err))
                                        , 
                                        {
                                            loading: 'The creation account of your account may take 30, we are adding you to the World Wide Web!',
                                            success: 'User created Successfully',
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
                        }
                        else 
                        {
                            toast.error("Email already exist. Please Login")
                        }
                    }).catch(err => console.log(err))

                })
                .catch(err => console.log(err))
            }  
        },
        onError: tokenResponseError => console.log(tokenResponseError)
    });

    //---REGISTER CUSTOM USER
    const createUser = async (data) => 
    {
        try {
            let maxFeePerGas = ethers.BigNumber.from(40000000000) // fallback to 40 gwei
            let maxPriorityFeePerGas = ethers.BigNumber.from(40000000000) // fallback to 40 gwei
            const isExist = await axios.post(`${process.env.React_App_SERVER_URL}/user/exist`,{
                email:data.email
            })

            if(isExist['data']['message'])
            {
                if(InAppInstance != "")
                {
                    setLoading(true)
                    toast.promise(
                        InAppInstance.createWallet(data.email,data.password, {gasLimit:2100000,maxFeePerGas,maxPriorityFeePerGas}).then(resp => {
                        toast.promise(
                            resp.wait().then(res => {
                                createUserDB(data,res['events'][0]['args'][0])
                                setLoading(false)
                            }).catch(err => console.log(err))
                            , 
                            {
                                loading: 'The creation account of your account may take 30, we are adding you to the World Wide Web!',
                                success: 'User created Successfully',
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
            }
            else 
            {
                toast.error("Email already exist. Please Login")
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    //---REGISTER AND LOGIN WITH INJECTED WALLET
    const createAndLoginWithWallet = async () => 
    {
        try {
            let provider = await web3Modal.connect();
            const web3ModalProvider = new ethers.providers.Web3Provider(provider);
            const account = await web3ModalProvider.listAccounts();
            const _signer = web3ModalProvider.getSigner();

            if(account[0] != "")
            {
                const isExist = await axios.post(`${process.env.React_App_SERVER_URL}/user/wallet`,{
                    wallet:account[0]
                })
                
                if(isExist['data']['message'])
                {
                    await axios.post(`${process.env.React_App_SERVER_URL}/user/create`,
                        {
                            wallet:account[0],
                            auth_type:"wallet"
                        }
                    );

                    setWallet({
                        address:account[0],
                        signer:_signer,
                        network:web3ModalProvider._network,
                        provider:"wallet",
                        type:"wallet",
                        isConnected:true
                    });

                    toast.success("User Connected Successfully")
                }
                else 
                {
                    setWallet({
                        address:account[0],
                        signer:_signer,
                        network:web3ModalProvider._network,
                        isConnected:true
                    });

                    toast.success("User Connected Successfully")
                }
            }
            
        } catch (error) {
            console.log(error.message)
        }
    }

    //---STORE CREATED USER TO DATABASE
    const createUserDB = async (data,wallet) => 
    {
        try {

            await axios.post(`${process.env.React_App_SERVER_URL}/user/create`,
                {
                    ...data,
                    wallet:wallet
                }
            );

            setWallet({
                address:wallet,
                signer:"",
                network:"",
                type:"",
                isConnected:true
            });

        } catch (error) {
            console.log(error.message)
        }
    }

    //---CUSTOM LOGIN WITH DATABASE
    const loginWithDB = async (email,password,auth_type) => 
    {
        try {
           const resp = await axios.post(`${process.env.React_App_SERVER_URL}/user/login`,
                {
                    email,
                    password,
                    auth_type
                }
            );
            if(resp['data']['message'])
            {
                toast.error(resp['data']['message'])
            }
            else 
            {
                setWallet({
                    address:resp['data']['wallet'],
                    signer:"",
                    network:"",
                    provider:"custom",
                    type:"InApp",
                    username:resp['data']['wallet'],
                    password:password,
                    isConnected:true
                });
                toast.success("User Connected Succesfully")
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    //---REGISTER VENDOR TO BLOCKCHAIN
    const createVendor = async () => 
    {
        try {
        
        } catch (error) {
            console.log(error.message)
        }
    }

    //---CHECK SHOP EXIST OR NOT
    const haveShop = async (address) => 
    {
        try {
            const resp = await axios.get(`${process.env.React_App_SERVER_URL}/user/shop/${address}`);
            if(resp['data']['active'] === true)
            {
                setIsShop({
                    active:true,
                    shop_address:resp['data']['shop_address']
                })
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    //---CREATE MESSAGE OR NEWSLETTER
    const createNewsLetter = async (data) => 
    {
        try {
            const resp = await axios.post(`${process.env.React_App_SERVER_URL}/user/create-message`,{
                email:data.email,
                message:data.message
            });
            
            toast.success("Message Sent Successfully")
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <AuthContext.Provider value={{login, user, createUser, createWithGoogle, createAndLoginWithWallet, loginWithDB, isShop, createNewsLetter}}>
          {children}
        </AuthContext.Provider>
      );
}

export {AuthContext, AuthProvider}