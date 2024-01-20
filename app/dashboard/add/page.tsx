import AddFriendButton from '@/components/AddFriendButton'
import React from 'react'

const AddFriendsPage = () => {
    return (
        <div className='flex flex-col gap-4'>
            <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                Add a friend
            </h1>
            <AddFriendButton />
        </div>
    )
}

export default AddFriendsPage