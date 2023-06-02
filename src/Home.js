import React from 'react'
import diversity from "./diversity.png";

export default function Home() {
  return (
    <div class='flex overflow-hidden items-center text-center mt-[170px] justify-center sm:mt-[40px] md:mt-[60px] lg:mt-[170px]'>
  <section class='w-[45%] sm:w-[43%] md:w-[35%] lg:w-[45%]' >     
<h1 class='text-[60px] sm:text-[13px] md:text-[40px] lg:text-[60px]'>Google Developer Students Club</h1>
<h3 class='text-[50px] sm:text-[13px] md:text-[40px] lg:text-[60px]'>@GHRCEM</h3>
<h3 class='text-[30px] text-left -inset-x-[300px] text-[#526D82] sm:text-[10px] md:text-[20px] lg:text-[30px]'>Developer Student Clubs is a Google Developers program for university students to learn <span class='text-[#E8AA42]'>mobile </span>and <span class='text-[#3A98B9]'>web development skills, </span><span class='text-[#ED2B2A]'>design thinking skills</span>  and <span class='text-[#5D9C59]'>leadership skills.</span></h3>
<button class=' mt-[30px] bg-[#2F58CD] h-[60px] w-[250px] text-[#F9F9F9] text-[25px] rounded-[10px] '>Become Member</button>
</section>      


          <img class='h-[500px] sm:h-[130px] md:h-[300px] lg:h-[500px]' src={diversity} alt='' />
   
        </div>

  )
}