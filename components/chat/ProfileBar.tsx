import React from 'react'
import Image from 'next/image'
import { HiOutlineMenuAlt3 } from "react-icons/hi";

interface Props {
  image: string|null,
  name: string|null,
  status: string
}

const ProfileBar = ({ image, name, status }: Props) => {
  return (
    <div className='min-h-[12%] flex w-full bg-zinc-800 justify-between items-center'>
      <div className='flex gap-3 ml-4 items-center'>
        <div>
          <Image className='rounded-full' src='https://github.com/shadcn.png' width={40} height={40} alt='?'></Image>
        </div>
          <p className='text-lg font-medium flex flex-col'>
            {name}
            <span className='text-sm font-light text-zinc-400'>{status}</span>
          </p>
      </div>
      <div className='mr-4 text-sky-400 hover:bg-slate-600 hover:bg-opacity-60 hover:rounded-full p-1 hover:cursor-pointer'>
      <HiOutlineMenuAlt3 size={25}/>
      </div>
    </div>
  )
}

export default ProfileBar