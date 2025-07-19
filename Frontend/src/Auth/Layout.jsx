import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className="bg-blue-300 w-full px-5 sm:px-10 py-5">
                <img src="wait" alt="LOGO" />
            </div>

            {/* pages within the parent route, where this pharmacist layout is applied, are opened in the outlet below */}
            <Outlet />
        </div>
    )
}

export default Layout