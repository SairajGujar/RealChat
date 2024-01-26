import React from 'react'
import Body from '@/components/chat/Body'
import ChatInput from '@/components/chat/ChatInput'
import ProfileBar from '@/components/chat/ProfileBar'
const page = () => {
  return (
    <div className='h-screen bg-zinc-800 text-white w-2/3 overflow-hidden'>
        <ProfileBar image='' name='sairaj' status='offline'></ProfileBar>
        <div className='border-b-[1px] border-white'></div>
        <Body></Body>
        <div className='border-b-[1px]'></div>
        <ChatInput></ChatInput>
    </div>
  )
}

export default page