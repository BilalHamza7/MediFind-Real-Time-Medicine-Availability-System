import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

import logo from '../assets/Logo.png';

const UserLayout = () => {

  const navigate = useNavigate();

  return (
    <div className="">
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <div className='flex flex-row items-center space-x-4'>
          <img src={logo} alt="" className='h-10' onClick={() => navigate('/user/home')} />
          <h1 className="text-xl font-bold text-blue-600">MediCore</h1>
        </div>
        <ul className='flex space-x-9 text-gray-700 font-bold'>
          <li onClick={() => navigate('/user/dashboard')} className='hover:text-blue-600 hover:cursor-pointer transition'>Dashboard</li>
          <li onClick={() => navigate('/user/shop')} className='hover:text-blue-600 hover:cursor-pointer transition'>Shop</li>
          <li onClick={() => navigate('/user/myOrders')} className='hover:text-blue-600 hover:cursor-pointer'>My Orders</li>
          <li onClick={() => navigate('/user/profile')} className='hover:text-blue-600 hover:cursor-pointer'>Profile</li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}

export default UserLayout