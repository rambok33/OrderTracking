import React from 'react'
import { people01,people02,people03 } from '../assets'
const Footerup = () => {
  return (
    <div className="w-full rounded-lg   shadow-md ">
   
    
    <div  className=" border-blue-500">
    <dl className="grid grid-cols-2 gap-8 p-4 mx-auto max-w-screen-xl text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
        <div className="p-4 bg-black-gradient rounded-lg md:p-8 " >
        <div className="flex flex-col justify-center items-center"><img src={people01} alt='mainpagephoto' className='w-[100%] h-[100%] relative z-[5]' />juliet</div>
        <div className="flex flex-col justify-center items-center"><img src={people02} alt='mainpagephoto' className='w-[100%] h-[100%] relative z-[5]' />Sam</div>
        <div className="flex flex-col justify-center items-center"><img src={people03} alt='mainpagephoto' className='w-[100%] h-[100%] relative z-[5]' />Odoku</div>
            
        </div>
    </dl>
       
    </div>
</div>
  )
}

export default Footerup