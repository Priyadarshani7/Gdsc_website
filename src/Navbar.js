import { useState } from 'react';
import download from "./download.png";

import { GiHamburgerMenu } from 'react-icons/gi';
import {RxCross2} from 'react-icons/rx';

export default function Navbarr(){
  let links=[
    {name:"HOME",link:"/"},
    {name:"ABOUT",link:"/"},
    {name:"COMMUNITY",link:"/"},
    {name:"EVENTS",link:"/"},
  ];
const[open,setopen]=useState(false);
  return(
    <div class=' shadow-md w-full sticky top-0 left-0'>
      <div class='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div class=' flex font-bold text-2xl cursor-pointerflex items-center font-[Poppins] text-gray-800'>
       <img class='h-[40px] m-[4px]' src={download} alt=''/> <h1 class=''>Google Developer Students Club</h1>
      </div>

      <div onClick={()=> setopen(!open)} class='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
         {open ?<RxCross2/>:<GiHamburgerMenu /> }
      </div>
      <ul class={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in  sm:bg-[#F9F9F9] md:bg-none ${open ? 'top-20' : 'top-[-490px]'}`}>
       {
links.map((links)=>(
  <li key={links.name} class='md:ml-8 text-xl md:my-0 my-7'>
  <a href={links.link} class='text-gray-800 hover:text-gray-400 duration-500'>{links.name}</a>
  </li>
))
       }
    <button class='text-[#F9F9F9] bg-[#2F58CD] text-white font-[Poppins] py-2 px-6 rounded md:ml-8 
      hover:bg-[#000000]-400 duration-500'>Become Member</button>
      </ul>
      
      </div>
    </div>
  );
}

