import React from 'react'
import AccountSettingsSection from '../components/AccountSettingsSection'
import ShippingAddressSection from '../components/ShippingAddressSection'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import Redeemable from '../components/Redeemable'
import { useContext } from 'react'
import { MultiVendorContext } from '../context/MultiVendorContext'
import { useEffect } from 'react'
import { WalletContext } from '../context/WalletContext'
import { useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { EscrowContext } from '../context/EscrowContext'
const AccountSettings = () => {
    const {getShippingDetailsOfUser, getShippingUserDetails, updateShipping, OrderCompleted, getCompletedOrder, redeemStatus, setRedeemStatus} = useContext(MultiVendorContext);
    const {returnStatus, setReturnStatus} = useContext(EscrowContext);
    const {wallet, disConnect} = useContext(WalletContext)
    const [data, setData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        dob:"",
        phone:"",
        shipping_address:"",
        room:"",
        city:"",
        state:"",
        zip:"",
        country:""
    })

    const [current, setCurrent] = useState("")
    const [newpass, setNewPass] = useState("")
    const [email, setEmail] = useState("")
    useEffect(() => {
        if(wallet.isConnected)
        {
            getShippingDetailsOfUser()
            getCompletedOrder()
        }
    },[wallet])

    useEffect(() => {
        if(returnStatus)
        {
            getCompletedOrder();
            setReturnStatus(false);
        }
    }, [returnStatus])

    useEffect(() => {
        if(redeemStatus)
        {
            getCompletedOrder();
            setRedeemStatus(false);
        }
    }, [redeemStatus])

    useEffect(() => {
        setData({
            firstname:getShippingUserDetails.firstname,
            lastname:getShippingUserDetails.lastname,
            email:getShippingUserDetails.email,
            DOB:getShippingUserDetails.DOB,
            phone:getShippingUserDetails.phone,
            shipping_address:getShippingUserDetails.shipping_address,
            room:getShippingUserDetails.room,
            city:getShippingUserDetails.city,
            state:getShippingUserDetails.state,
            zip:getShippingUserDetails.zip,
            country:getShippingUserDetails.country
        })
    },[getShippingUserDetails])

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

    const updateHandler = () => 
    {
        updateShipping(data)
    }

    const changePasswordHandler = async () => 
    {
        if(current === "" || newpass === "" || email === "")
        {
            toast.error("Please Fill all fields")
        }
        else 
        {
            const resp = await axios.put(`${process.env.React_App_SERVER_URL}/user/update`,{
                email,
                current,
                newpass
            })

            if(resp['data']['message'] === "User not found")
            {
                toast.error("User not found")
            }
            if(resp['data']['message'] === "Please Enter Correct Password")
            {
                toast.error("Please Enter Correct Password")
            }
            if(resp['data']['message'] === "Password Updated")
            {
                toast.success("Password Updated")
                setCurrent("");
                setNewPass("");
                setEmail("");
            }
        }
    }

    console.log(OrderCompleted.length > 0)
  return (
    <div className='bg-slate-100 w-full h-full flex justify-center items-start pt-20 md:pt-28'>
        <div className='w-full md:w-1/3 px-5'>
            <div>
                <h1 className='text-black text-md font-bold my-3'>General Information</h1>
                <h2 className='text-black text-sm font-medium'>Account Settings</h2>
                <AccountSettingsSection data={data} setData={setData}/>
                <h2 className='text-black text-sm font-medium mt-5'>Shipping Address</h2>
                <ShippingAddressSection data={data} setData={setData}/>
                <div className='flex justify-between items-center my-3'>
                    <div className='flex justify-start items-center'>
                            <BsFillCheckCircleFill/>
                            <span className='ml-2 text-xs font-bold text-slate-700'>Subscribe newsletter</span>
                        </div>
                        <div>
                            <button className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal' onClick={updateHandler}>Update</button>
                        </div>
                </div>
                <h2 className='text-black text-sm font-medium mt-5'>Change Password</h2>
                <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Email' name="" id="" />
                </div>
                <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
                    <input type="password" value={current} onChange={(e)=>setCurrent(e.target.value)} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Current Password' name="" id="" />
                </div>
                <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
                    <input type="password" value={newpass} onChange={(e)=>setNewPass(e.target.value)} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='New Password' name="" id="" />
                </div>
                <div className='flex justify-end items-center my-3'>
                        <div>
                            <button className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal' onClick={changePasswordHandler}>Change Password</button>
                        </div>
                </div>
                <h1 className='text-black text-md font-bold my-3'>My NFT Collections</h1>
                {/* <h2 className='text-black text-sm font-medium'>Pending For Confirmation</h2> */}
                {
                    OrderCompleted.length > 0 ? 
                    OrderCompleted.map((item,index) => (
                        <Redeemable pending={true} redeemable={true} item={item}/>
                    ))
                    : ""
                }
                {/* <h2 className='text-black text-sm font-medium'>Redeemable</h2>
                <Redeemable redeemable={true}/>
                <h2 className='text-black text-sm font-medium'>Redeemed</h2>
                <Redeemable /> */}
            </div>
            <div className='flex justify-center items-center my-5'>
                 <button className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal' onClick={()=>disConnect()}>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default AccountSettings