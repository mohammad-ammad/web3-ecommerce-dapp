import { ethers } from "ethers";
import { createContext, useContext, useEffect, useState } from "react";
import { InstanceContext } from "./InstanceContext";
import {toast} from 'react-hot-toast'
import { WalletContext } from "./WalletContext";

const EscrowContext = createContext();

const EscrowProvider = ({ children }) => {

    //---INTIALIZED THE STATES
    const [createCoinList, setCreateCoinList] = useState([]);
    const [createSellerCoinList, setCreateSellerCoinList] = useState([]);
    const [createTokenList, setCreateTokenList] = useState([]);
    const [createSellerTokenList, setCreateSellerTokenList] = useState([]);
    const [createCoinLoading, setCreateCoinLoading] = useState(false);

    //---GETTING THE INSTANCE CONTEXT
    const {EscrowInstance} = useContext(InstanceContext)
    const {wallet} = useContext(WalletContext)

    //---USEEFFECT FOR CALLING ESCROW EVENT CALL
    useEffect(() => {
        getEscrowTransaction()
        getTokenEscrowTransaction()
        getSellerEscrowTransaction()
        getSellerTokenEscrowTransaction()
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

    return (
        <EscrowContext.Provider value={{createEscrowOrder, createCoinList, 
        releaseEscrowPayment, disputeEscrowPayment, lockEscrow, 
        createTokenList, createSellerCoinList, createSellerTokenList }}>
          {children}
        </EscrowContext.Provider>
    )
}

export {EscrowContext, EscrowProvider}