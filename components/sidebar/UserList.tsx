import React from 'react'
import UserCard from './UserCard'
import Link from 'next/link';

interface Props{
    users:{ id: string; name: string | null; email: string | null; emailVerified: Date | null; image: string | null; conversationIds: string[]; }[]
    name:string,
}

const UserList = ({users, name}:Props) => {
    return (
        <div className='flex bg-zinc-800 text-white w-[29%]'>
            <div className='flex flex-col w-full m-3'>
            <p className='text-2xl font-bold mb-2'>{name}</p>
            {
                users.map((user)=>{
                    return (
                        <UserCard id={user.id} name={user.name} key={user.id} image={user.image!} />
                    )
                })
            }
            </div>
            <div className='border-r-[1px] border-zinc-600'></div>
        </div>
    )
}

export default UserList