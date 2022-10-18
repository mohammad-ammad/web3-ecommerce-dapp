import { createContext, useContext, useEffect, useState } from "react";
import { InstanceContext } from "./InstanceContext";
import {WalletContext} from "./WalletContext";
import { toast } from "react-hot-toast";
import axios from "axios";
import { ethers } from "ethers";
// shop address 0x081acDAc3cB0C7927880B117cd94044023220fF5
//---CREATING THE CONTEXT
const MultiVendorContext = createContext();

//---INITIALIZING THE PROVIDER
const MultiVendorProvider = ({ children }) => {
  //----USESTATES
  const [isVendor, setIsVendor] = useState(false);
  const [productList, setProductList] = useState([]);
  const [pDetails, setPDetails] = useState([]);
  //---GETTING THE INSTANCE CONTEXT
  const {MultiVendorInstance, NFTInstance} = useContext(InstanceContext)
  const {wallet} = useContext(WalletContext)

  //---USEEFFECT 
  useEffect(() => {
    if(wallet.isConnected && wallet.address != "")
    {
      isVendorWhiteListed(wallet.address)
    }
  },[wallet,MultiVendorInstance])

  useEffect(() => {
    listProduct()
  },[])

  //---Create Collections 
  const createCollection = async (name) => 
  {
    try {
      if(MultiVendorInstance != "")
      {
        const resp = await MultiVendorInstance.createCollection(name);
        toast.promise(
          resp.wait().then(res => {
            axios.post(`${process.env.React_App_SERVER_URL}/category/create`,{
              category:name,
              collection_address:res['events'][0]['address']
            }).then(_res => {
              console.log(_res)
            }).catch(err => console.log(err))
          }).catch(err => console.log(err)),
          {
            loading: 'Creating Collection Please Wait',
            success: 'Collection Created Successfully',
            error: 'Something Went Wrong',
          }
        )
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  //---Create Technical Team Member 
  const createTechnicalMember = async (address) => 
  {
    try {
      if(MultiVendorInstance != "")
      {
        const resp = await MultiVendorInstance.AddUserToTT(address);
        toast.promise(
          resp.wait().then(res => {
            console.log(res)
          }).catch(err => console.log(err))
          ,
          {
            loading: 'Creating User Please Wait',
            success: 'User Created Successfully',
            error: 'Something Went Wrong',
          }
        )
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  //---CHECK IS VENDOR IS WHITELISTED OR NOT 
  const isVendorWhiteListed = async (address) => 
  {
    try {
      const resp = await MultiVendorInstance.isInTT(address);
      if(resp === true)
      {
        setIsVendor(true)
      }
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

  //---GET SIZES ATTRIBUTES 
  const getSizes = async () => 
  {
    try {
      const resp = await axios.get(`${process.env.React_App_SERVER_URL}/size`);
      return resp
    } catch (error) {
      console.log(error.message)
    }
  }

  //---GET COLOR ATTRIBUTES
  const getColor = async () => 
  {
    try {
      const resp = await axios.get(`${process.env.React_App_SERVER_URL}/color`);
      return resp;
    } catch (error) {
      console.log(error.message)
    }
  }

  //---GET CATEGORIES
  const getCategories = async () => 
  {
    try {
      const resp = await axios.get(`${process.env.React_App_SERVER_URL}/category`);
      return resp;
    } catch (error) {
      console.log(error.message)
    }
  }

  //---MINT PRODUCT
  const mintProduct = async (data) => 
  {
    try {
      if(NFTInstance != "")
      {
        console.log(data)
          const res = await NFTInstance.mint(data.availabilty,ethers.utils.parseUnits(data.crypto_price,"ether"),data.attributes[0]['image']);
          toast.promise(
            res.wait().then(response => {
              console.log("minted...")
              console.log(response)
              axios.post(`${process.env.React_App_SERVER_URL}/product/create`,{
                ...data
              }).then(resp => {
                console.log(resp)
              }).catch(err => console.log(err.message))
            }).catch(err => console.log(err.message))
            , 
            {
                loading: 'Minting item Please Wait',
                success: 'Item Minted Successfully',
                error: 'Something Went Wrong',
            }
          )
      }
      
    } catch (error) {
      console.log(error.message)
    }
  }

  //---LIST PRODUCTS
  const listProduct = async () => 
  {
    try {
      const list = await axios.get(`${process.env.React_App_SERVER_URL}/product`);
      setProductList(list['data']);
    } catch (error) {
      console.log(error.message)
    }
  }

  //---Product Details
  const productDetails = async (id) => 
  {
    try {
      const resp = await axios.get(`${process.env.React_App_SERVER_URL}/product/${id}`);
      setPDetails(resp['data'])
    } catch (error) {
      console.log(error.message)
    }
  }
    return (
        <MultiVendorContext.Provider value={{isVendor, createShop, getSizes, getColor, mintProduct, getCategories, createCollection, createTechnicalMember, productList, productDetails, pDetails}}>
          {children}
        </MultiVendorContext.Provider>
    );
}

export {MultiVendorContext, MultiVendorProvider}