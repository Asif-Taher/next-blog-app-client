'use client';
import { assets, blog_data } from '@/Assets/assets';
import Footer from '@/Components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function Page({params}) {
    const [data,setData] = useState(null);
    
    //fechBlogData function in maked here
    const fetchBlogData = () =>{
        for(let i=0; i<blog_data.length; i++){
            if(Number(params.id) === blog_data[i].id){
                setData(blog_data[i]);
                console.log(blog_data[i])
                break;
            }
        }
    }

    useEffect(()=>{
        fetchBlogData();

    },[])
  return (
    data?<>  <div className='bg-gray-300 py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center '>
        <Link href='/'>  
        <Image src={assets.logo} alt='' width={180} className='w=[130px] sm:w-auto'></Image>
        </Link>
      <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]]'>Get Started <Image src={assets.arrow} alt=''></Image></button>
      </div>
      <div className='text-center my-24'>
        <h2 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h2>
        <Image className='mx-auto mt-6 border border-white rounded-full' src={data.author_img} alt='' width={60} height={60}></Image>
        <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
      </div>
    </div>
    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
      <Image src={data.image} width={1280} height={720} alt=''></Image>
      <h1 className='my-8 text-[26px] font-semibold'>Introduction: </h1>
      <p>{data.description}</p>
      <h3 className='my-5 text-[18px] font-semibold '>step 1: Self Respection and Goal Settings</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quasi perspiciatis earum ullam pariatur ipsam officia dolore eos. Quam ipsum maiores dolorem ducimus sed nisi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia excepturi voluptates voluptatibus ab at quod sint quae blanditiis tempore illum ipsam necessitatibus, temporibus corporis accusamus?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia excepturi voluptates voluptatibus ab at quod sint quae blanditiis tempore illum ipsam necessitatibus, temporibus corporis accusamus?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia excepturi voluptates voluptatibus ab at quod sint quae blanditiis tempore illum ipsam necessitatibus, temporibus corporis accusamus?</p>
      <h3 className='my-5 text-[18px] font-semibold '>step 2: Self Respection and Goal Settings</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia excepturi voluptates voluptatibus ab at quod sint quae blanditiis tempore illum ipsam necessitatibus, temporibus corporis accusamus?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quam tempore eaque consequuntur molestiae expedita, dignissimos tempora quibusdam nostrum quidem, eius corrupti suscipit voluptate explicabo corporis tenetur. Molestiae similique voluptas aliquam totam labore velit, fugiat quam vitae enim expedita nihil modi ipsam, est quae rerum commodi illo ab beatae dolorem!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quam tempore eaque consequuntur molestiae expedita, dignissimos tempora quibusdam nostrum quidem, eius corrupti suscipit voluptate explicabo corporis tenetur. Molestiae similique voluptas aliquam totam labore velit, fugiat quam vitae enim expedita nihil modi ipsam, est quae rerum commodi illo ab beatae dolorem!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quam tempore eaque consequuntur molestiae expedita, dignissimos tempora quibusdam nostrum quidem, eius corrupti suscipit voluptate explicabo corporis tenetur. Molestiae similique voluptas aliquam totam labore velit, fugiat quam vitae enim expedita nihil modi ipsam, est quae rerum commodi illo ab beatae dolorem!</p>
      <h3 className='my-5 text-[18px] font-semibold '>step 3: Self Respection and Goal Settings</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi dolores ipsam totam explicabo accusamus fugiat laborum asperiores veritatis, voluptate culpa harum neque rem commodi officiis.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi dolores ipsam totam explicabo accusamus fugiat laborum asperiores veritatis, voluptate culpa harum neque rem commodi officiis.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi dolores ipsam totam explicabo accusamus fugiat laborum asperiores veritatis, voluptate culpa harum neque rem commodi officiis.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi dolores ipsam totam explicabo accusamus fugiat laborum asperiores veritatis, voluptate culpa harum neque rem commodi officiis.</p>
      <h1 className='my-5 text-[18px] font-semibold '>Conclusion: </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam facilis ab laudantium alias ad, nesciunt rem tempora incidunt illum, natus quas hic ut velit aperiam iure. Blanditiis porro ea ducimus iste sunt sequi, fugit, facilis harum quam rerum cum natus!</p>
      <div>
        <p className='text-black font-semibold my-4 '>Share This Article on social media</p>
        <div className='flex'>
          <Image src={assets.facebook_icon} width={50} alt=''></Image>
          <Image src={assets.twitter_icon} width={50} alt=''></Image>
          <Image src={assets.googleplus_icon} width={50} alt=''></Image>
        </div>
      </div>
    </div>
    <Footer></Footer>

    </>
  :<></>
  )
}
