'use client'

import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const Header = () => {

    const path=usePathname();
    useEffect(() => {
        console.log(path)
    }, [])

  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
        <Image src={'/logo.svg'} width={160} height={100} alt='logo'></Image>
        <ul className='hidden md:flex gap-4'>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard'&&'text-primary font-bold'}`}>Dashboard</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/question'&&'text-primary font-bold'}`}>Questions</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/upgrade'&&'text-primary font-bold'}`}>Upgrade</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/how'&&'text-primary font-bold'}`}>How it works</li>
        </ul>
        <UserButton/>
    </div>
  )
}

export default Header