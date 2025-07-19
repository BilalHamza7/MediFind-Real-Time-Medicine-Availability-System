import React from 'react'
import { useNavigate } from 'react-router-dom'
import DocImg from '../../assets/DocImg5.png';

const PharmOtpVerification = () => {

  const navigate = useNavigate();

  return (
    <div className="flex justify-center md:justify-between bg-[#E8F9FF] w-4/5 max-w-2xl mt-14 rounded-md">
      <div className="flex flex-col items-center justify-center px-5 py-5 w-full max-w-sm ">
        <p className='font-poppins text-center text-2xl md:text-4xl'>
          Enter OTP
        </p>
        <p className='font-poppins text-center text-xs md:text-sm mt-2 font-light'>
          Enter The 5 Digit Code Sent To Your Email
        </p>
        <div className='w-full'>
          <label htmlFor="otp" className='label_style'>
            OTP
            <input type="text" id='otp' placeholder='Enter 5 Digit Code Here' className='input_style' />
          </label>
        </div>
        <button className='button_style' onClick={() => navigate('/pharmacist/resetPassword')}>
          Verify
        </button>
        <p className='font-poppins text-xs font-light text-center mt-2 cursor-pointer' onClick={() => navigate('/pharmacist/emailVerification')}>&larr; Go Back</p>
      </div>
      <div className="max-md:hidden">
        <img src={DocImg} alt="heroImage" className=' object-cover' />
      </div>
    </div>
  )
}

export default PharmOtpVerification