import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='bg-slate-100 w-full h-screen flex justify-center items-start pt-20 md:pt-28'>
            <div className='w-full md:w-1/2 px-5'>
                <h1 className='text-black text-md font-bold my-3'>Register As Brand</h1>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-1'>
                        <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
                            <input type="text" className='w-full p-3 text-xs bg-transparent outline-none' placeholder='FirstName' name="" id="" />
                        </div>
                        <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
                            <input type="text" className='w-full p-3 text-xs bg-transparent outline-none' placeholder='LastName' name="" id="" />
                        </div>
                    </div>
                    <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
                        <input type="text" className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Email Address' name="" id="" />
                    </div>
                    <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
                        <input type="text" className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Password' name="" id="" />
                    </div>
                    <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
                        <input type="text" className='w-full p-3 text-xs bg-transparent outline-none' placeholder='DOB' name="" id="" />
                    </div>
                    <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
                        <input type="text" className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Phone No.' name="" id="" />
                    </div>
                    <div>
                        <Link to="/seller-login" className='text-xs text-blue-500'>Already have an account? Login</Link>
                    </div>
                </div>
            <div className='flex justify-center items-center my-5'>
                 <button className='bg-black text-white w-full rounded-full px-5 py-1 text-sm font-normal'>Register</button>
            </div>
            </div>
        </div>
    )
}

export default Register