'use client'
import React, { useEffect } from 'react'
import Body from '@/components/chat/Body'
import ChatInput from '@/components/chat/ChatInput'
import ProfileBar from '@/components/chat/ProfileBar'
import useOtherUser from '@/app/hooks/useOtherUser'
import { Message } from '@prisma/client'
import { socket } from '@/socket'

interface Props{
  conversation:({ users: { id: string; name: string | null; email: string | null; emailVerified: Date | null; image: string | null;  conversationIds: string[]; }[] } & { id: string; createdAt: Date; lastMessageAt: Date; name: string | null; userIds: string[]; }) | null
  messages:({ sender: { id: string; name: string | null; email: string | null; emailVerified: Date | null; image: string | null; conversationIds: string[]; }; } & { id: string; created_at: Date; body: string | null; conversationId: string; senderId: string; })[] | undefined
}

const ChatWindow = ({conversation, messages}:Props) => {
  // useEffect(()=>{
  socket.emit('join_room', conversation?.id)
  const otherUser = useOtherUser(conversation!.users)
  return (
    <div className='h-screen bg-zinc-800 text-white w-2/3 overflow-hidden'>
        <ProfileBar image={otherUser.image} name={otherUser.name} status='offline'></ProfileBar>
        <div className='border-b-[1px] border-zinc-600'></div>
        <Body messages={messages}/>
        <div className='border-b-[1px] border-zinc-600'></div>
        <ChatInput conversationId={conversation?.id}></ChatInput>
    </div>
  )
}

export default ChatWindow