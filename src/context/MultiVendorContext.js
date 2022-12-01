import { createContext, useContext, useEffect, useState } from "react";
import { InstanceContext } from "./InstanceContext";
import { WalletContext } from "./WalletContext";
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
  const [currencyToggle, setCurrencyToggle] = useState(false);
  const [cart, setCart] = useState([]);
  const [vendorOrder, setVendorOrder] = useState([]);
  const [proSize, setProSize] = useState("");
  const [engraveName, setEngraveName] = useState("");
  const [isUserDetails, setIsUserDetails] = useState(false);
  const [userDetail, setUserDetail] = useState([]);
  const [catAttrList, setCatAttrList] = useState([]);
  const [vendorProdList, setVendorProdList] = useState([]);
  const [vendorProdListArr, setVendorProdListArr] = useState([]);
  const [isRedeemable, setIsRedeemable] = useState(false);
  const [mintAmount, setMintAmount] = useState(0);
  const [mintReAmount, setMintReAmount] = useState(0);
  const [zipCode, setZipCode] = useState("")
  const [getShippingUserDetails, setGetShippingUserDetails] = useState([]);
  const [OrderCompleted, setOrderCompleted] = useState([]);
 

  //---GETTING THE INSTANCE CONTEXT
  const { MultiVendorInstance, NFTInstance } = useContext(InstanceContext)
  const { wallet } = useContext(WalletContext)

  //---USEEFFECT 
  useEffect(() => {
    if (wallet.isConnected && wallet.address != "") {
      isVendorWhiteListed(wallet.address)
      getShippingDetailsOfUser()
    }
  }, [wallet, MultiVendorInstance])

  useEffect(() => {
    listProduct()
  }, [])

  //---check owner
  const checkOwner = async () => 
  {
    const resp = await MultiVendorInstance.owner();
    return resp;
  }

  //---Create Collections 
  const createCollection = async (name, engravable, attributes, serial, amount) => {
    try {
      if (MultiVendorInstance != "") {
        const resp = await MultiVendorInstance.createCollection(name);
        toast.promise(
          resp.wait().then(res => {
            axios.post(`${process.env.React_App_SERVER_URL}/category/create`, {
              category: name,
              collection_address: res['events'][0]['address'],
              engravable: engravable,
              attributes:attributes,
              serial_no:serial,
              amount:amount
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
  const createTechnicalMember = async (address) => {
    try {
      if (MultiVendorInstance != "") {
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
  const isVendorWhiteListed = async (address) => {
    try {
      const resp = await MultiVendorInstance.isInTT(address);
      if (resp === true) {
        setIsVendor(true)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  //---CREATE VENDOR SHOP
  const createShop = async () => {
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
  const getSizes = async () => {
    try {
      const resp = await axios.get(`${process.env.React_App_SERVER_URL}/size`);
      return resp
    } catch (error) {
      console.log(error.message)
    }
  }

  //---GET COLOR ATTRIBUTES
  const getColor = async () => {
    try {
      const resp = await axios.get(`${process.env.React_App_SERVER_URL}/color`);
      return resp;
    } catch (error) {
      console.log(error.message)
    }
  }

  //---GET CATEGORIES
  const getCategories = async () => {
    try {
      const resp = await axios.get(`${process.env.React_App_SERVER_URL}/category`);
      return resp;
    } catch (error) {
      console.log(error.message)
    }
  }

  //---MINT PRODUCT
  const mintProduct = async (data) => {
    try {
      if (NFTInstance != "") {
        console.log(data)
        const res = await NFTInstance.mint(data.availabilty, ethers.utils.parseUnits(data.crypto_price, "ether"), data.primary_image);
        toast.promise(
          res.wait().then(response => {
            axios.post(`${process.env.React_App_SERVER_URL}/product/create`, {
              vendorAddress:wallet.address,
              ...data,
              tokenId: parseInt(response.events[1].args[1]._hex, 16),
              remain:mintReAmount
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
  const listProduct = async () => {
    try {
      const list = await axios.get(`${process.env.React_App_SERVER_URL}/product`);
      setProductList(list['data']);
      console.log(list)
    } catch (error) {
      console.log(error.message)
    }
  }

  //---Product Details
  const productDetails = async (id) => {
    try {
      const resp = await axios.get(`${process.env.React_App_SERVER_URL}/product/${id}`);
      setPDetails(resp['data'])
      console.log("product details---------",resp)
    } catch (error) {
      console.log(error.message)
    }
  }

  //---Create Order 
  const createOrder = async (data) => {
    try {
      if(isRedeemable === true)
      {
        if(MultiVendorInstance != "")
        {
          const resp = await MultiVendorInstance.createRedeem(data.address,data.id,data.amount, { value: ethers.utils.parseUnits(data.price.toString(), "ether") });
          toast.promise(
            resp.wait().then(res => {
              console.log(res)
              let trx = ethers.BigNumber.from(res['events'][1]['args']['tx_id']);
              console.log(trx)
              axios.post(`${process.env.React_App_SERVER_URL}/order/create`, {
                product_id: data._id,
                userAddress: wallet.address,
                quantity: data.amount,
                engraveName: data.engraveName,
                trxId: parseInt(trx._hex, 16),
                status: "Redeem not calim",
                type: data.type,
                price: data.price,
                isRedeemable:true
              }).then(_res => {
                console.log(_res)
              }).catch(err => console.log(err))
            }).catch(err => console.log(err))
            ,
            {
              loading: 'Creating Redeem Please Wait',
              success: 'Redeem Successfully',
              error: 'Something Went Wrong',
            }
          )
        }
      }
      else 
      {
        if (MultiVendorInstance != "") {
          const resp = await MultiVendorInstance.createOrder(data.address, data.id, data.amount, 0, { value: ethers.utils.parseUnits(data.price.toString(), "ether") });
          toast.promise(
            resp.wait().then(res => {
              console.log(res)
              let trx = ethers.BigNumber.from(res['events'][3]['args']['tx_id']);
              console.log(trx)
              axios.post(`${process.env.React_App_SERVER_URL}/order/create`, {
                product_id: data._id,
                userAddress: wallet.address,
                quantity: data.amount,
                engraveName: data.engraveName,
                trxId: parseInt(trx._hex, 16),
                status: "Pending",
                type: data.type,
                price: data.price,
                isRedeemable:false
              }).then(_res => {
                console.log(_res)
              }).catch(err => console.log(err))
            }).catch(err => console.log(err))
            ,
            {
              loading: 'Creating Order Please Wait',
              success: 'Order Placed Successfully',
              error: 'Something Went Wrong',
            }
          )
        }
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  //---OrderCart
  const orderCart = async () => {
    try {
      if (wallet.isConnected) {
        const resp = await axios.get(`${process.env.React_App_SERVER_URL}/order/list/${wallet.address}`);
        console.log(resp['data'])
        setCart(resp['data'])
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  //---Vednor Portal Order List
  const vendorOrderList = async (limit,skip) => {
    try {
      if (wallet.isConnected) {
        toast.promise(
          axios.get(`${process.env.React_App_SERVER_URL}/order/list?limit=${limit}&skip=${skip}`)
          .then(resp => {
            console.log(resp['data'])
            setVendorOrder(resp['data'])
          }).catch(err => console.log(err))
          ,
          {
            loading: 'Please Wait',
            success: 'Success',
            error: 'Something Went Wrong',
          }
        )
        // const resp = await 
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  //---UPDATE ORDER STATUS
  const updateOrderStatus = async (status, id) => {
    try {
      if (wallet.isConnected) {
        const resp = await axios.put(`${process.env.React_App_SERVER_URL}/order/update/${id}`, {
          status: status
        })
        if (resp['data']['message'] === "Order Updated Successfully") {
          toast.success("Order Updated Successfully")
          vendorOrderList()
        }
        else {
          toast.error("Something went wrong")
        }
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  //---dispute and cancel order (buyer)

  //---withdraw option only admin

  //---PAYMENT WITH STRIPE
  const paymentWithStripe = async (product, token, data, price) => {
    console.log(price)
    if(wallet.isConnected == true && wallet.address != "")
    {
      if(wallet.type == "InApp")
      {
        toast.promise(
          axios.post(`${process.env.React_App_SERVER_URL}/stripe/payment`, {
            product, token
          }).then(async (resp) => {
            if(isRedeemable === true)
            {
              if(MultiVendorInstance != "")
              {
                const resp = await MultiVendorInstance.createRedeemInApp(data.address,data.id,data.amount,wallet.address,wallet.password, { value: ethers.utils.parseUnits(price.toString(), "ether") });
                toast.promise(
                  resp.wait().then(async (res) => {
                    console.log(res)
                    const _resp = await MultiVendorInstance.returnUserRedeems(wallet.address);
                    console.log(_resp[_resp.length-1].rid)
                    let trx = ethers.BigNumber.from(_resp[_resp.length-1].rid);
                    console.log(trx)
                    axios.post(`${process.env.React_App_SERVER_URL}/order/create`, {
                      product_id: data._id,
                      userAddress: wallet.address,
                      quantity: data.amount,
                      engraveName: data.engraveName,
                      trxId: parseInt(trx._hex, 16),
                      status: "Pending",
                      type: data.type,
                      price: data.price,
                      isRedeemable:true
                    }).then(_res => {
                      console.log(_res)
                    }).catch(err => console.log(err))
                  }).catch(err => console.log(err))
                  ,
                  {
                    loading: 'Creating Redeem Please Wait',
                    success: 'Redeem Successfully',
                    error: 'Something Went Wrong',
                  }
                )
              }
            }
            else 
            {
              if (MultiVendorInstance != "") {
                const resp = await MultiVendorInstance.createOrderInAppWallet(data.address, data.id, data.amount, 0, wallet.address,wallet.password, { value: ethers.utils.parseUnits(price.toString(), "ether") });
                toast.promise(
                  resp.wait().then(async (res) => {
                    console.log(res)
                    let trx = ethers.BigNumber.from(res['events'][3]['args']['tx_id']);
                    console.log(trx)
                    axios.post(`${process.env.React_App_SERVER_URL}/order/create`, {
                      product_id: data._id,
                      userAddress: wallet.address,
                      quantity: data.amount,
                      engraveName: data.engraveName,
                      trxId: parseInt(trx._hex, 16),
                      status: "Pending",
                      type: data.type,
                      price: data.price,
                      isRedeemable:false
                    }).then(_res => {
                      console.log(_res)
                    }).catch(err => console.log(err))
                  }).catch(err => console.log(err))
                  ,
                  {
                    loading: 'Creating Order Please Wait',
                    success: 'Order Placed Successfully',
                    error: 'Something Went Wrong',
                  }
                )
              }
            }
          }).catch(err => console.log(err))
          ,
          {
            loading: 'Creating Order Please Wait',
            success: 'Order Placed Successfully',
            error: 'Something Went Wrong',
          }
        )
      }
      else 
      {
        toast.error("Only InApp Wallet Can Pay with Strip")
      }
    }
  }

  //---get shipping details
  const getShippingDetailsOfUser = async () => {
    try {
      if (wallet.isConnected) {
        const resp = await axios.get(`${process.env.React_App_SERVER_URL}/user/get-shipping/${wallet.address}`);
        if(resp['data']['message'] === "User details not found")
        {
          setIsUserDetails(false)
        }
        else 
        {
          setIsUserDetails(true)
          setGetShippingUserDetails(resp['data'])
        }
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  //add shipping details
  const addShippingDetails = (data) => 
  {
      try {
        if (wallet.isConnected) {
         toast.promise(
          axios.post(`${process.env.React_App_SERVER_URL}/user/add-shipping`,{
            wallet:wallet.address,
            ...data
          }).then(resp => {
            console.log(resp)
          }).catch(err => console.log(err))
          ,
          {
            loading: 'Adding Details Please Wait',
            success: 'Details added Successfully',
            error: 'Something Went Wrong',
          }
         )
        }
      } catch (error) {
        console.log(error.message)
      }
  }

  //---get shipping address by vendors
  const getShippingByUser = async (address) => 
  {
    try {
      const resp = await axios.get(`${process.env.React_App_SERVER_URL}/user/get-shipping-address/${address}`);
      console.log(resp)
      setUserDetail(resp['data'])
    } catch (error) {
      console.log(error.message)
    }
  }

  //---get categoryAttributes 
  const catAttr = async (address) => 
  {
    try {
      const resp = await axios.get(`${process.env.React_App_SERVER_URL}/product/attr/${address}`);
      console.log(resp)
      setCatAttrList(resp.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  //---GET VENDOR MINTED PRODUCT
  const vendorMintedProduct = async () => 
  {
    try {
      if(wallet.isConnected && wallet.address != "")
      {
        const resp = await axios.get(`${process.env.React_App_SERVER_URL}/product/vendor/${wallet.address}`);
        setVendorProdList(resp.data)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  //---GET Product Vendor edit attributes
  const getVendorEditAttribute = async (id) => 
  {
    try {
      if(wallet.isConnected && wallet.address != "")
      {
        const resp = await axios.get(`${process.env.React_App_SERVER_URL}/product/vendor/product/${id}`);
        setVendorProdListArr(resp.data)
        console.log(resp.data)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  //---REDEEM NOW
  const redeemNow = async (id,trx) => 
  {
    try {
      console.log(trx)
      if(MultiVendorInstance != "")
      {
        let resp;
        if(wallet.username != "" && wallet.password !="")
        {
          resp = await MultiVendorInstance.redeem(trx,wallet.username,wallet.password);
        }
        else 
        {
          resp = await MultiVendorInstance.redeem(trx,"0x0000000000000000000000000000000000000000","abc");
        }
        console.log(wallet)
        toast.promise(
          resp.wait().then(res => {
            axios.put(`${process.env.React_App_SERVER_URL}/order/update/${id}`,{
              status:'Redeemed'
            }).then(res => {
              console.log("Redeem Successful")
            }).catch(err => console.log(err))

          }).catch(err => console.log(err))
          ,
            {
              loading: 'Creating Redeem Please Wait',
              success: 'Redeem Successfully',
              error: 'Something Went Wrong',
            }
        )
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  //---update attributes 
  const updateAttributes = async (id,attributes) => 
  {
    try {
      const resp = await axios.put(`${process.env.React_App_SERVER_URL}/product/attr/${id}`, {
        attributes:[attributes]
      });
      console.log(resp);
      if(resp['data']['message'] == "Attributes updated")
      {
        toast.success("Attributes Updated Successfully")
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  const getnfc = async (collection) => 
  {
    try {
      const resp = await axios.get(`${process.env.React_App_SERVER_URL}/category/nfc/${collection}`)  
      setMintAmount(resp['data']['remaining_amount'])
      setMintReAmount(resp['data']['amount'])
    } catch (error) {
      console.log(error.message)
    }
  }

  const updateShipping = async (data) => 
  {
    try {
      const resp = await axios.put(`${process.env.React_App_SERVER_URL}/user/update-shipping/${wallet.address}`,{
        ...data
      })
      if(resp['data']['message'] === "Update successfully")
      {
        toast.success("Data Updated Successfully")
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  const getCompletedOrder = async () => 
  {
    try {
      if(wallet.isConnected)
      {
        const resp = await axios.get(`${process.env.React_App_SERVER_URL}/order/confirm/${wallet.address}`);
        console.log(resp['data'])
        setOrderCompleted(resp['data'])
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  
  return (
    <MultiVendorContext.Provider value={{ isVendor, createShop, getSizes, getColor, mintProduct, getCategories, createCollection, createTechnicalMember, productList, productDetails, pDetails, currencyToggle, setCurrencyToggle, createOrder, orderCart, cart, vendorOrder, vendorOrderList, updateOrderStatus, paymentWithStripe, proSize, setProSize, engraveName, setEngraveName, addShippingDetails, isUserDetails, getShippingByUser, userDetail, catAttr, catAttrList, vendorMintedProduct, vendorProdList, getVendorEditAttribute, vendorProdListArr, checkOwner, MultiVendorInstance, isRedeemable, setIsRedeemable, redeemNow, updateAttributes, getnfc, mintAmount, zipCode, setZipCode, getShippingUserDetails, getShippingDetailsOfUser, updateShipping, listProduct, getCompletedOrder, OrderCompleted}}>
      {children}
    </MultiVendorContext.Provider>
  );
}

export { MultiVendorContext, MultiVendorProvider }