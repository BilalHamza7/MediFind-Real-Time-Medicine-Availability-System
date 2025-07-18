import React from 'react'
import DocImg1 from '../../assets/DocImg1.png'
import { useNavigate } from 'react-router-dom';

const PharmacistLogin = () => {

    const navigate = useNavigate();

    return (
        <div className='flex flex-col items-center'>
            <div className="bg-blue-300 w-full px-5 sm:px-10 py-5">
                <img src="wait" alt="LOGO" />
            </div>
            <div className="flex justify-center md:justify-between bg-[#E8F9FF] w-4/5 max-w-2xl mt-14 rounded-md">
                <div className="flex flex-col items-center justify-center px-5 py-5 w-full max-w-sm ">
                    <p className='font-poppins text-center text-2xl md:text-4xl'>
                        Welcome Back!
                    </p>
                    <p className='font-poppins text-center text-xs md:text-sm mt-2 font-light'>
                        Let's Log You In To Continue
                    </p>
                    <div className='w-full'>
                        <label htmlFor="email" className='label_style'>
                            Email
                            <input type="email" id='email' placeholder='Enter your email' className='input_style' />
                        </label>
                        <label htmlFor="password" className='label_style'>
                            Password
                            <input type="password" id='password' className='input_style' />
                        </label>
                        <div className="flex justify-between mt-2 max-w-xs">
                            <label htmlFor="remember" className='flex gap-1 text-xs md:text-sm font-poppins font-light items-center justify-center'>
                                <input type="checkbox" id='remember' className='w-4 md:w-5 h-4 md:h-5 accent-[#007AFF] focus:outline-none ' />
                                Remember Me
                            </label>
                            <p className='underline font-poppins font-light text-xs md:text-sm text-right'>Forgot Password?</p>
                        </div>
                    </div>
                    <button className='button_style'>
                        Log In
                    </button>
                    <p className='font-poppins text-xs font-light text-center mt-2'>Don't Have An Account? <br className='sm:hidden' /> <span className='underline cursor-pointer' onClick={() => navigate('/pharmacistRegistration')}>Create An Account</span></p>
                </div>
                <div className="max-md:hidden">
                    <img src={DocImg1} alt="heroImage" className=' object-cover' />
                </div>
            </div>
        </div>
    )
}

export default PharmacistLogin