import React from 'react'
import diversity from "./diversity.png";

export default function Home() {
  return (
    <div class='flex overflow-hidden items-center text-center mt-[170px] justify-center sm:mt-[40px] md:mt-[60px] lg:mt-[170px]'>
  <section class='w-[45%] sm:w-[45%] md:w-[45%] lg:w-[45%]' >     
<h1 class='text-[60px] sm:text-[13px] md:text-[30px] lg:text-[60px]'>Google Developer Students Club</h1>
<h3 class='text-[50px] sm:text-[13px] md:text-[30px] lg:text-[60px]'>@GHRCEM</h3>
<h3 class='text-[30px] text-left -inset-x-[300px] text-[#526D82] sm:text-[10px] md:text-[20px] lg:text-[30px]'>Developer Student Clubs is a Google Developers program for university students to learn <span class='text-[#E8AA42]'>mobile </span>and <span class='text-[#3A98B9]'>web development skills, </span><span class='text-[#ED2B2A]'>design thinking skills</span>  and <span class='text-[#5D9C59]'>leadership skills.</span></h3>
<button class='lg: mt-[30px] bg-[#2F58CD] lg:h-[60px] lg:w-[250px] text-[#F9F9F9] lg:text-[25px] rounded-[10px] sm:mt-[10px] sm:h-[25px] sm:w-[100px] sm:text-[10px] md:mt-[15px] md:h-[50px] md:w-[200px] md:text-[20px]'>Become Member</button>
</section>      


          <img class='h-[500px] sm:h-[150px] md:h-[320px] lg:h-[500px]' src={diversity} alt='' />
   
        </div>

  )
}