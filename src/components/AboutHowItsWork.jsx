import React from 'react'

const AboutHowItsWork = ({list}) => {
  return (
    <div className='py-5 px-5 md:px-16 lg:px-52'>
        {
            list.map((item,index) => (
                <Card num={index+1} title={item.title} desc={item.desc} image={item.image} pos={item.position}/>
            ))
        }
    </div>
  )
}

export default AboutHowItsWork

const Card = ({num,title,desc,image, pos}) => 
{
    return (
        <div className='flex justify-center md:justify-evenly items-center flex-col md:flex-row my-3'>
            <div className='block md:hidden'>
                <img src={image} className="w-96" alt="" />
            </div>
            {
                pos === "left" ? <div className='hidden md:block'>
                <img src={image} className="w-96" alt="" />
            </div>
            : ''
            }
            <div className={`${pos === "left" ? 'ml-1' : 'mr-1'} md:w-5/12`}>
                <h1 className='text-2xl font-bold text-slate-900 my-3 text-center md:text-left'>{num}. {title}</h1>
                <p className='text-xs text-slate-700 text-center md:text-left'>{desc}</p>
            </div>
            {
                pos === "right" ? <div className='hidden md:block'>
                <img src={image} className="w-96" alt="" />
            </div>
            : ''
            }
        </div>
    );
}