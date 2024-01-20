import React from 'react'
import { BsChatLeftText } from "react-icons/bs";
import DropdownMenuPage from './DropdownMenu';


const Navbar = () => {
    return (
        <div className='flex justify-evenly bg-slate-200 px-5 py-3 items-center h-12'>
            <div className='flex items-center gap-2'>
                <BsChatLeftText />
                <p>RealChat</p>
            </div>
            <div className='flex gap-4'>
                <p>Dashboard</p>
                <p>Requests</p>
                <p>Add Friends</p>
            </div>
            <div>
                <DropdownMenuPage></DropdownMenuPage>                
            </div>
        </div>
    )
}

export default Navbar