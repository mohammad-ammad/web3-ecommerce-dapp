import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { EscrowContext } from '../../context/EscrowContext'

const RegisterEscrow = () => {

    //---INTIALIZED THE STATES
    const [data, setData] = useState({
        token:"",
        seller:"",
        amount:"",
        value:0
    })

    //---GETTING THE ESCROW INSTANCE
    const {createEscrowOrder} = useContext(EscrowContext);

    //---CALLING THE CREATE ORDER WITH ESCROW FUNCTION
    const createWithEscrow = () => 
    {
        createEscrowOrder(data.value,data.token,data.seller,data.amount,data.token === "" ? true : false);
    }

  return (
    <>
    <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
        <input type="text" value={data.token} onChange={(e)=>setData({...data,token:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Token Address (Optional)' name="" id="" />
    </div>
    <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
        <input type="text" value={data.seller} onChange={(e)=>setData({...data,seller:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Seller Address' name="" id="" />
    </div>
    <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
        <input type="text" value={data.amount} onChange={(e)=>setData({...data,amount:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Amount' name="" id="" />
    </div>
    <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
        <input type="text" value={data.value} onChange={(e)=>setData({...data,value:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Value' name="" id="" />
    </div>
    <div className='my-3'>
        <button onClick={createWithEscrow} className='bg-black text-white w-full rounded-full px-5 py-2 text-sm font-normal'>Place Order</button>
    </div>
    </>
  )
}

export default RegisterEscrow