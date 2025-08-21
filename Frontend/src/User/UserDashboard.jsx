import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsLoggedIn(!!token)
  }, []);

  return (
    isLoggedIn ? (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Dashboard</h1>
        <p className="text-lg mb-8">You are logged in successfully!</p>
        <button
          onClick={() => navigate('/user/shop')}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Go to Shop
        </button>
      </div>
    ) : (
      navigate('/userlogin')
    )
  )

}

export default UserDashboard