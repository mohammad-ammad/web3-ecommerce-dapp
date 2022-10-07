import { createContext, useContext, useEffect, useState } from "react";
import { InstanceContext } from "./InstanceContext";
import {WalletContext} from "./WalletContext";
import { toast } from "react-hot-toast";
// shop address 0x081acDAc3cB0C7927880B117cd94044023220fF5
//---CREATING THE CONTEXT
const MultiVendorContext = createContext();

//---INITIALIZING THE PROVIDER
const MultiVendorProvider = ({ children }) => {
  //----USESTATES
  const [isVendor, setIsVendor] = useState(false);
  //---GETTING THE INSTANCE CONTEXT
  const {MultiVendorInstance} = useContext(InstanceContext)
  const {wallet} = useContext(WalletContext)

  //---USEEFFECT
  useEffect(() => {
    if(wallet.isConnected && wallet.address != "" && MultiVendorInstance != "")
    {
        checkWhiteListedVendors(wallet.address)
    }
  },[wallet, MultiVendorInstance])

  //---WHITELIST THE VENDOR 
  const whiteListVendor = async (address) => 
  {
    try {
      const resp = MultiVendorInstance.whitelisted(address);
      toast.promise(
        resp.wait().then(res => {
            console.log(res)
        }).catch(err => console.log(err))
        , 
        {
            loading: 'Register Vendor Please Wait',
            success: 'Registration in Progress Successfully',
            error: 'Something Went Wrong',
        }
      )
    } catch (error) {
      console.log(error.message)
    }
  }

  //---CHECK WHITE LISTED VENDORS
  const checkWhiteListedVendors = async (address) => 
  {
    try {
      const resp = await MultiVendorInstance.isWhiteListed(address);
      setIsVendor(resp)
    } catch (error) {
      console.log(error.message)
    }
  }

  //---CREATE VENDOR SHOP
  const createShop = async () => 
  {
    try {
        const resp = await MultiVendorInstance.createShop();
        toast.promise(
          resp.wait().then(res => {
              console.log(res)
          }).catch(err => console.log(err))
          , 
          {
              loading: 'Creating Shop Please Wait',
              success: 'Shop Created Successfully Successfully',
              error: 'Something Went Wrong',
          }
          )
    } catch (error) {
      console.log(error.message)
    }
  }
    return (
        <MultiVendorContext.Provider value={{whiteListVendor, isVendor, createShop}}>
          {children}
        </MultiVendorContext.Provider>
    );
}

export {MultiVendorContext, MultiVendorProvider}