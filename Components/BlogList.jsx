import { blog_data } from '@/Assets/assets'
import React, { useState } from 'react'
import BlogItem from './BlogItem'

export default function BlogList() {
    const [menu,setMesu] = useState('All');

  return (
    <div>
      <div className='flex justify-center gap-6 my-10'>
        <button onClick={()=>setMesu('All')} className={menu === "All"? 'bg-black text-white py-1 px-4 rounded-sm': ""}>All</button>
        <button onClick={()=>setMesu('Technology')} className={menu === "Technology"? 'bg-black text-white py-1 px-4 rounded-sm': ""}>Technology</button>
        <button onClick={()=>setMesu('Startup')} className={menu === "Startup"? 'bg-black text-white py-1 px-4 rounded-sm': ""}>Startup</button>
        <button onClick={()=>setMesu('Lifestyle')} className={menu === "Lifestyle"? 'bg-black text-white py-1 px-4 rounded-sm': ""}>Lifestyle</button>
      </div>
      <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24 '>
        {
            blog_data.filter((item)=> menu==="All"?true: item.category===menu).map((item,index)=>{
                return <BlogItem key={index} image={item.image} title={item.title} description= {item.description} id={item.id} category={item.category}></BlogItem>
            })
        }
      </div>
    </div>
  )
}
