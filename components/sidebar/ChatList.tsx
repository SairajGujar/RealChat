'use client'
import React, { useState } from 'react'
import ChatCard from './ChatCard'

interface Props{
    conversations:({ users: { id: string; name: string | null; email: string | null; emailVerified: Date | null; image: string | null;  conversationIds: string[]; }[] } & { id: string; createdAt: Date; lastMessageAt: Date; name: string | null; userIds: string[]; })[]
}
const ChatList = ({conversations}:Props) => {
    const [initialItems, setItems] = useState(conversations)
    
    return (
        <div className='flex bg-zinc-800 text-white w-[29%]'>
            <div className='flex flex-col w-full m-3 gap-1'>
                <p className='text-2xl font-bold mb-2'>Messages</p>
                {
                    initialItems.map((item) => {
                        return (
                            <ChatCard key={item.id} data={item} />
                        )
                    })
                }
            </div>
            <div className='border-r-[1px] border-zinc-600'></div>
        </div>
    )
}

export default ChatList