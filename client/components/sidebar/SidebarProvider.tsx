import React, { PropsWithChildren } from 'react'
import DesktopSidebar from './DesktopSidebar'

const SidebarProvider = ({children}:PropsWithChildren) => {
  return (
    <div className='flex  bg-black'>
        <DesktopSidebar></DesktopSidebar>
        {children}
    </div>
  )
}

export default SidebarProvider