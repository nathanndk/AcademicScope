'use client'

import { IconLogout } from '@tabler/icons-react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'

import NavLinks from '@/components/layouts/nav-links'
import { Button } from '@/components/ui/button'

export default function SideNav() {
  const handleLogOut = () => {
    signOut()
  }

  return (
    <div className='flex h-full flex-col px-3 py-2 md:px-2'>
      <Link className='mb-2 flex h1-15 items-end justify-start rounded-md bg-primary p-4 md:h-20' href='/'>
        <div className='w-32 text-white md:w-40'>dashboard</div>
      </Link>
      <div className='flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2'>
        <NavLinks/>
        <div className='hidden h-auto w-full grow rounded-md bg-gray-50 md:block' />
        <form>
          <Button
            className='flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-orange-100 hover:text-primary md:flex-none md:justify-start md:p-2 md:px-3 w-full text-stone-950'
            onClick={handleLogOut}
          >
            <IconLogout className='w-6' />
            <div className='hidden md:flex w-full'>Sign Out</div>
          </Button>
        </form>
      </div>
    </div>
  )
}
