import Link from 'next/link';
import React from 'react'

interface Props {
    icon: any,
    active: boolean,
    href: string,
    onClick?:(()=>void),
}

const DesktopItem = ({ icon: Icon, active, href, onClick }: Props) => {
    const handleClick = ()=>{
        if(onClick){
            onClick();
        }
    }
    const activeClassname = 'bg-slate-500 bg-opacity-50 p-2 rounded-lg cursor-pointer';
    const regular = 'hover:bg-slate-500 hover:bg-opacity-50 p-2 hover:rounded-lg hover:cursor-pointer'
    return (
        <li className='list-none' onClick={handleClick}>
            <Link href={href}><div className={active ? activeClassname : regular}><Icon /></div></Link>
        </li>
    )
}

export default DesktopItem