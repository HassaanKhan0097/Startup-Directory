import { auth } from '@/auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = async () => {
  const session = await auth();


  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
    
    <nav className='flex justify-between items-center'>
        <Link href="/">
            <Image src="/logo.png" alt='logo' width={144} height={30}></Image>
        </Link>

        <div className='flex items-center gap-5'>
          <Link href={"/startup/create"}>
          <span>Create</span>
          </Link>
            {
              session && session?.user ? (
                <Link href={"/auth"}>Signout</Link>
              ) : (
                <Link href={"/auth"}>Login</Link>
              )
            }
        </div>
    </nav>
    
    </header>
  )
}

export default Navbar