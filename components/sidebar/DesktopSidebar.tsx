import React from 'react'
import { RiLogoutBoxRLine } from "react-icons/ri";
import Card from '../Card';
import { getUsers } from '@/app/actions/getUsers';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getServerSession } from 'next-auth';
import authOptions from '@/lib/authOptions';

const DesktopSidebar = async () => {
  const session = await getServerSession(authOptions)
  const source = session?.user.image
  const users = await getUsers()
  return (
    <div className='flex flex-col h-screen bg-slate-200 w-1/4'>
      <div className='flex justify-between p-2 border-b-2 items-center border-black m-1'>
        <Avatar>
          <AvatarImage src={source!} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <RiLogoutBoxRLine />
      </div>
      <div className='flex flex-col gap-1 mt-4'>
        {
          users.map((user) => {
            return (<Card key={user.id} name={user.name!} image={user.image!} />)
          })
        }

      </div>
    </div>
  )
}

export default DesktopSidebar