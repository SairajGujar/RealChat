import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Props{
  image:string,
  name:string,
  status:string
}

const ProfileBar = ({image, name, status}:Props) => {
  return (
    <div className='min-h-[10%] flex'>
        <div>
        <Avatar>
            <AvatarImage src={image} />
            <AvatarFallback>?</AvatarFallback>
        </Avatar>
        </div>
        <div>
          <p>{name}</p>
          <span>{status}</span>
        </div>
        <div>
          <p>...</p>
        </div>
    </div>
  )
}

export default ProfileBar