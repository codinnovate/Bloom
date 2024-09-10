import React from 'react'
import Blog from './Blog'
import BlogCard from './UI/BlogCard'


const Features = () => {
    const featuresItems = [
        {description:'Connecting with healthcare personnel from your home'},
        {description:'Reducing postpartum depression with proper guidance'},
        {description:'Reliable information on prenatal care, delivery and breastfeeding'},
        {description:'Keeping up with your pregnancy appointments'},
        {description:'Connecting with mothers with similar pregnancy experiences'},
    ]
    const blogData = [ 
        {title:'Virtual Consultations', description:"Avoid the long queues at clinics. Talk to an expert anytime, anywhere on your phone from the comfort of your home", image:""},
        {title:'Community', description:"Two is better than One, as the saying goes. Connect with mothers that are in similar situation as you and get to learn firsthand about how they dealt with such situation", image:""},
        {title:'Educational Resources', description:"Postpartum depression is REAL!!! Learn about pregnancy and baby care with our trusted information. Get tips and articles for a healthy pregnancy journey right at your fingertips.", image:""},
        {title:'Personalized Care Tracker', description:"Stay on track, mama!!Never miss an appointment, checkups and immunizations with our personalized reminders. We will keep you organized from pregnancy to parenthood.", image:""},
        {title:'', description:"", image:""},
    ]
  return (
    <section className='flex flex-col gap-4 w-full '>
    <div className='flex w-full'>
        <div className=''>
            {/* images */}
        </div>

        <div className='flex flex-col'>
            <h1>WHO IS BLOOM</h1>
            <h1>We are your Pregnancy and Post-Delivery Friend</h1>
            <p>Dedicated to reducing the rate of deaths among pregnant women, we provide help in:</p>
            <ul>
               {featuresItems.map((item, idx) => (
                <div className='flex' key={idx}>
                    {/* icons */}
                    <p>{item.description}</p>
                </div>
               ))}
            </ul>
        </div>
      
    </div>

    <div className='flex flex-col w-full overflow-hidden'>
        <h1 className='text-center  text-purple-500 font-semibold'>FEATURES</h1>
        <h2 className='text-center  font-semibold text-xl'>All You Need for the Big and Happy Journey</h2>
        
        <div className='flex  gap-5 overflow-x-scroll'>
            {blogData.map((item, idx) => (
                <BlogCard key={idx} data={item} />
            ))}
        </div>
    </div>
    </section>
  )  
}

export default Features
