import { ethers } from "ethers";
import { createContext, useContext, useEffect, useState } from "react";
import { InstanceContext } from "./InstanceContext";
import {toast} from 'react-hot-toast'
import { WalletContext } from "./WalletContext";
import axios from "axios";

const EscrowContext = createContext();

const EscrowProvider = ({ children }) => {

    //---INTIALIZED THE STATES
    const [createCoinList, setCreateCoinList] = useState([]);
    const [createSellerCoinList, setCreateSellerCoinList] = useState([]);
    const [createTokenList, setCreateTokenList] = useState([]);
    const [createSellerTokenList, setCreateSellerTokenList] = useState([]);
    const [createCoinLoading, setCreateCoinLoading] = useState(false);

    //---GETTING THE INSTANCE CONTEXT
    const {EscrowInstance, loadEscrowContract} = useContext(InstanceContext)
    const {wallet} = useContext(WalletContext)
    const [cancelStatus, setCancelStatus] = useState(false);
    const [returnStatus, setReturnStatus] = useState(false);

    useEffect(() => {
        if(wallet.isConnected)
        {
            console.log('-----Load Escrow')
            loadEscrowContract(wallet.signer)
        }
    },[wallet])

    //---USEEFFECT FOR CALLING ESCROW EVENT CALL
    useEffect(() => {
        
    },[EscrowInstance,createCoinLoading,wallet])

    //---CREATE ESCROW ORDER FUNCTION
    const createEscrowOrder = async (_value,_token,_seller,_amount,_isCoin) => 
    {
        try {
            let resp;
            if(EscrowInstance != "")
            {
                console.log(EscrowInstance);
                if(_isCoin)
                {
                    resp = await EscrowInstance.accept(_seller,_seller,0,true,{
                        value:ethers.utils.parseUnits(_value,"ether")
                    })
                }
                else 
                {
                    resp = await EscrowInstance.accept(_token,_seller,_amount,false,{
                        value:0
                    })
                }

                toast.promise(
                    resp.wait().then(res => {
                        console.log(res)
                        setCreateCoinLoading(!createCoinLoading)
                    }).catch(err => console.log(err))
                    , 
                    {
                        loading: 'Placing Order Please Wait',
                        success: 'Order placed Successfully',
                        error: 'Something Went Wrong',
                    }
                    )
                }
            
        } catch (error) {
            console.log(error.message)
        }
    }

    //---GETTING LOGGED IN USER ESCROW TRANSACTIONS USING EVENTS
    const getEscrowTransaction = async () => 
    {
        if(EscrowInstance != "" && wallet.address != "")
        {
            const eventFilter = EscrowInstance.filters.createdCoinEscrow();
            const allTransactions = await EscrowInstance.queryFilter(eventFilter);
            await Promise.all(
                allTransactions.map(el => {
                    if(el.args['buyer'] === wallet.address)
                    {
                        lockEscrow(parseInt(el.args['tx_id']._hex,16)).then(isLocked => {
                            let obj = {}
                            if(isLocked)
                            {
                                obj = {
                                    buyer:el.args['buyer'],
                                    seller:el.args['seller'],
                                    token:el.args['tx_id'],
                                    islocked:true
                                }
                                setCreateCoinList(prev => [...prev,obj])
                            }
                            else 
                            {
                                obj = {
                                    buyer:el.args['buyer'],
                                    seller:el.args['seller'],
                                    token:el.args['tx_id'],
                                    islocked:false
                                }
                                setCreateCoinList(prev => [...prev,obj])
                            }
                        })
                    }
                })
            )
        }
    }

    //---GETTING LOGGED IN USER ESCROW TRANSACTION OVER TOKEN USING EVENTS
    const getTokenEscrowTransaction = async () => 
    {
        if(EscrowInstance != "" && wallet.address != "")
        {
            const eventFilter = EscrowInstance.filters.createdTokenEscrow();
            const allTransactions = await EscrowInstance.queryFilter(eventFilter);

            await Promise.all(
                allTransactions.map(el => {
                    if(el.args['buyer'] === wallet.address)
                    {
                        lockEscrow(parseInt(el.args['tx_id']._hex,16)).then(isLocked => {
                            let obj = {}
                            if(isLocked)
                            {
                                obj = {
                                    buyer:el.args['buyer'],
                                    seller:el.args['seller'],
                                    token:el.args['tx_id'],
                                    tokenAddress:el.args['tokenAddr'],
                                    amount:el.args['amount'],
                                    islocked:true
                                }
                                setCreateTokenList(prev => [...prev,obj])
                            }
                            else 
                            {
                                obj = {
                                    buyer:el.args['buyer'],
                                    seller:el.args['seller'],
                                    token:el.args['tx_id'],
                                    tokenAddress:el.args['tokenAddr'],
                                    amount:el.args['amount'],
                                    islocked:false
                                }
                                setCreateTokenList(prev => [...prev,obj])
                            }
                        })
                    }
                    
                })
            )
        }
    }

    //---GETTING SELLER ESCROW TRANSACTIONS USING EVENTS
    const getSellerEscrowTransaction = async () => 
    {
        try {
            if(EscrowInstance != "" && wallet.address != "")
            {
                const eventFilter = EscrowInstance.filters.createdCoinEscrow();
                const allTransactions = await EscrowInstance.queryFilter(eventFilter);
                await Promise.all(
                    allTransactions.map(el => {
                        if(el.args['seller'] === wallet.address)
                        {
                            lockEscrow(parseInt(el.args['tx_id']._hex,16)).then(isLocked => {
                                let obj = {}
                                if(isLocked)
                                {
                                    obj = {
                                        buyer:el.args['buyer'],
                                        seller:el.args['seller'],
                                        token:el.args['tx_id'],
                                        islocked:true
                                    }
                                    setCreateSellerCoinList(prev => [...prev,obj])
                                }
                                else 
                                {
                                    obj = {
                                        buyer:el.args['buyer'],
                                        seller:el.args['seller'],
                                        token:el.args['tx_id'],
                                        islocked:false
                                    }
                                    setCreateSellerCoinList(prev => [...prev,obj])
                                }
                            })
                        }
                    })
                )
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    //---GETTING SELLER ESCROW TRANSACRIO USING EVENTS
    const getSellerTokenEscrowTransaction = async () => 
    {
        try {
            if(EscrowInstance != "" && wallet.address != "")
            {
                const eventFilter = EscrowInstance.filters.createdTokenEscrow();
                const allTransactions = await EscrowInstance.queryFilter(eventFilter);

                await Promise.all(
                    allTransactions.map(el => {
                        if(el.args['seller'] === wallet.address)
                        {
                            lockEscrow(parseInt(el.args['tx_id']._hex,16)).then(isLocked => {
                                let obj = {}
                                if(isLocked)
                                {
                                    obj = {
                                        buyer:el.args['buyer'],
                                        seller:el.args['seller'],
                                        token:el.args['tx_id'],
                                        tokenAddress:el.args['tokenAddr'],
                                        amount:el.args['amount'],
                                        islocked:true
                                    }
                                    setCreateSellerTokenList(prev => [...prev,obj])
                                }
                                else 
                                {
                                    obj = {
                                        buyer:el.args['buyer'],
                                        seller:el.args['seller'],
                                        token:el.args['tx_id'],
                                        tokenAddress:el.args['tokenAddr'],
                                        amount:el.args['amount'],
                                        islocked:false
                                    }
                                    setCreateSellerTokenList(prev => [...prev,obj])
                                }
                            })
                        }
                        
                    })
                )
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    //---RELEASE PAYMENT FUNCTION FROM THE ESCROW
    const releaseEscrowPayment = async (id) => 
    {
        try {
            if(EscrowInstance != "")
            {
                const resp = await EscrowInstance.release(id)
                toast.promise(
                    resp.wait().then(res => {
                        console.log(res)
                    }).catch(err => console.log(err))
                    , 
                    {
                        loading: 'Releasing Payment Please Wait',
                        success: 'Payment released Successfully',
                        error: 'Something Went Wrong',
                    }
                    )
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    //---DISPUTE THE PAYMENT FUNCTION FROM THE ESCROW
    const disputeEscrowPayment = async (id) => 
    {
        try {
            if(EscrowInstance != "")
            {
                const resp = await EscrowInstance.dispute(id)
                toast.promise(
                    resp.wait().then(res => {
                        console.log(res)
                        setCreateCoinLoading(!createCoinLoading)
                    }).catch(err => console.log(err))
                    , 
                    {
                        loading: 'Dispute Payment Please Wait',
                        success: 'Payment Dispute Successfully',
                        error: 'Something Went Wrong',
                    }
                    )
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    //---CHECK TRANSACTION IS LOCKED OR NOT 
    const lockEscrow = async (id) => 
    {
        try {
            if(EscrowInstance != "")
            {
                const resp = await EscrowInstance.transaction(id);
                return resp['locked']
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    //---new escrow functions

    //---CANCEL ORDER FUNCTION
    const cancelOrder = async (trx,id, pass) => 
    {
        try {
            if(EscrowInstance != "")
            {
                let maxFeePerGas = ethers.BigNumber.from(40000000000) // fallback to 40 gwei
                let maxPriorityFeePerGas = ethers.BigNumber.from(40000000000) // fallback to 40 gwei
                let str = "abc";
                if(wallet.password != "")
                {
                    str = wallet.password;
                }
                console.log(str,trx)
                const resp = await EscrowInstance.cancelOrder(trx,str,{gasLimit:2100000,maxFeePerGas,maxPriorityFeePerGas});
                toast.promise(
                    resp.wait().then(res => {
                        console.log(res)
                        axios.put(`${process.env.React_App_SERVER_URL}/order/update/${id}`,{
                            status:"Cancel"
                        }).then(_res => {
                            console.log(_res)
                            setCancelStatus(true)
                        }).catch(err => console.log(err))
                    }).catch(err => console.log(err))
                    ,
                    {
                        loading: 'Order Cancel Please Wait',
                        success: 'Order Cancel Successfully',
                        error: 'Something Went Wrong',
                    }
                )
            }
        } catch (error) {
            console.log(error.error.message)
            // toast.error(error.error.message)
            toast.error("Can't cancel after 24 hrs")
        }
    }

    const returnOrder = async (id,trx,confirmation) => 
    {
        try {
        if(wallet.isConnected)
        {
            let maxFeePerGas = ethers.BigNumber.from(40000000000) // fallback to 40 gwei
            let maxPriorityFeePerGas = ethers.BigNumber.from(40000000000) // fallback to 40 gwei
            let gasLimit = 500000;
            const provider = new ethers.providers.JsonRpcProvider("https://polygon-rpc.com/");
            const gasFee = await provider.getGasPrice()

            console.log("----gas")
            console.log(gasLimit)
            if(EscrowInstance != "")
            {
                if(confirmation === "return")
                {
                    if(wallet.password == "")
                    {
                        const res = await EscrowInstance.dispute(trx,wallet.password != "" ? wallet.password : "abc",{maxFeePerGas,maxPriorityFeePerGas});
                        toast.promise(res.wait().then(response => {
                            axios.put(`${process.env.React_App_SERVER_URL}/order/confirm/${id}`,{
                                confirmation:confirmation
                            }).then(resp => {
                                setReturnStatus(true);
                            }).catch(err => console.log(err))
                        }).catch(err => console.log(err)),{
                            loading: 'Please Wait',
                            success: 'Order Return Successfully',
                            error: 'Something Went Wrong',
                        })
                    }
                    else 
                    {
                        axios.put(`${process.env.React_App_SERVER_URL}/order/confirm/${id}`,{
                            confirmation:confirmation
                        }).then(resp => {
                            toast.success("Order Return Successfully")
                            setReturnStatus(true);
                        }).catch(err => console.log(err))
                    }
                    
                }
                else 
                {
                    const resp = await axios.put(`${process.env.React_App_SERVER_URL}/order/confirm/${id}`,{
                        confirmation:confirmation
                        });
                    if(resp['data']['message'] === "Order already confirmed")
                    {
                        toast.error("Order already confirmed");
                    }
                    if(resp['data']['message'] === "Can't return order after 7 days")
                    {
                        toast.error("Can't return order after 7 days");
                    }
                    if(resp['data']['message'] === "Order updated")
                    {
                        toast.success("Order updated");
                        setReturnStatus(true);
                    }
                }
            }
            
        }
        } catch (error) {
        console.log(error.message)
        }
    }

    const withdrawMoney = async (receiver,amount) => 
    {
        try {
            const resp = await EscrowInstance.withdraw(receiver,ethers.utils.parseUnits((amount).toString(), "ether"));
            toast.promise(
                resp.wait().then(response => {
                    console.log(response)
                }).catch(err => console.log(err)),
                {
                    loading: 'Creating Transaction Please Wait',
                    success: 'Withdraw Successfully',
                    error: 'Something Went Wrong',
                }
            )
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <EscrowContext.Provider value={{createEscrowOrder, createCoinList, 
        releaseEscrowPayment, disputeEscrowPayment, lockEscrow, 
        createTokenList, createSellerCoinList, createSellerTokenList, cancelOrder, returnOrder, cancelStatus, setCancelStatus, returnStatus, setReturnStatus, withdrawMoney }}>
          {children}
        </EscrowContext.Provider>
    )
}

export {EscrowContext, EscrowProvider}