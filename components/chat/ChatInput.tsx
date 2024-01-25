import React from 'react'
import { Input } from '../ui/input'
import { IoMdSend } from "react-icons/io";


const ChatInput = () => {
  return (
    <div className='flex mt-1 justify-between'>
      <Input className='w-[90%]'/>
      <div className='hover:bg-slate-500 hover:bg-opacity-60 hover:rounded-full'><IoMdSend size='30px'/></div>
    </div>
  )
}

export default ChatInput