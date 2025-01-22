import Hero from '@/components/Hero/Hero'
import MyExperience from '@/components/MyExperience/MyExperience'
import MyServices from '@/components/MyServices/MyServices'
import MyStack from '@/components/MyStack/MyStack'
import ShowCase from '@/components/ShowCase'
import Testimonials from '@/components/Testimonials'
import React from 'react'

export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-0 h-min overflow-hidden p-0 relative w-w-full flex-nowrap items-center justify-start">
      <div className='gap-[100px] flex-col max-w-[750px] w-[80%] flex-nowrap flex items-center flex-none h-min justify-center  relative overflow-visible p-[80px_0px]  ' >
        <Hero />
        <MyExperience />
        <MyStack />
        <MyServices />
        <ShowCase showData={2} isMore />
        <Testimonials />
      </div>
    </div>
  )
}
