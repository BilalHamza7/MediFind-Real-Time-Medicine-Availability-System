import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../src/assets/Logo.png'
const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem('token')
    setIsLoggedIn(!!token)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLoggedIn(false)
    navigate('/userlogin') // redirect to login after logout
  }

  const handleLogin = () => {
    navigate('/userlogin')
  }

  const handleSignUp = () => {
    navigate('/userRegistration')
  }

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <img src={logo} alt="" className='h-10 items-left'  />
      <h1 className="text-xl font-bold text-blue-600">MediCore</h1>
      <div className="space-x-4">
        {!isLoggedIn ? (
          <>
            <button
              onClick={handleLogin}
              className="text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition"
            >
              Login
            </button>
            <button
              onClick={handleSignUp}
              className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Sign Up
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
