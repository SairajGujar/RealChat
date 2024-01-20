import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Props {
    name: string,
    image: string
}

const Card = ({ name, image }: Props) => {
    return (
        <div>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                {name}
            </p>
        </div>
    )
}

export default Card