'use client'
import React from 'react'
import { BsChatLeftText } from "react-icons/bs";
import DropdownMenuPage from './DropdownMenu';
import { useSession } from 'next-auth/react';
import { Button } from './ui/button';
import { Skeleton } from "@/components/ui/skeleton"
import Link from 'next/link';


const Navbar = () => {
    const {status, data:session} = useSession()
    return (
        <div className='flex justify-evenly bg-slate-200 px-5 py-3 items-center h-12'>
            <div className='flex items-center gap-2'>
                <BsChatLeftText />
                <p>RealChat</p>
            </div>
            <div className='flex gap-4'>
                <p>Dashboard</p>
                <p>Requests</p>
            </div>
            <div>
                {status==='authenticated' && <DropdownMenuPage></DropdownMenuPage>}
                {status==='unauthenticated' && <Button><Link href='/api/auth/signin'>Login</Link></Button>}
                
            </div>
        </div>
    )
}

export default Navbar