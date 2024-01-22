import React, { PropsWithChildren } from 'react'
import DesktopSidebar from './DesktopSidebar'

const SidebarProvider = ({children}:PropsWithChildren) => {
  return (
    <div className='flex'>
        <DesktopSidebar></DesktopSidebar>
        {children}
    </div>
  )
}

export default SidebarProvider