import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import logo from '../assets/Logo.png'

const AuthLayout = () => {

    const navigate = useNavigate();

    return (
        <div className='flex flex-col items-center'>
            <div className="flex bg-blue-300 w-full px-6 py-4">
                <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate('/home')}>
                    <img src={logo} alt="" className='h-10' />
                    <p className="text-xl font-bold text-blue-600">MediCore</p>
                </div>
            </div>
            {/* pages within the parent route, where this pharmacist layout is applied, are opened in the outlet below */}
            <Outlet />
        </div>
    )
}

export default AuthLayout