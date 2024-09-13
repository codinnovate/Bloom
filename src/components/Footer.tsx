import Image from 'next/image'
import React from 'react'
import footerlogo from '@/assets/footerlogo.png';

const Footer = () => {
  return (
    <footer className='w-full flex flex-col md:flex-row justify-between mt-[3em] p-2 '>
      <div className='flex flex-col'>
        <Image src={footerlogo} width='184' height='68' alt='Bloom Logo' />
      </div>
      <div className='flex flex-col'>
        <h2 className='text-xl font-medium'>Quick Links</h2>
        <ul className='text-grey'>
          <p>Home</p>
          <p>About</p>
          <p>Features</p>
          <p>Pricing</p>
          <p>Testimonials</p>
          <p>Blog</p>
        </ul>
      </div>
      <div className='flex flex-col'>
        <h2 className='text-xl font-medium'>Support</h2>
        <ul className='text-grey'>
          <p>Testimonials</p>
          <p>Help centre</p>
          <p>FAQS</p>
        </ul>


      </div>
      <div className='flex flex-col'>
        <h2 className='text-xl font-medium'>Contact us</h2>
        <a className='text-pink'>sayhi@bloomothers.com</a>
      </div>
      
    </footer>
  )
}

export default Footer
