import React from 'react';
import styles from '../style';
import {arrowUp} from '../assets';

const Client = () => 
   (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
     <div className={`${styles.flexStart} flex-row `}>
      <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
       <span className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 '>Track</span>
      </p>
      <img src={arrowUp} alt='arrow' className='w-[23px] h-[23px] object-contain' />
     </div>
     <p className='font-poppins font-medium text-[18px] leading-[23px]'>
       <span className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 '>User Order</span>
      </p>

    </div>

    </div>
  )


export default Client