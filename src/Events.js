import React from 'react'

export default function Events() {
  return (
    <div class='bg-[#DFDFDE] mt-np[100px] h-[700px] grid '>
        <h1 class='text-center text-[70px]'>Events & Workshops </h1>
      <div class=' flex ml-[40px] mr-[40px] gap-[20px]'>
        <div class='bg-[#F5F5F5] h-[400px] '>
        <img  class='h-[150px]  block m-auto' src="https://gdscmitaoe.github.io/images/assets/technologies/cloud.png"/>
            <h1 class='text-[30px] text-center   text-[#D2001A]'>Cloud Computing</h1>
            <h2 class='text-[20px] text-center'>For passionate developers who want to stay relevant in a cloud first world where businesses demand for agility and innovation and prompt rise of cloud-native applications to bridges gaps between data, insight, and action.</h2>
        </div>
        <div class='bg-[#F5F5F5] h-[400px] '>
            <img  class='h-[150px] text-center block m-auto' src="https://gdscmitaoe.github.io/images/assets/technologies/android.png"/>
        <h1 class='text-[30px] text-center  text-[#5D9C59]'>Android Development</h1>
            <h2 class='text-[20px] text-center'>Every year Google developers release exciting new updates to the world's most popular operating system. We always have sessions to keep you updated and mastering the latest trends in modern Android development</h2>
        </div>
        <div class='bg-[#F5F5F5] h-[400px] '>
        <img  class='h-[150px] text-center block m-auto' src="https://gdscmitaoe.github.io/images/assets/technologies/web.png"/>
        <h1 class='text-[30px] text-center    text-[#3A98B9]'>Web Development</h1>
            <h2 class='text-[20px] text-center'>Learn the core foundations of a delightful web experience both for the user and developer. Stay up to tabs with emerging and trending technologies. Get access to a guided, tutorial and hands-on coding experience</h2>
        </div>
      </div>
    </div>
  )
}
