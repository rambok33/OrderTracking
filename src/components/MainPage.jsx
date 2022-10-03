import React from 'react';
import styles from '../style';
import {discount , robot} from '../assets';
import Client from './Client';

const MainPage = () => 
  (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
  <div className='flex flex-row items-center py-[6px] px-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-[10px] mb-2'>
     <img src={discount} alt='discount' className='w-[32px] h-[32px]'/>
    <p className={`${styles.paragraph} ml-2`}><span className='text-white'>20% Discount for Bulk Ordering</span></p>

  </div>

    <div className='flex flex-row justify-between itmes-center w-full'>
   <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[56px] text-white ss:leading-[100px] leading-[75px]'> The  <br className='sm:block hidden'/>
   {' '}<span className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 '>Best order</span> <br className='sm:block hidden'/>{' '} Tracking App</h1>
  <div className='ss:flex hidden md:mr-4 mr-0'><Client/></div>
    </div>
   <p className={`${styles.paragraph} max-w-[570px] mt-7`}>
   Delhivery’s aim is to build the operating system for commerce. We provide express parcel transportation cross-border and supply chain services to over 786 customers and e-commerce leading enterprises & brands. 
   </p>
    </div>

   <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
     <img src={robot} alt='mainpagephoto' className='w-[100%] h-[100%] relative z-[5]' />
   </div>
 
    </section>




  )


export default MainPage