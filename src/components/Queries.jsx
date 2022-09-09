import React, { useState } from 'react'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md';

const Queries = ({question, answer, active}) => {
    const [toggle, setToggle] = useState(active ? true : false);
    const toggleHandler = () => {
        setToggle(!toggle)
    }
  return (
    <>
    <div className='my-8'>
                <div className='flex justify-between items-center my-2'>
                    <h3 className='text-md text-white cursor-pointer' onClick={toggleHandler}>{question}</h3>
                    <p>
                        <MdOutlineKeyboardArrowDown className='fill-white text-lg cursor-pointer' onClick={toggleHandler}/>
                    </p>
                </div>
                <div className={`${toggle ? 'block' : 'hidden'}`}>
                    <p className='text-xs text-justify font-light text-slate-300 mb-3'>
                    {answer}
                    </p>
                </div>
    </div>
    <hr />
    </>
  )
}

export default Queries