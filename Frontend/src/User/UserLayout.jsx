import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

import logo from '../assets/Logo.png'

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
          <li onClick={() => navigate('/user/home')} className='hover:text-blue-600 hover:cursor-pointer transition'>Home</li>
          <li onClick={() => navigate('/user/products')} className='hover:text-blue-600 hover:cursor-pointer transition'>Products</li>
          <li onClick={() => navigate('/user/about')} className='hover:text-blue-600 hover:cursor-pointer'>About</li>
          <li onClick={() => navigate('/user/contact')} className='hover:text-blue-600 hover:cursor-pointer'>Contact</li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}

export default UserLayout