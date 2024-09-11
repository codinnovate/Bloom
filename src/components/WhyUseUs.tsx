import { title } from 'process'
import React from 'react'

const WhyUseUs = () => {
    const items = [
        {title:'24/7 Expert Advice', image:""},
        {title:'Trusted Information', image:""},
        {title:'Scheduled Reminders', image:""},
        {title:'Virtual Calls', image:""},
        
    ]
  return (
    <div className='flex items-center justify-between w-full p-5 bg-[#e5d5e4] h-[182px]'>
      {items.map((key, idx) => (
        <span key={idx}>
          <h1>{key.title}</h1>
        </span>
      )
      )}
      
    </div>
  )
}

export default WhyUseUs
