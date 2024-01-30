'use client'
import React from 'react'
import Body from '@/components/chat/Body'
import ChatInput from '@/components/chat/ChatInput'
import ProfileBar from '@/components/chat/ProfileBar'
import useOtherUser from '@/app/hooks/useOtherUser'

interface Props{
  conversation:({ users: { id: string; name: string | null; email: string | null; emailVerified: Date | null; image: string | null;  conversationIds: string[]; }[] } & { id: string; createdAt: Date; lastMessageAt: Date; name: string | null; userIds: string[]; }) | null
}

const ChatWindow = ({conversation}:Props) => {
  const otherUser = useOtherUser(conversation!.users)
  return (
    <div className='h-screen bg-zinc-800 text-white w-2/3 overflow-hidden'>
        <ProfileBar image={otherUser.image} name={otherUser.name} status='offline'></ProfileBar>
        <div className='border-b-[1px] border-zinc-600'></div>
        <Body></Body>
        <div className='border-b-[1px] border-zinc-600'></div>
        <ChatInput conversationId={conversation?.id}></ChatInput>
    </div>
  )
}

export default ChatWindow