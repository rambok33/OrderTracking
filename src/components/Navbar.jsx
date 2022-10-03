import React from 'react';
import {useState} from 'react';
import {navLinks} from '../constants';
import {close, logo, menu} from '../assets';

const Navbar = () => {
const [toggle, settoggle] = useState(false)

  return (
    <nav className='w-full flex py-6 justify-between itmes-center navbar'>
   <img src={logo} alt='edvora' className='w-[124px]'/>
   <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
     {navLinks.map((nav,index) => (
       <li key={nav.id} className={`font poppins font-normal cursor-pointer text [16px] ${index === navLinks.length-1 ? 'mr-0' : 'mr-10'} text-white `}>
         <a className='cursor-pointer text-transparent bg-clip-text  bg-gradient-to-r from-cyan-500 to-blue-500  px-6 py-3 rounded-md outline-none w-full mt-3 hover:text-white' href={`#${nav.id}`}>
              {nav.title}
         </a>
          
       </li>
     ))}


   </ul>
   <div className='sm:hidden flex flex-1 justify-end items-center'>
   <img
     src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain'
    onClick={() => settoggle((prev) => !prev)}

   />
   <div className={`${toggle ? 'flex': 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
   <ul className='list-none flex flex-col justify-end items-center flex-1'>
     {navLinks.map((nav,index) => (
       <li key={nav.id} className={`font-poppins font-normal cursor-pointer text [16px] ${index === navLinks.length-1 ? 'mr-0' : 'mb-4'} text-white `}>
         <a href={`#${nav.id}`}>
              {nav.title}
         </a>
          
       </li>
     ))}


   </ul>
   </div>

   </div>


    </nav>
  )
}

export default Navbar