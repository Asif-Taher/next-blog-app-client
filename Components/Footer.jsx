import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className='flex justify-around py-5 flex-col gap-2 sm:gap-0 sm:flex-row bg-black items-center'>
        <Image src={assets.logo_light } alt='' width={120}></Image>
        <p className='text-sm text-white'>Al Right Reserved. Copyright @blogger</p>
        <div className='flex'>
            <Image src={assets.facebook_icon} alt='' width={40}></Image>
            <Image src={assets.twitter_icon} alt='' width={40}></Image>
            <Image src={assets.googleplus_icon} alt='' width={40}></Image>
        </div>
    </div>
  )
}
