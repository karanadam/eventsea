import React from 'react'
import Sidebar from '../Dashboard/Sidebar'

export const DashboardLayout = ({children}) => {
  return (
    <div className="flex flex-row items-start justify-between w-full">
        <Sidebar/>
        <div className='w-full px-32 py-10 bg-slate-50'>
        {children}
        </div>
        
    </div>
  )
}
