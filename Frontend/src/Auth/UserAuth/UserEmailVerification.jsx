import React from 'react'
import docImage from '../../assets/DocImg2.png'
const UserEmailVerification = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-background'>
        <div className='bg-card p-8 rounded-xl shadow-lg flex flex-col md:flex-row w-full max-w-4xl bg-[#E8F9FF]'>
            <div className='w-full md:w-1/2'>
                <h2 className="text-2xl text-center font-bold mb-6 text-primary p-4">Please enter your email address</h2>
            </div>
            <div className="hidden md:flex items-center justify-center w-1/2">
                <img src={docImage} alt="Doctor" className="max-w-full" />
            </div>
        </div>
    </div>
  )
}

export default UserEmailVerification