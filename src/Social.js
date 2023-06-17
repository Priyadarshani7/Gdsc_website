import React from 'react'

export default function Social() {
  return (
    <div class='lg:mt-[100px] sm:mt-[30px] md:mt-[60px]'>
  <div>
    <h1 class='lg:text-[60px] text-center sm:text-[20px] md:text-[30px]'>Join Your Peers At Community</h1>
    <h2 class='lg:text-[30px] text-center sm:text-[15px] md:text-[25px]'>Connect with fellow community members by joining us through the links mentiond below.</h2>
   
    <div class='flex justify-center items-center flex-col lg:ml-[40px] lg:mr-[40px] lg:gap-[20px] lg:mt-[50px] sm:gap-[10px] md:gap-[15px]'>
        <div class=''>
          <button onClick={event =>  window.location.href='https://www.instagram.com/gdsc_ghrcem/?__coig_restricted=1'} class=' flex text-center bg-[#FF0060] lg:h-[80px] lg:w-[250px] text-[#F9F9F9] lg:text-[25px] rounded-[30px] sm:h-[60px] sm:w-[180px] sm:text-[18px]  '>Follow on Instagram</button>
           
        </div>
        <div >
        <button onClick={event =>  window.location.href='https://chat.whatsapp.com/DqgNYwm9z8mGfKPcpVNvkm'}  class=' flex text-center item-center bg-[#82CD47] lg:h-[80px] lg:w-[250px] text-[#F9F9F9] lg:text-[25px] rounded-[50px] sm:h-[60px] sm:w-[180px] sm:text-[18px] '>Join Whatsapp group</button>
           
        </div>
        <div >
        <button  class=' flex text-center bg-[#2F58CD] lg:h-[80px] lg:w-[250px] text-[#F9F9F9] lg:text-[25px] rounded-[50px] sm:h-[60px] sm:w-[180px] sm:text-[18px] '>Join Discord channel</button>
        
        </div>
        
      </div>
 
    </div> 
    </div>
  )
}
