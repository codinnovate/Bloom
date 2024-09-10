import Link from 'next/link'
import React from 'react'
import Button from './UI/Button'
import logo from '@/assets/logo.png';
import Image from 'next/image';


const Header = () => {
    const navLinks = [
        {title:"Home", href:'/'},
        {title:"About", href:'/'},
        {title:"Features", href:'/'},
        {title:"Pricing", href:'/'},
        {title:"Blog", href:'/'},
    ]
  return (
    <div className='flex w-full p-3 py-5 bg-white justify-between items-center'>
      <Image src={logo} alt='Bloom' width='165' height='56' />

      <nav className='hidden md:flex'>
        {navLinks.map((link, index) => (
          <Link key={index} href={link.href} className='p-2 font-semibold text-black/70 hover:text-pink-500 transition-all hover:border-b-4 rounded-b-md border-pink-500'>
            {link.title}
          </Link>
        ))}
      </nav>

      <Button className="hidden md:block" title='Download Bloom' />
      <button className='md:hidden'>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 20H29M11 14H29M11 26H29" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  )
}

export default Header
