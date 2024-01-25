import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getCurrentSession } from '@/app/actions/getCurrentSession'


const Profile =  () => {
    

    return (
        <Avatar>
            <AvatarImage src='' />
            <AvatarFallback>?</AvatarFallback>
        </Avatar>
    )
}

export default Profile