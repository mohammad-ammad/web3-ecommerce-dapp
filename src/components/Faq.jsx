import React from 'react'
import faq from '../assets/faq.png';
import Queries from './Queries';

const Faq = () => {
  return (
    <div className='bg-[#222222] grid grid-cols-1 md:grid-cols-3 gap-3 p-5 md:p-14'>
        <div className='inline-flex justify-center items-start'>
            <img src={faq} className="w-60" alt="" srcset="" />
        </div>
        <div className='col-span-2'>
            <h1 className='text-2xl text-center md:text-left md:text-4xl text-slate-200 font-bold'>FAQ</h1>
            <Queries active={true} question="This is a name for the item This is a name for the item" 
            answer="Lorem Ipsum is simply dummy text of 
            the printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard dummy text 
            ever since the 1500s, when an unknown printer took a 
            galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets 
            containing Lorem Ipsum passages, and more recently with desktop publishing 
            software like Aldus PageMaker including versions of Lorem Ipsum."/>
            <Queries question="This is a name for the item This is a name for the item" 
            answer="Lorem Ipsum is simply dummy text of 
            the printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard dummy text 
            ever since the 1500s, when an unknown printer took a 
            galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets 
            containing Lorem Ipsum passages, and more recently with desktop publishing 
            software like Aldus PageMaker including versions of Lorem Ipsum."/>
            <Queries question="This is a name for the item This is a name for the item" 
            answer="Lorem Ipsum is simply dummy text of 
            the printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard dummy text 
            ever since the 1500s, when an unknown printer took a 
            galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets 
            containing Lorem Ipsum passages, and more recently with desktop publishing 
            software like Aldus PageMaker including versions of Lorem Ipsum."/>
            <Queries question="This is a name for the item This is a name for the item" 
            answer="Lorem Ipsum is simply dummy text of 
            the printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard dummy text 
            ever since the 1500s, when an unknown printer took a 
            galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets 
            containing Lorem Ipsum passages, and more recently with desktop publishing 
            software like Aldus PageMaker including versions of Lorem Ipsum."/>
        </div>
    </div>
  )
}

export default Faq