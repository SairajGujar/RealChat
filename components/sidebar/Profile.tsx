import React from 'react'
import Image from 'next/image'


const Profile =  ({source}:{source:string}) => {
    

    return (
        <Image className='rounded-full' src={source} width={40} height={40} alt='?'></Image>

    )
}

export default Profile