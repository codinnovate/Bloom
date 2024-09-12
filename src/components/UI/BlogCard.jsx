import React from 'react'
import Button from './Button';
import Image from 'next/image';

const BlogCard = ({data}) => {
  return (
    <div className='flex flex-col border rounded-md px-6 py-4   justify-between min-w-[414px] w-[411px] h-[515px]'>
        {/* images */}
        <Image src={data.image} className="rounded-md" alt={data.title} />
        <div className='flex flex-col'>
        <h1 className='text-xl font-semibold'>{data.title}</h1>
        <h3 className='font-medium mt-3'>{data.description}</h3>
        </div>

        <Button title="Get Started for Free" />
      
    </div>
  )
}

export default BlogCard