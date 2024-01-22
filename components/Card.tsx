import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Props {
    name: string,
    image: string
}

const Card = ({ name, image }: Props) => {
    return (
        <div className='flex gap-4 w-full items-center p-2 m-1 rounded-xl hover:bg-opacity-60 hover:bg-slate-50 hover:cursor-pointer'>
            <Avatar>
                <AvatarImage src={image} />
                <AvatarFallback>?</AvatarFallback>
            </Avatar>
            <p className="leading-7">
                {name}
            </p>
        </div>
    )
}

export default Card