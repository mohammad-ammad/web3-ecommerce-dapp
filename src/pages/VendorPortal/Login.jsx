import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='bg-slate-100 w-full h-screen flex justify-center items-start pt-20 md:pt-28'>
            <div className='w-full md:w-1/2 px-5'>
                <h1 className='text-black text-md font-bold my-3'>Login As Brand</h1>
                <div>
                    <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
                        <input type="text" className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Login ID' name="" id="" />
                    </div>
                    <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
                        <input type="text" className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Password' name="" id="" />
                    </div>
                    <div>
                        <Link to="/seller-register" className='text-xs text-blue-500'>Don't have brand account? Register</Link>
                    </div>
                </div>
            <div className='flex justify-center items-center my-5'>
                 <button className='bg-black text-white w-full rounded-full px-5 py-1 text-sm font-normal'>Login</button>
            </div>
            </div>
        </div>
  )
}

export default Login