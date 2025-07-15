import React from 'react'

const PharmacistLogin = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className="bg-blue-300 w-full px-5 sm:px-10 py-5">
                <img src="wait" alt="LOGO" />
            </div>
            <div className="px-5 py-5 bg-[#E8F9FF] w-4/5 max-w-5xl mt-14 rounded-md">
                <p className='font-poppins text-center text-2xl'>
                    Welcome Back!
                </p>
                <p className='font-poppins text-center text-sm mt-2 font-light'>
                    Let's Log You In To Continue
                </p>
                <label htmlFor="email" className='flex flex-col font-poppins mt-3'>
                    Email
                    <input type="email" id='email' placeholder='Enter your email' className='text-xs bg-white rounded-sm px-3 py-2 mt-1 outline-none border border-[#007AFF]' />
                </label>
                <label htmlFor="password" className='flex flex-col font-poppins mt-3'>
                    Password
                    <input type="password" id='password' className='text-xs bg-white rounded-sm px-3 py-2 mt-1 outline-none border border-[#007AFF]' />
                </label>
                <div className="flex justify-between mt-2">
                    <label htmlFor="remember" className='flex gap-1 text-xs font-poppins items-center justify-center'>
                        <input type="checkbox" id='remember' className='w-4 h-4 accent-[#007AFF] border border-black focus:outline-none ' />
                        Remember Me
                    </label>
                    <p className='underline font-poppins text-xs'>Forgot Password?</p>
                </div>
                <button className=''>
                    Log In
                </button>
            </div>
        </div>
    )
}

export default PharmacistLogin