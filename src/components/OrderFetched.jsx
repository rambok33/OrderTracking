import React, { useEffect,useState } from 'react';





const OrderFetched = () => {
  const [data,setdata] =  useState([]);
   const getUserdata = async() => {
       const res =await fetch("https://assessment.api.vweb.app/users");
       const currentdata =  await res.json();
       setdata(currentdata[0]);
       console.log(currentdata[0]);
   }
       useEffect(() =>{
            getUserdata();


       },[])


  return (

<div className="w-full rounded-lg   shadow-md ">
   
    
    <div  className=" border-blue-500">
        <div className="p-4 bg-black-gradient rounded-lg md:p-8 " >
        
            <dl className="grid grid-cols-2 gap-8 p-4 mx-auto max-w-screen-xl text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                <div className="flex flex-col justify-center items-center">
                    <dt className="mb-2 text-3xl font-extrabold">{data.user_id}</dt>
                    <dd className="font-light text-gray-500 dark:text-gray-400">Quantity</dd>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <dt className="mb-2 text-3xl font-extrabold">Wine - Toasted Head</dt>
                    <dd className="font-light text-gray-500 dark:text-gray-400">Product Name</dd>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <dt className="mb-2 text-3xl font-extrabold">10/08/2022</dt>
                    <dd className="font-light text-gray-500 dark:text-gray-400">Order Date</dd>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <dt className="mb-2 text-3xl font-extrabold">{data.name}</dt>
                    <dd className="font-light text-gray-500 dark:text-gray-400">UserName</dd>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <dt className="mb-2 text-3xl font-extrabold">90+</dt>
                    <dd className="font-light text-gray-500 dark:text-gray-400">Product Listed</dd>
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

export default OrderFetched;