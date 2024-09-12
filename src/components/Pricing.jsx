import React from 'react'
import Button from './UI/Button'


const pricingData = [
  {plan:'Basic', buttonText:'Sign Up for Free',  amount:'Free', 
    infos:[
    'access to articles',
    '1 virtual appointment',
    '2 videos daily',
    'Schedule reminders'
  ]},
  
  {plan:'Standard', buttonText:'Buy Now',  amount:'5,000/month', infos:[
    '4 videos daily','2 virtual appointments', 'Access to support group'
  ] },
    {plan:'Premium', buttonText:'Buy Now',  amount:'8,700/month', infos:['Unilimted Videos daily', 'Unlimited virtual appointments', 'Access to support group'] }
]

const PriceCard = ({hasCover, plan, amount, buttonText, infos }) => {
  return (
    <div className='flex flex-col w-[411px] h-[466px] rounded-2xl bg-white    gap-5  '>
      <div className={`w-full h-[50px]  rounded-t-2xl ${hasCover ? 'bg-purple flex justify-center items-center  text-white': 'bg-white'}`}>
        {hasCover && (
          <p className='text-white text-center'>
            Best Value
          </p>
        )}
      </div>

      <div className='flex flex-col justify-center items-center px-6 '>
        <p>{plan}</p>
        <h1 className='text-xl font-bold text-purple'>{amount}</h1>
        <Button 
        className='w-full mt-[2em]'
        title={buttonText}
        />
        </div>
        <div className='mt-[4em] px-6 '>
          {plan !== 'Basic' && (
            <p>Everything offered in Basic plus:</p>
          )}
          <ul className='flex flex-col gap-2 mt-3'>
            {infos.map((item, idx) => (
              <li key={idx} className='flex items-center gap-1'>
                 <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.54332 3.16343C8.74407 2.97382 8.75311 2.65736 8.5635 2.45661C8.37389 2.25585 8.05743 2.24682 7.85668 2.43643L3.54135 6.51217L2.14332 5.19175C1.94256 5.00214 1.62611 5.01117 1.4365 5.21193C1.24689 5.41268 1.25592 5.72914 1.45668 5.91875L3.19803 7.56343C3.39073 7.74543 3.69197 7.74543 3.88467 7.56343L8.54332 3.16343Z" fill="#9747FF"/>
                  </svg>
                  <p>
                {item}
                  </p>
                </li>
            ))}
          </ul>
        </div>

    </div>
  )
}
const Pricing = () => {
  return (
    <div className='flex flex-col gap-5 '>
      <div className='flex flex-col items-center justify-center gap-3'>
        <h1 className='text-sm uppercase text-purple'>Pricing</h1>
        <p className='text-xl'>
          Find the right package for your needs </p>
          <div className='flex w-[222px] h-[72px] bg-black/10 rounded-lg px-[16px]  py-[12px]'>
          <button className='w-[96px] h-[48px] bg-pink rounded-lg'>Monthly</button>
          <button className='w-[96px] h-[48px]  rounded-lg'>Yearly</button>

          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-5 mt-[3em]   items-center'>
          {pricingData.map((item, idx) => (
            <PriceCard key={idx}
             {...item} 
             hasCover={idx === 2}

             />
          ))}

        </div>
      
    </div>
  )
}

export default Pricing
