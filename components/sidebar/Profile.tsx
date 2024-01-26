import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Profile =  ({source}:{source:string}) => {
    

    return (
        <Avatar>
            <AvatarImage src={source} />
            <AvatarFallback>?</AvatarFallback>
        </Avatar>
    )
}

export default Profile