import { LogOut, MessageCircleMore, Users } from 'lucide-react'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Card from '../Card'

const DesktopSidebar = async () => {
  return (
    <div className='flex w-1/4 bg-zinc-800 text-white'>
      <div className='w-1/4  flex flex-col justify-between my-4'>
        <div className='flex flex-col items-center w-full gap-5'>
          <MessageCircleMore />
          <Users />
          <div className='hover:bg-slate-300 hover:bg-opacity-50 p-2 hover:rounded-lg hover:cursor-pointer'><LogOut/></div>
        </div>
        <div className='flex flex-col items-center w-full'>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className='border-r-[1px]'></div>
      <div className='w-3/4 ml-4 mt-4'>
        <p className='text-2xl font-bold'>People</p>
        <div className='mt-4'>
        <Card></Card>
        </div>
      </div>
    </div>
  )
}

export default DesktopSidebar