import React from 'react'

import { useNavigate } from 'react-router-dom'
import DocImg from '../../assets/DocImg5.png';

const PharmResetConfirmation = ({ confirmPanel }) => {

  const navigate = useNavigate();

  if (!confirmPanel) {
    return null;
  } else {
    return (
      <div className='fixed inset-0 bg-gray-600/60 flex items-center justify-center z-50'>
        <div className="flex justify-center md:justify-between bg-[#E8F9FF] w-4/5 max-w-2xl mt-14 rounded-md">
          <div className="flex flex-col items-center justify-center px-5 py-5 gap-5 w-full max-w-sm ">
            <p className='font-poppins text-center text-2xl md:text-4xl'>
              Password Reset Successfull!
            </p>
            <p className='font-poppins text-center text-xs md:text-sm mt-2 font-light'>
              Your Password Has been Reset Successfully, Enter Your New Password To Login And Enjoy Your Business
            </p>
            <button className='button_style' onClick={() => navigate('/pharmacist/login')}>
              Log In
            </button>
          </div>
          <div className="max-md:hidden">
            <img src={DocImg} alt="heroImage" className=' object-cover' />
          </div>
        </div>
      </div>
    )
  }
}

export default PharmResetConfirmation