'use client';


import Link from 'next/link'
import React, { useState } from 'react'
import Button from './UI/Button'
import logo from '@/assets/logo.png';
import Image from 'next/image';
import { usePathname } from 'next/navigation';


const Header = () => {
    const navLinks = [
        {title:"Home", href:'#home'},
        {title:"About", href:'#about'},
        {title:"Features", href:'#features'},
        {title:"Pricing", href:'#pricing'},
        {title:"Blog", href:'#blog'},
    ]
    const pathname = usePathname();
    const [showNav, setShowNav] = useState('');

  return (
    <div className='flex  w-full px-3 py-2 bg-white relative '>
      <div className='flex w-full max-w-6xl mx-auto justify-between items-center'>

      <Image src={logo} alt='Bloom' width='165' height='56' />

      <nav className='hidden md:flex gap-5'>
        {navLinks.map((link, index) => (
          <Link key={index} href={link.href} className={`${pathname === link.href ? 'text-pink border-b-2' : 'text-black/70 border-b-0'} font-medium text-black/70 hover:text-pink transition-all hover:border-b-2 rounded-b-md border-pink-500`}>
            {link.title}
          </Link>
        ))}
      </nav>

      <Button className="hidden md:block" title='Download Bloom' />
      <button 
      onClick={() => {
        setShowNav(!showNav)
      }}
      className='md:hidden'>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 20H29M11 14H29M11 26H29" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      </div>

      {showNav && (
        <div className='absolute w-full'>
           <nav className='flex flex-col gap-5 p-4 transition-all bg-white z-20 w-full mt-[2em]'>
            {navLinks.map((link, index) => (
              <Link 
              onClick={(e) => {
                setShowNav(false)
              }}
              key={index} href={link.href} className={`${pathname === link.href ? 'text-pink  border-b-2' : 'text-black/70 border-b-0'} font-medium text-black/70 hover:text-pink transition-all hover:ml-3 rounded-b-md border-pink-500`}>
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}

export default Header
