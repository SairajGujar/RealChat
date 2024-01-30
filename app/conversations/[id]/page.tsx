import { getConversationById } from '@/app/actions/getConversationById'
import ChatWindow from '@/components/chat/ChatWindow'
import React from 'react'

interface Props{
  params:{id:string}
}

const page = async({params:{id}}:Props) => {
  const conversation = await getConversationById(id)
  return (
    <ChatWindow conversation={conversation}/>
  )
}

export default page