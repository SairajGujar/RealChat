import React, { useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useConversation from '@/app/hooks/useConversation'
import useOtherUser from '@/app/hooks/useOtherUser'
import {format} from 'date-fns'

interface Props{
    data:({ users: { id: string; name: string | null; email: string | null; emailVerified: Date | null; image: string | null;  conversationIds: string[]; }[] } & {messages: {
        id: string;
        created_at: Date;
        body: string | null;
        conversationId: string;
        senderId: string;
    }[];} & { id: string; createdAt: Date; lastMessageAt: Date; name: string | null; userIds: string[]; })
}


const ChatCard = ({data}:Props) => {
    const renderData = useConversation()
    const otherUser = useOtherUser(data.users)
    const lastMessage = useMemo(()=>{
        const messages = data.messages || [];
        const lastMessage = messages[messages.length - 1]
        return lastMessage;
    }, [data.messages])

    const lastMessageText = useMemo(()=>{
        if(lastMessage?.body){
            return lastMessage.body
        }
        return 'you started a conversation'
    }, [lastMessage])

    const active = 'flex  items-center gap-3 bg-slate-500 bg-opacity-40 p-2 rounded-lg w-full h-fit'
    const regular = 'p-2 flex  items-center gap-3 hover:bg-slate-500 hover:bg-opacity-40 rounded-lg h-fit hover:cursor-pointer w-full'
    return (
        <Link href={`/conversations/${data.id}`} className={renderData.conversationId===data.id?active:regular} >
            <Image className='rounded-full' src={otherUser.image!} width={40} height={40} alt='?'></Image>
            <div className='flex flex-col'>
            <p className='font-bold'>{otherUser.name}</p>
            
            <p className={lastMessage?.body?`text-gray-400 font-light`:`text-white font-light`}>{lastMessageText}</p>
            </div>
            {
                lastMessage?(
                    <p className='text-sm font-light'>{format(new Date(lastMessage.created_at), 'p')}</p>
                ):null
            }
        </Link>
    )
}

export default ChatCard