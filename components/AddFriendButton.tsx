'use client'
import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from './ui/button'
import toast from 'react-hot-toast'

const AddFriendButton = () => {
    
  return (
    <form className='flex flex-col gap-2 max-w-sm'>
        <label htmlFor='email' className="leading-7 [&:not(:first-child)]:mt-6">Add friend by E-mail</label>
        <div className='flex gap-4'>
        <Input type="email" placeholder="Email" className='w-full'/>
        <Button>Add</Button>
        </div>
        <p className='mt-1 text-sm text-red-600'></p>
    </form>
  )
}

export default AddFriendButton