import React from 'react'
import playstore from '@/assets/playstore.png';
import appstore from '@/assets/appstore.png';
import Image from 'next/image';
import downloadImage from '@/assets/download.png';

const Download = () => {
  return (
    <div className='rounded bg-[#FFA9B44D] max-w-[1281px] w-full min-h-[477px] p-[2em] flex flex-col md:flex-row justify-between items-center gap-5 mt-[5em]'>
      <div className='flex flex-col gap-2  '>
        <h1 className='text-2xl md:text-3xl font-bold'>Start Blooming: Your Pregnancy & Motherhood Companion</h1>
        <p>Download Bloom and get expert advice, never miss your checkups and more right at your fingertips</p>
        <div className='flex flex-row gap-[1em] mt-[2em]'>
          <Image src={playstore} alt='playstore' width='189' height='56' className=''/>
          <Image src={appstore} alt='appstore' width='189' height='56' />
        
        </div>
      </div>
      <div className='flex justify-center  mt-[2em] md:mt-0'>
        <Image src={downloadImage} width='342' height='342' className='object-contain' alt='download' />
      </div>
    </div>
  )
}

export default Download
