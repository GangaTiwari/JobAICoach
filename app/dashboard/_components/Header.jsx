"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import Link from'next/link'

export const Header = () => {
    const path=usePathname()
    useEffect(()=>{
        console.log(path);
    })
  return (
    
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
        <Link href='/'><div className='flex p-4 items-center justify-between cursor-pointer' ><Image src={'/logo.svg'} alt='logo' width={160} height={100}  style={{ width: "auto", height: "auto" }}   />
        <h1 className='font-bold text-lg'>JobAICoach</h1>
        </div>
        </Link>
        <ul className='hidden md:flex gap-6'>
           <Link href='/dashboard'> <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard' && 'text-primary font-bold'}`}>Dashboard</li></Link>
            <Link href='/Question'><li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/Questions' && 'text-primary font-bold'}`}>Questions</li></Link>
            <Link href='/Upgrade'><li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/upgrade' && 'text-primary font-bold'}`}>Upgrade</li></Link>
           <Link href='/'> <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/how' && 'text-primary font-bold'}`}>How its works?</li> </Link>
        </ul>
        <UserButton/>
    </div>
  )
}
