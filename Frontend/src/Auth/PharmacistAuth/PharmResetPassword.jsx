import React, { useState } from 'react'

import DocImg from '../../assets/DocImg5.png';
import PharmResetConfirmation from './PharmResetConfirmation';

const PharmResetPassword = () => {

  const [confirmPanel, setConfirmPanel] = useState(false);

  const toggleResetConfirmation = () => {
    setConfirmPanel((confirmPanel) => !confirmPanel);
  }

  return (
    <div className="flex justify-center md:justify-between bg-[#E8F9FF] w-4/5 max-w-2xl mt-14 rounded-md">
      <div className="flex flex-col items-center justify-center px-5 py-5 w-full max-w-sm ">
        <p className='font-poppins text-center text-2xl md:text-4xl'>
          Reset Password
        </p>
        <p className='font-poppins text-center text-xs md:text-sm mt-2 font-light'>
          Enter A Strong New Password To Reset Your Password
        </p>
        <div className='w-full'>
          <label htmlFor="password" className='label_style'>
            Password
            <input type="password" id='password' className='input_style' />
          </label>
          <label htmlFor="confirmPassword" className='label_style'>
            Confirm Password
            <input type="password" id='confirmPassword' className='input_style' />
          </label>
        </div>
        <button className='button_style' onClick={() => toggleResetConfirmation()}>
          Confirm
        </button>
      </div>
      <PharmResetConfirmation confirmPanel={confirmPanel} />
      <div className="max-md:hidden">
        <img src={DocImg} alt="heroImage" className=' object-cover' />
      </div>
    </div>
  )
}

export default PharmResetPassword