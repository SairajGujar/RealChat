import { getConversationById } from '@/app/actions/getConversationById'
import getMessages from '@/app/actions/getMessages'
import ChatWindow from '@/components/chat/ChatWindow'
import React from 'react'

interface Props{
  params:{id:string}
}

const page = async({params:{id}}:Props) => {
  const conversation = await getConversationById(id)
  const messages =  await getMessages(conversation?.id)
  
  return (
    <ChatWindow conversation={conversation} messages={messages}/>
  )
}

export default page