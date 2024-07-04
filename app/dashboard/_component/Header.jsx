'use client'

import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import Link from 'next/link'

const Header = () => {
    const path = usePathname();

    useEffect(() => {
        console.log(path)
    }, [path]) // Add path as a dependency to re-run effect when path changes

    return (
        <div className='flex p-4 items-center justify-between bg-gray-900 shadow-sm w-full'>
            <Image src={'/FourthLogo.svg'} width={200} height={100} alt='logo' className="m-0 p-0" />

            <ul className='hidden md:flex gap-4 mr-40'>
                <li className={` text-white font-normal hover:text-white hover:font-bold transition-all cursor-pointer ${path === '/dashboard' && 'text-white font-bold'}`}>
                    <Link href="/dashboard">Dashboard</Link>
                </li>
                <li className={`text-white font-normal hover:text-white hover:font-bold transition-all cursor-pointer ${path === '/dashboard/question' && 'text-white font-bold'}`}>
                    <Link href="/dashboard/question">Questions</Link>
                </li>
                <li className={`text-white font-normal hover:text-white hover:font-bold transition-all cursor-pointer ${path === '/dashboard/upgrade' && 'text-white font-bold'}`}>
                    <Link href="/dashboard/upgrade">Upgrade</Link>
                </li>
            </ul>
            <UserButton/>
        </div>
    )
}

export default Header
