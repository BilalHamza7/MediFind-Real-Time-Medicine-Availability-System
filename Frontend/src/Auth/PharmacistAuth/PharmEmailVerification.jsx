import React from 'react'

import DocImg from '../../assets/DocImg2.png';
import { useNavigate } from 'react-router-dom';

const PharmEmailVerification = () => {

  const navigate = useNavigate();

  return (
    <div className="flex justify-center md:justify-between bg-[#E8F9FF] w-4/5 max-w-2xl mt-14 rounded-md">
      <div className="flex flex-col items-center justify-center px-5 py-5 w-full max-w-sm ">
        <p className='font-poppins text-center text-2xl md:text-4xl'>
          Verify Email
        </p>
        <p className='font-poppins text-center text-xs md:text-sm mt-2 font-light'>
          Enter Your Email To Verify And Continue To Reset Your Password
        </p>
        <div className='w-full'>
          <label htmlFor="email" className='label_style'>
            Email
            <input type="email" id='email' placeholder='Enter your email' className='input_style' />
          </label>
        </div>
        <button className='button_style' onClick={() => navigate('/pharmacist/OtpVerification')}>
          Confirm
        </button>
        <p className='font-poppins text-xs font-light text-center mt-2 cursor-pointer' onClick={() => navigate('/pharmacist/login')}>&larr; Go Back</p>
      </div>
      <div className="max-md:hidden">
        <img src={DocImg} alt="heroImage" className=' object-cover' />
      </div>
    </div>
  )
}

export default PharmEmailVerification