
import { socket } from '@/socket';
import { format } from 'date-fns';
import { useSession } from 'next-auth/react';
import React, { useEffect, useRef, useState } from 'react'

interface Props {
  messages: ({ sender: { id: string; name: string | null; email: string | null; emailVerified: Date | null; image: string | null; conversationIds: string[]; }; } & { id: string; created_at: Date; body: string | null; conversationId: string; senderId: string; })[] | undefined;
}

const Body = ({ messages }: Props) => {
  const [bodyList, setBodyList] = useState<{message:string, sender:string}[]>([]) 
  const bottomRef = useRef<HTMLDivElement>(null);
  

  useEffect(() => {
    bottomRef?.current?.scrollIntoView();
  });
  useEffect(()=>{
    socket.on('receive_message', (data:{
      message:string,
      sender:string,
    })=>{
      console.log(data)
      // const {message, date, sender} = data;
      setBodyList(prev=>[...prev, data])
    })
    return () => {
      // socket.removeListener('receive_message');
      socket.off('receive_message');
      socket.removeAllListeners('receive_message');
    };
  }, [socket])
  // useEffect(()=>{
  //   setList(messages);
  // }, [messages])
  const [list, setList] = useState(messages);
  const {data:session} = useSession();

  
  return (
    <div className='h-[76%] pt-4 px-2 overflow-y-scroll'>
      {
        list?.map(message => {
          return (
            session?.user.email==message.sender.email?<div key={message.id} className='w-full justify-end flex h-fit my-4'><div className='flex flex-col items-end'><p className='font-light text-xs text-zinc-300 pb-1'>{format(new Date(message.created_at), 'p')}</p><span className='px-3 py-2 text-sm bg-sky-500 rounded-full'>{message.body}</span></div></div>:
          <div key={message.id} className='w-full justify-start flex h-fit my-2'><div className='flex flex-col items-start'><p className='font-light text-xs text-zinc-300 pb-1'>{format(new Date(message.created_at), 'p')}</p><span className='px-3 py-2 text-sm bg-sky-500 rounded-full'>{message.body}</span></div></div>
          )
        })
      }
      <div>
      {
        bodyList?.map(body => {
          return (
            session?.user.email==body.sender?<div className='w-full justify-end flex h-fit my-4'><div className='flex flex-col items-end'><p className='font-light text-xs text-zinc-300 pb-1'>{format(new Date(), 'p')}</p><span className='px-3 py-2 text-sm bg-sky-500 rounded-full'>{body.message}</span></div></div>:
          <div className='w-full justify-start flex h-fit my-2'><div className='flex flex-col items-start'><p className='font-light text-xs text-zinc-300 pb-1'>{format(new Date(), 'p')}</p><span className='px-3 py-2 text-sm bg-sky-500 rounded-full'>{body.message}</span></div></div>
          )
        })
      }
      </div>
      <div ref={bottomRef}></div>
      
    </div>
  )
}


export default Body