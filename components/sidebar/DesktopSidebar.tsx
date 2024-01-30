'use client'
import React from 'react'
import useRoutes from '@/app/hooks/useRoutes'
import DesktopItem from './DesktopItem'
import Profile from './Profile'
import { useSession } from 'next-auth/react'

const DesktopSidebar = () => {
  const {data:session} = useSession();
  const source = session?.user.image 
  const routes = useRoutes();
  return (
    <div className='flex bg-zinc-800 text-white h-screen flex-col justify-between py-3 border-r-[1px] w-[6%] border-zinc-600'>
        <div className='flex flex-col items-center w-full gap-3'>
          {
            routes.map((route) => {
              return (
                <DesktopItem key={route.label} onClick={route.onClick} icon={route.icon} href={route.href} active={route.active!} />
              )
            })
          }
        </div>
        <div className='flex flex-col items-center w-full'>
          <Profile source={source!} name={session?.user.name!}/>
        </div>
      
    </div>
  )
}

export default DesktopSidebar