import React from 'react'
import Image from 'next/image'
import bump from '@/assets/bump.png'
import exercise from '@/assets/exercise.png';
import meal from '@/assets/meals.png';

const blogData = [
  {title:"Conquering Postpartum Stress..", date:'Mar 16, 2024', description:'Drinking a cup of milk daily helps the baby in the womb build strong bones, and fight against calcium deficiency. The requirement for the amount to take ...', image:meal},
  {title:"Why is my baby skin with rash", date:'Oct 5, 2024', description:'Newborn skin is oh-so-soft, but it can also be prone to rashes. These can be alarming for new parents, but rest assured, most baby rashes are harmless and cla...', image:exercise},
  {title:"Bump Massage Relievers", date:'Feb 2, 2024', description:'Research has shown that one way to reduce the baby kicking the mother so hard is when the father massages the stomach once in two (2) hours. This h...', image:bump},
]
const Blog = () => {
  return (
    <div className='flex flex-col gap-5 mt-[3em]'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col '>
        <p className='text-purple text-[16px] font-medium'>OUR BLOG</p>
        <h2 className='text-black font-medium text-xl md:text-[32px]'>Stay Updated with Pregnancy Tips</h2>
        </div>
        <button className='bg-pink rounded-md text-black p-2'>See All</button>
      </div>
      <div className='w-full flex gap-[2em] flex-col  md:flex-row items-center '>
        {blogData.map((item, idx) => (
          <div className='flex flex-col  w-[411px] '>
            <div className='bg-[#EADAFF] w-fit rounded-full py-[2px] px-2 m-3 absolute  font-medium text-[12px]'>
              New born
              </div>
            <Image src={item.image}  alt=''  width='411' height='261' />
            <div className='mt-2 flex flex-col '>
            <p className='text-grey text-[14px] font-medium'>{item.date}</p>
            <h1 className='font-semibold text-[28px]'>{item.title}</h1>
            <p className='text-grey font-medium'>{item.description}</p>

            <p className='text-pink font-semibold mt-2'>Learn More</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
