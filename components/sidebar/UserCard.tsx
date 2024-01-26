'use client'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import useConversation from '@/app/hooks/useConversation'

const UserCard = () => {
    const conversation = useConversation()
    
    const active = 'flex items-center gap-2 bg-slate-500 bg-opacity-40 p-2 rounded-lg w-full h-fit'
    const regular = 'p-2 flex items-center gap-2 hover:bg-slate-500 hover:bg-opacity-40 rounded-lg h-fit hover:cursor-pointer w-full'
    return (
        <div className={conversation.isOpen?active:regular}>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>Sairaj Gujar</p>
        </div>
    )
}

export default UserCard