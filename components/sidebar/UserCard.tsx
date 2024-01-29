'use client'
import React from 'react'
import Image from 'next/image'
import axios from 'axios'
import { useRouter } from 'next/navigation'
interface Props {
    name: string | null,
    image: string,
    id:string
}

const UserCard = ({ name, image, id }: Props) => {
    const router = useRouter();

   const handleClick = async()=>{
        try {
            const conversation = await axios.post('/api/conversations', {
                userId:id,
                name:name!,
            })
            const response = await conversation.data
            router.push(`/conversations/${response.id}`)

        } catch (error) {
            console.log(error)
        }
   }

    const active = 'flex items-center gap-2 bg-slate-500 bg-opacity-40 p-2 rounded-lg w-full h-fit'
    const regular = 'p-2 flex items-center gap-2 hover:bg-slate-500 hover:bg-opacity-40 rounded-lg h-fit hover:cursor-pointer w-full'
    return (
        <div className={regular} onClick={handleClick}>
            <Image className='rounded-full' src={image} width={40} height={40} alt='?'></Image>
            <p>{name}</p>
        </div>
    )
}

export default UserCard