import React from 'react';
import styles from '../style';



import React from 'react'

const OurClient = () => {
  return (
    <div className="w-full rounded-lg   shadow-md ">
   
    
    <div  className=" border-blue-500">
        <div className="p-4 bg-black-gradient rounded-lg md:p-8 " >
        
            <dl className="grid grid-cols-2 gap-8 p-4 mx-auto max-w-screen-xl text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                <div className="flex flex-col justify-center items-center">
                    <dt className="mb-2 text-3xl font-extrabold"></dt>
                    <dd className="font-light text-gray-500 dark:text-gray-400">Apple</dd>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <dt className="mb-2 text-3xl font-extrabold">Kpmg</dt>
                    <dd className="font-light text-gray-500 dark:text-gray-400"></dd>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <dt className="mb-2 text-3xl font-extrabold">Google</dt>
                    <dd className="font-light text-gray-500 dark:text-gray-400"></dd>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <dt className="mb-2 text-3xl font-extrabold">Sony</dt>
                    <dd className="font-light text-gray-500 dark:text-gray-400"></dd>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <dt className="mb-2 text-3xl font-extrabold">Amazon</dt>
                    <dd className="font-light text-gray-500 dark:text-gray-400"></dd>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <dt className="mb-2 text-3xl font-extrabold">20+</dt>
                    <dd className="font-light text-gray-500 dark:text-gray-400">Members</dd>
                </div>
            </dl>
        
        </div>
        
       
    </div>
</div>
  )
}

export default OurClient