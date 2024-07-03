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
        <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
            <Image src={'/logo.svg'} width={160} height={100} alt='logo'></Image>
            <ul className='hidden md:flex gap-4'>
                <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard' && 'text-primary font-bold'}`}>
                    <Link href="/dashboard">Dashboard</Link>
                </li>
                <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard/question' && 'text-primary font-bold'}`}>
                    <Link href="/dashboard/question">Questions</Link>
                </li>
                <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard/upgrade' && 'text-primary font-bold'}`}>
                    <Link href="/dashboard/upgrade">Upgrade</Link>
                </li>
                <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard/how' && 'text-primary font-bold'}`}>
                    <Link href="/dashboard/how">How it works</Link>
                </li>
            </ul>
            <UserButton/>
        </div>
    )
}

export default Header
