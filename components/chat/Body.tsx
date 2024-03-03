import { Message } from '@prisma/client'
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'

interface Props {
  messages: Message[] & {
    id: string;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    image: string | null;
    conversationIds: string[];
}| undefined;
}

const Body = ({ messages }: Props) => {
  useEffect(()=>{
    setList(messages);
  }, [messages])
  const [list, setList] = useState(messages);
  const {data:session} = useSession();
  // console.log(session?.user.email)
  return (
    <div className='min-h-[76%] pt-4 px-2'>
      {
        list?.map(message => {
          return (
            session?.user.email==message.senderId?<div key={message.id} className='w-full justify-start flex h-fit my-2'><span className='px-3 py-1 bg-sky-500 rounded-full'>{message.body}</span></div>:
          <div key={message.id} className='w-full justify-end flex h-fit my-2'><span className='px-3 py-1 bg-sky-500 rounded-full'>{message.body}</span></div>
          )
        })
      }
    </div>
  )
}


export default Body