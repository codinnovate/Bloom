import React from 'react'
import Button from './UI/Button'
import Image from 'next/image';
import avatar from '@/assets/avatar.png';
import pregnantwoman from '@/assets/pregwoman.png';
import newborn from '@/assets/newborn.png';



const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row w-full justify-between items-center gap-[3em]'>
        <div className='w-full  flex flex-col gap-3'>
            <h1 className='text-2xl md:text-5xl font-semibold font-murecho text-grey'>Empower your journey of motherhood with <span className='text-purple font-bold'>Bloom</span></h1>
            <h2 className='text-[24px] text-grey'>Your one-stop support system for information and connection for every step of your pregnancy, and baby care</h2>
            <Button
             className=''
              title="Get Started for Free" />
            <div className='flex flex-col  gap-2'>
                <h2>Trusted by 1K+ mothers</h2>
                <div className='flex items-center gap-2'>
                <Image alt='avatar' src={avatar} width='78' height='24' />
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.84594 2.30078C7.37765 1.4554 8.62231 1.4554 9.15402 2.30078L10.4399 4.34528C10.627 4.64272 10.9242 4.85617 11.2682 4.94014L13.6325 5.51731C14.6102 5.75596 14.9948 6.92613 14.3458 7.68726L12.7762 9.52799C12.5478 9.79579 12.4343 10.1412 12.4598 10.4905L12.6351 12.8917C12.7076 13.8846 11.7007 14.6078 10.7679 14.2328L8.51187 13.3259C8.18366 13.194 7.8163 13.194 7.48809 13.3259L5.2321 14.2328C4.29927 14.6078 3.29232 13.8846 3.36482 12.8917L3.54016 10.4905C3.56566 10.1412 3.45215 9.79579 3.22379 9.52799L1.65417 7.68726C1.00515 6.92613 1.38977 5.75596 2.36741 5.51731L4.73177 4.94014C5.07574 4.85617 5.37294 4.64272 5.56002 4.34528L6.84594 2.30078Z" fill="#FFD600"/>
                </svg>
                </div>
            </div>
        </div>

        <div className='flex min-w-[46%] gap-5'>
            <Image className='max-h-[459px]' src={pregnantwoman} width='260' height='459' alt='pregnant woman'/>
            <Image className='mt-[40px] h-[479px]' src={newborn} width='260' height='479'  alt='new born baby'/>
        </div>
      
    </div>
  )
}

export default Hero
