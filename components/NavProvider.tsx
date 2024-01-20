'use client'
import { usePathname } from 'next/navigation'
import React, { PropsWithChildren } from 'react'
import Navbar from './Navbar';

const NavProvider = ({children}:PropsWithChildren) => {
    const currentPath = usePathname().substring(1);
  return (
    <>
        {currentPath && <Navbar/>}
        {children}
    </>
  )
}

export default NavProvider