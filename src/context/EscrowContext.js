import { ethers } from "ethers";
import { createContext, useContext, useEffect } from "react";
import { InstanceContext } from "./InstanceContext";
import {toast} from 'react-hot-toast'

const EscrowContext = createContext();

const EscrowProvider = ({ children }) => {

    //---GETTING THE INSTANCE CONTEXT
    const {EscrowInstance} = useContext(InstanceContext)

    //---USEEFFECT FOR CALLING ESCROW EVENT CALL
    useEffect(() => {
        getEscrowTransaction()
    },[EscrowInstance])

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
                    }).catch(err => console.log(err))
                    , 
                    {
                        loading: 'Creating User Please Wait',
                        success: 'User created Successfully',
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
        if(EscrowInstance != "")
        {
            const eventFilter = EscrowInstance.filters.createdCoinEscrow();
            const allTransactions = await EscrowInstance.queryFilter(eventFilter);
            console.log(allTransactions);
        }
    }

    return (
        <EscrowContext.Provider value={{createEscrowOrder}}>
          {children}
        </EscrowContext.Provider>
    )
}

export {EscrowContext, EscrowProvider}