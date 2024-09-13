import React from 'react'
import maryAnny from '@/assets/maryann.png';
import blessing from '@/assets/blessings.png';
import cody from '@/assets/cody.png';
import Image from 'next/image';
import star from '@/assets/stars.png'

const testimonialItems = [
  {name:"MaryAnn Moore", desc:"I am grateful that I found the Bloom platform while I was pregnant. The great tips shared catered to my personal needs, I had a stress-free delivery.Thanks Bloom for this wonderful application.", image:maryAnny},
  {name:"Blessing Bryant", desc:"As a new mom, I was so confused on how to navigate the pregnancy life. Then I came across Bloom, and thankfully it was the real deal. I’ve been a user for more than 3 years now and the guidance has helped me with raising my 3 boys", image:blessing},
  {name:"Cody Akinde",desc:"The application has been a life-saver. Learning great tips that I’ve used to assist my wife while pregnant helped with a stress-free delivery and even after delivery, we’ve learnt how to balance taking care of our babies and work-life", image:cody}
  
]
const  Testimonials = () => {

  return (
    <div className='bg-[#9747FF12] w-full p-4   flex flex-col items-center'>
      <div className='flex items-center flex-col'>
        <h1 className='text-center font-medium text-purple'>TESTIMONIALS </h1>
        <h2>Our Incredible Moms Say</h2>
      </div>
      <div className='flex flex-col items-center md:flex-row md:overflow-scroll md:overflow-x-auto gap-[2em]'>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" r="23.5" stroke="#FF5FAC"/>
<path d="M33.7071 24.7071C34.0976 24.3166 34.0976 23.6834 33.7071 23.2929L29.7071 19.2929C29.3166 18.9024 28.6834 18.9024 28.2929 19.2929C27.9024 19.6834 27.9024 20.3166 28.2929 20.7071L30.5858 23L15 23C14.4477 23 14 23.4477 14 24C14 24.5523 14.4477 25 15 25L30.5858 25L28.2929 27.2929C27.9024 27.6834 27.9024 28.3166 28.2929 28.7071C28.6834 29.0976 29.3166 29.0976 29.7071 28.7071L33.7071 24.7071Z" fill="#FF5FAC"/>
</svg>

      {testimonialItems.map((item, idx) => (
        <div
         key={idx}
         className='mt-[4em] p-[32px] bg-gradient-to-r from-[#9747FF] to-[#FFA9B4] h-[306px] md:w-[894px] rounded-md flex flex-col justify-center   items-center w-full '>
          <div className='flex items-center'>
          <Image
           src={item.image}
            alt='avata'
            width='32'
            className=''
             />
            <h2 className='ml-2'>{item.name}</h2>
          </div>
            <Image 
            src={star}
            width={152}
            height={42} 
            alt='stars'
            className=''
             />
             <h2 className='mt-[2em] '>{item.desc}</h2>
      </div>
      ))}

<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" r="23.5" stroke="#FF5FAC"/>
<path d="M33.7071 24.7071C34.0976 24.3166 34.0976 23.6834 33.7071 23.2929L29.7071 19.2929C29.3166 18.9024 28.6834 18.9024 28.2929 19.2929C27.9024 19.6834 27.9024 20.3166 28.2929 20.7071L30.5858 23L15 23C14.4477 23 14 23.4477 14 24C14 24.5523 14.4477 25 15 25L30.5858 25L28.2929 27.2929C27.9024 27.6834 27.9024 28.3166 28.2929 28.7071C28.6834 29.0976 29.3166 29.0976 29.7071 28.7071L33.7071 24.7071Z" fill="#FF5FAC"/>
</svg>

      </div>
       


    </div>
  )
}

export default Testimonials
