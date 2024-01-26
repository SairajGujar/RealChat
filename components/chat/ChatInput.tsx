import React from 'react'
import { Input } from '../ui/input'
import { IoMdSend } from "react-icons/io";


const ChatInput = () => {
  return (
    <div className='flex items-center h-[12%]'>
      <form action="" className='w-full mx-2 flex items-center gap-2'>
      <Input />
      <span className='flex items-center rounded-full h-8 w-9 hover:bg-opacity-70 hover:cursor-pointer bg-sky-400 justify-center'><IoMdSend/></span>
      </form>
    </div>
  )
}

export default ChatInput