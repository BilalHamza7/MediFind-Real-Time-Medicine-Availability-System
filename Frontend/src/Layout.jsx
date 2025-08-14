import React from 'react'

import NavBar from './Components/NavBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className=''>
            <NavBar />

            <Outlet />
        </div>
    )
}

export default Layout