'use client'
import React from 'react'
import { Input } from '../ui/input'
import { IoMdSend } from "react-icons/io";
import {useForm} from 'react-hook-form'
import axios from 'axios'
import {socket} from '../../socket'
import { useSession } from 'next-auth/react';

type FormData = {
  message: string
}

const ChatInput = ({conversationId}:{conversationId:string|undefined}) => {
  const {data:session} = useSession()
  async function submitHandler(data:FormData){
    socket.emit('send_message', {
      message:data,
      room_name:conversationId,
      dateStamp: Date.now(),
      sender:session?.user.email
    })
    try {
      
      const response = await axios.post('/api/messages', {
        ...data,
        conversationId
      })
      console.log(response)
    } catch (error) {
    console.log(error);
    }
  }
  const {register, handleSubmit,formState:{errors}} = useForm<FormData>()
  return (
    <div className='flex items-center h-[12%]'>
      <form className='w-full mx-2 flex items-center gap-2' onSubmit={handleSubmit(submitHandler)}>
      <Input required {...register('message')}  placeholder='Write a Message...'/>
      <button className='flex items-center rounded-full h-8 w-9 hover:bg-opacity-70 hover:cursor-pointer bg-sky-400 justify-center' type='submit'><IoMdSend/></button>
      </form>
    </div>
  )
}

export default ChatInput