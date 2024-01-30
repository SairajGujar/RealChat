import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useConversation from '@/app/hooks/useConversation'
import useOtherUser from '@/app/hooks/useOtherUser'

interface Props{
    data:({ users: { id: string; name: string | null; email: string | null; emailVerified: Date | null; image: string | null; conversationIds: string[]; }[]; } & { id: string; createdAt: Date; lastMessageAt: Date; name: string | null; userIds: string[]; })
}


const ChatCard = ({data}:Props) => {
    const renderData = useConversation()
    const otherUser = useOtherUser(data.users)

    const active = 'flex items-center gap-2 bg-slate-500 bg-opacity-40 p-2 rounded-lg w-full h-fit'
    const regular = 'p-2 flex items-center gap-2 hover:bg-slate-500 hover:bg-opacity-40 rounded-lg h-fit hover:cursor-pointer w-full'
    return (
        <Link href={`/conversations/${data.id}`} className={renderData.conversationId===data.id?active:regular} >
            <Image className='rounded-full' src={otherUser.image!} width={40} height={40} alt='?'></Image>
            <p>{otherUser.name}</p>
        </Link>
    )
}

export default ChatCard