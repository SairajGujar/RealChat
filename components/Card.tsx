import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const Card = () => {
    return (
        <div className='flex items-center gap-2'>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>Sairaj Gujar</p>
        </div>
    )
}

export default Card