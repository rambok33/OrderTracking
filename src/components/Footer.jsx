import React from 'react';
import { logo } from '../assets';

const Footer = () => 
 (
   

<footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 bg-black">
    <div className="sm:flex sm:items-center sm:justify-between">
        <a href="#" className="flex items-center mb-4 sm:mb-0">
            <img src={logo} class="w-[124px]" alt="Edvora Logo"/>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">Home</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Features</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">Client</a>
            </li>
            <li>
                <a href="#" className="hover:underline">Contact</a>
            </li>
            <li>
                <a href="#" className="hover:underline">Ordernow</a>
            </li>
        </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a className='text-white bg-black-500 hover:bg-blue-500 border-blue-500 hover:border-blue-500' href="https://github.com/Flicker786" >Flicker™</a>. All Rights Reserved.
    </span>
</footer>




    
  )


export default Footer