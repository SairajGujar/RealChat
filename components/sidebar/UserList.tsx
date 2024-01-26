import React from 'react'
import UserCard from './UserCard'

const UserList = () => {
    return (
        <div className='flex bg-zinc-800 text-white w-[29%]'>
            <div className='flex flex-col w-full m-3'>
            <p className='text-2xl font-bold mb-2'>People</p>
            <UserCard></UserCard>
            </div>
            <div className='border-r-[1px]'></div>
        </div>
    )
}

export default UserList