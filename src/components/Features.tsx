import React from 'react'
import Blog from './Blog'
import BlogCard from './UI/BlogCard'
import Image from 'next/image'
import pregs from '@/assets/pregs.png'
import vconsult from '@/assets/2.png';
import community from '@/assets/3.png';
import edu from '@/assets/1.png';

const Features = () => {
    const featuresItems = [
        {description:'Connecting with healthcare personnel from your home'},
        {description:'Reducing postpartum depression with proper guidance'},
        {description:'Reliable information on prenatal care, delivery and breastfeeding'},
        {description:'Keeping up with your pregnancy appointments'},
        {description:'Connecting with mothers with similar pregnancy experiences'},
    ]
    const blogData = [ 
        {title:'Virtual Consultations', 
            description:"Avoid the long queues at clinics. Talk to an expert anytime, anywhere on your phone from the comfort of your home", image:vconsult},
        {title:'Community',
             description:"Two is better than One, as the saying goes. Connect with mothers that are in similar situation as you and get to learn firsthand about how they dealt with such situation", image:community},
        {title:'Educational Resources', 
            description:"Postpartum depression is REAL!!! Learn about pregnancy and baby care with our trusted information. Get tips and articles for a healthy pregnancy journey right at your fingertips.", image:edu},
        //{title:'Personalized Care Tracker', description:"Stay on track, mama!!Never miss an appointment, checkups and immunizations with our personalized reminders. We will keep you organized from pregnancy to parenthood.", image:},
    ]
  return (
    <section className='flex flex-col gap-[3em] w-full'>
    <div className='flex flex-col md:flex-row w-full gap-[3em] items-center justify-between'>
        <div className='w-full p-5'>
           <Image src={pregs} alt='pregnant women' width='667' height='256'/>
        </div>
        <div className='flex flex-col gap-4 w-full '>
            <h1 className='text-purple'>WHO IS BLOOM</h1>
            <h1 className='text-2xl text-grey'>We are your Pregnancy and Post-Delivery Friend</h1>
            <p className='text-grey text-[16px]'>Dedicated to reducing the rate of deaths among pregnant women, we provide help in:</p>
            <ul>
               {featuresItems.map((item, idx) => (
                <div className='flex items-center gap-1' key={idx}>
                   <span className=''>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.54332 3.16343C8.74407 2.97382 8.75311 2.65736 8.5635 2.45661C8.37389 2.25585 8.05743 2.24682 7.85668 2.43643L3.54135 6.51217L2.14332 5.19175C1.94256 5.00214 1.62611 5.01117 1.4365 5.21193C1.24689 5.41268 1.25592 5.72914 1.45668 5.91875L3.19803 7.56343C3.39073 7.74543 3.69197 7.74543 3.88467 7.56343L8.54332 3.16343Z" fill="#9747FF"/>
                    </svg>
                    </span>
                    <p className='text-[16px] text-grey'>{item.description}</p>
                </div>
               ))}
            </ul>
        </div>
    </div>

    <div className='flex flex-col w-full '>
        <div className='flex flex-col md:items-center w-full'>
        <h1 className=' text-purple text-[16px] font-medium'>FEATURES</h1>
        <h2 className='font-medium text-xl'>All You Need for the Big and Happy Journey</h2>
        </div>
        
        <div className='flex  gap-5  mt-[2em] overflow-x-scroll w-full'>
            {blogData.map((item, idx) => (
                <BlogCard key={idx} data={item} />
            ))}
        </div>
    </div>
    </section>
  )  
}

export default Features
