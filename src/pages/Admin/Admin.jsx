import React from 'react'
import { useState } from 'react';
import { useContext } from 'react'
import { MultiVendorContext } from '../../context/MultiVendorContext'
import {GrAddCircle} from 'react-icons/gr'
import {BsFillTrashFill} from 'react-icons/bs'
import { useRef } from 'react';

const Admin = () => {
    //---USECONTEXT 
    const {createCollection, createTechnicalMember} = useContext(MultiVendorContext);
    //---USESTATE
    const [collection, setCollection] = useState("");
    const [engrave, setEngrave] = useState(false);
    const [team, setTeam] = useState("");
    const [val, setVal] = useState([])


    //----ACTION FUNCTIONS
    const collectionHandler = () => 
    {
        if(collection != "")
        {
            createCollection(collection,engrave, val)
        }
    }

    const teamHandler = () => 
    {
        if(team != "")
        {
            console.log(team)
            createTechnicalMember(team)
        }
    }

    const addAttrField = () => 
    {
        const attr = [...val, []]
        setVal(attr)
    }

    const handleChange = (e,i) => 
    {
        const inputData = [...val];
        inputData[i] = e.target.value;
        setVal(inputData)
    }

    const handleDelete = (i) => 
    {
        const deleteData = [...val];
        deleteData.splice(i,1);
        setVal(deleteData)
    }

  return (
    <div className='bg-slate-100 w-full h-screen flex justify-center items-start pt-20 md:pt-28'>
        <div className='w-full md:w-1/3 px-5'>
            <h1 className='text-md font-bold text-black'>Add Collection</h1>
            <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
                <input type="text" value={collection} onChange={(e) => setCollection(e.target.value)} className='w-full p-2 text-xs bg-transparent outline-none' placeholder='Collection Name' name="" id="" />
            </div>
            <div className='flex justify-start items-center'>
                <input type="checkbox" name="" id="" onChange={()=>setEngrave(!engrave)}/>
                <p className='text-sm text-slate-700 ml-2'>Engravable?</p>
            </div>
            <div className='my-2'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-sm font-semibold text-black'>Add Collection Attributes</h1>
                    <GrAddCircle className='cursor-pointer' onClick={()=>addAttrField()}/>
                </div>
                <div>
                    {
                        val.map((data, i) => {
                            return (
                                <div className='flex justify-start items-center' key={i}>
                                        <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1 w-full mr-2'>
                                            <input type="text" value={data} onChange={(e) => handleChange(e,i)} className='w-full p-2 text-xs bg-transparent outline-none' placeholder='Add Attributes' name="" id="" />
                                        </div>
                                        <BsFillTrashFill onClick={()=>handleDelete(i)}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-center items-center my-5'>
                 <button onClick={collectionHandler} className='bg-black text-white rounded-full w-full px-5 py-1 text-sm font-normal'>Create Collection</button>
            </div>
            <hr />
            <h1 className='text-md font-bold text-black'>Add Technical Team Member</h1>
            <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
                <input type="text" value={team} onChange={(e)=>setTeam(e.target.value)} className='w-full p-2 text-xs bg-transparent outline-none' placeholder='User Address' name="" id="" />
            </div>
            <div className='flex justify-center items-center my-5'>
                 <button onClick={teamHandler} className='bg-black text-white rounded-full w-full px-5 py-1 text-sm font-normal'>Add Member</button>
            </div>
        </div>
    </div>
  )
}

export default Admin