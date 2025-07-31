import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/Logo.png'
const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsLoggedIn(!!token)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLoggedIn(false)
    navigate('/auth/userLogin')
  }

  const handleLogin = () => {
    navigate('/auth/userLogin')
  }

  const handleBeSeller = () => {
    navigate('/auth/pharmacistRegistration') // You can change this path to your actual seller route
  }

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className='flex flex-row items-center space-x-4'>
        <img src={logo} alt="" className='h-10' onClick={()=>navigate('/')} />
        <p className="text-xl font-bold text-blue-600">MediCore</p>
      </div>
      <ul className='flex space-x-9 text-gray-700 font-bold'>
        <li onClick={()=> navigate ('/home')} className='hover:text-blue-600 hover:cursor-pointer transition'>Home</li>
        <li onClick={() => navigate('/about')} className='hover:text-blue-600 hover:cursor-pointer'>About</li>
        <li onClick={() => navigate('/contact')} className='hover:text-blue-600 hover:cursor-pointer'>Contact</li>
        <li onClick={() => navigate('/products')} className='hover:text-blue-600 hover:cursor-pointer'>Buy Medicines</li>
      </ul>
      <div className="space-x-4">
        {!isLoggedIn ? (
          <>
            <button
              onClick={handleLogin}
              className="text-blue-600 border border-blue-600 px-4 py-2 w-30 rounded hover:bg-blue-600 hover:text-white transition"
            >
              Login
            </button>
            <button
              onClick={handleBeSeller}
              className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-200 hover:text-black w-30 transition"
            >
              Be a Seller
            </button>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="text-white bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Sign Out
          </button>
        )}
      </div>
    </nav>
  )
}

export default NavBar
