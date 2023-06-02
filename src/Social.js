import React from 'react'

export default function Social() {
  return (
    <div class='mt-[100px]'>
  <div>
    <h1 class='text-[60px] text-center'>Join Your Peers At Community</h1>
    <h2 class='text-[30px] text-center'>Connect with fellow community members by joining us through the links mentiond below.</h2>
   
    <div class='flex justify-center items-center flex-col ml-[40px] mr-[40px] gap-[20px] mt-[50px]'>
        <div class=''>
          <button onClick={event =>  window.location.href='https://www.instagram.com/gdsc_ghrcem/?__coig_restricted=1'} class=' flex text-center bg-[#FF0060] h-[80px] w-[250px] text-[#F9F9F9] text-[25px] rounded-[50px] '>Follow on Instagram</button>
           
        </div>
        <div >
        <button onClick={event =>  window.location.href='https://chat.whatsapp.com/DqgNYwm9z8mGfKPcpVNvkm'}  class=' flex text-center item-center bg-[#82CD47] h-[80px] w-[250px] text-[#F9F9F9] text-[25px] rounded-[50px]'>Join Whatsapp group</button>
           
        </div>
        <div >
        <button  class=' flex text-center bg-[#2F58CD] h-[80px] w-[250px] text-[#F9F9F9] text-[25px] rounded-[50px]'>Join Discord channel</button>
        
        </div>
        
      </div>
 
    </div> 
    </div>
  )
}
