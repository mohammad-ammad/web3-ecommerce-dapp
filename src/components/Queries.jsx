import { Transition } from '@windmill/react-ui';
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
                <Transition
                  show={toggle}
                  enter="transition ease-out duration-300 transform"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-in duration-100 transform"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                    <div>
                    <p className='text-xs text-justify font-light text-slate-300 mb-3'>
                    {answer}
                    </p>
                    </div>
                </Transition>
                
    </div>
    <hr />
    </>
  )
}

export default Queries