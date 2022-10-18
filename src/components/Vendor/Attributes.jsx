import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import axios from 'axios'
import {toast} from 'react-hot-toast'

const Attributes = ({ trash, attr, setAttr, attributes, setAttributes, size, color }) => {
  const setIpfs = (e) => 
  {
    sendFileToIPFS(e.target.files[0])
    console.log("working")
  }

  //---UPLOAD TO IPFS
  const sendFileToIPFS = async (_file) => {
    if (_file) {
      try {
        const formData = new FormData();
        formData.append("file", _file);

        toast.promise(
          axios({
            method: "post",
            url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
            data: formData,
            headers: {
              'pinata_api_key': `${process.env.REACT_APP_PINATA_API_KEY}`,
              'pinata_secret_api_key': `${process.env.REACT_APP_PINATA_API_SECRET}`,
              "Content-Type": "multipart/form-data"
            },
          }).then(resFile => {
            const ImgHash = resFile.data.IpfsHash;
            console.log(ImgHash);
            setAttributes({ ...attributes, image: ImgHash })
          }).catch(err => console.log(err))
          , 
          {
              loading: 'Image Uploading Please Wait',
              success: 'Image Uploaded Successfully',
              error: 'Something Went Wrong',
          }
          )        
      } catch (error) {
        console.log("Error sending File to IPFS: ")
        console.log(error)
      }
    }
  }
  return (
    <>
      <div>
        <div className='flex items-center justify-end my-2 mx-3'>
          {
            trash &&
            <FaTrashAlt onClick={() => setAttr(attr - 1)} className='text-red-500 cursor-pointer' />
          }
        </div>
        <div className=''>
          <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
            <input type="file" onChange={(e) =>setIpfs(e)} className='w-full p-3 text-xs bg-transparent outline-none' name="" id="" />
          </div>
          
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
          <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
            <select onChange={(e) => setAttributes({ ...attributes, colorId: e.target.value })} name="" id="" className='w-full p-3 text-xs bg-transparent outline-none'>
              <option value="" disabled selected>Select Color</option>
              {
                color.length > 0 ? color.map((item, index) => (
                  <option value={item._id} key={index}>{item.color}</option>
                )) : ''
              }
            </select>
          </div>
          <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
            <select onChange={(e) => setAttributes({ ...attributes, sizeId: e.target.value })} name="" id="" className='w-full p-3 text-xs bg-transparent outline-none'>
              <option value="" selected disabled>Select Size</option>
              {
                size.length > 0 ? size.map((item, index) => (
                  <option value={item._id} key={index}>{item.title}</option>
                )) : ''
              }
            </select>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Attributes