import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div>
            <div className='py-5 px-5 md:px-12 lg:px-28 '>
              <div className='flex justify-between items-center'>
                <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto'></Image>
                <button className='flex items-center gap-2 font-medium py-1 px-2 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>Get Started <Image src={assets.arrow}></Image></button>
              </div>
              <div className='text-center my-8'>
                <h1 className='text-3xl sm:text-5xl font-medium '>latest Blogs</h1>
                <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et neque temporibus illum exercitationem at odit, quasi quaerat fuga eum nulla, aspernatur qui, rem dolores vitae!</p>
                <form className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto max-auto mt-10 border border-black shadow-[-7px_7px_0px_000000]'>
                  <input type="email" placeholder='Enter your email' className='pl-4 outline-none' />
                  <button type='submit' className='border-l border-black py-4 px-4 sm:px-5 active:bg-gray-400 active:text-white'>Subscribe</button>
                </form>
              </div>
            </div>
    </div>
  )
}
