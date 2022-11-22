import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MultiVendorContext } from '../../context/MultiVendorContext'

const EditProduct = () => {

    //---USECONTEXT
    const {getVendorEditAttribute, vendorProdListArr, updateAttributes} = useContext(MultiVendorContext)
   
    //---get id
    const {id} = useParams();

    //---USEEFFECT
    useEffect(() => {
        getVendorEditAttribute(id)
    }, [id])
 
    const [currentState, setCurrentState] = useState({})

    const updateAttr = (attr_id) => 
    {
        if(currentState != null)
        {
            updateAttributes(attr_id, currentState)
        }
    }

    console.log("CS:",currentState)
    
  return (
    <div className='w-full h-screen pt-28 bg-slate-100'>
        <div className='px-5 md:px-28 flex justify-between items-center'>
            <h1 className='text-md text-black font-bold'>Edit Product</h1>
            <Link to="/seller-products" className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal'>Back</Link>
        </div>
        <div className='px-5 md:px-28'>
            <h1 className='text-md text-black'>Title : {vendorProdListArr?.title}</h1>
            <div>
                {
                    vendorProdListArr?.attribute?.length > 0 ?
                    vendorProdListArr?.attribute.map((item,i) => (
                        Object.keys(item).map((key, index)=> (
                            <>
                                <label className='text-xs px-3 text-slate-900'>{key} :</label>
                                <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
                                    <input type="text" value={currentState[key]} onChange={(e) => setCurrentState((currentState)=>({...currentState, [key]: e.target.value}))} className='w-full p-3 text-xs bg-transparent outline-none' placeholder={item[key]} name="" id="" />
                                </div>
                            </>
                        ))
                    ))
                    : null
                }

            </div>
        </div>

        <div className='flex justify-center items-center my-5 px-5 md:px-28'>
          <button onClick={()=>updateAttr(vendorProdListArr?.attr_id)} className='bg-black text-white w-full rounded-full px-5 py-1 text-sm font-normal'>Update</button>
        </div>
    </div>
  )
}

export default EditProduct