'use client'
import React from 'react'
import Card from './UserCard'
import useRoutes from '@/app/hooks/useRoutes'
import DesktopItem from './DesktopItem'
import Profile from './Profile'

const DesktopSidebar = () => {
  const routes = useRoutes();
  return (
    <div className='flex w-1/3 bg-zinc-800 text-white h-screen'>
      <div className='w-1/5  flex flex-col justify-between my-4'>
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
          <Profile/>
        </div>
      </div>
      <div className='border-r-[1px]'></div>
      <div className='w-4/5 mx-3 mt-4'>
        <p className='text-2xl font-bold'>People</p>
        <div className='mt-4'>
          <Card></Card>
        </div>
      </div>
      <div className='border-r-[1px]'></div>
    </div>
  )
}

export default DesktopSidebar