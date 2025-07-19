import React from 'react'
import DocImg from '../../assets/DocImg4.png'
import { useNavigate } from 'react-router-dom'

const PharmacistRegistration = () => {

    const navigate = useNavigate();

    return (
        <div className="flex justify-center lg:justify-between bg-[#E8F9FF] w-4/5 max-w-4xl mt-14 rounded-md">
            <div className="flex flex-col items-center justify-center px-5 py-5 w-full max-w-lg ">
                <p className='font-poppins text-center text-2xl md:text-3xl'>
                    Welcome To MediFind!
                </p>
                <p className='font-poppins text-center text-xs md:text-sm mt-2 font-light'>
                    Create Your Account And Widen Your Scope To Reach More Customers!
                </p>
                <div className='w-full flex flex-col items-center'>
                    <div className="flex max-lg:flex-col lg:gap-3 w-full lg:justify-between items-center">
                        <label htmlFor="fullName" className='label_style'>
                            Full Name
                            <input type="text" id='fullName' placeholder='Enter Your Full Name' className='input_style' />
                        </label>
                        <label htmlFor="businessName" className='label_style'>
                            Business Name
                            <input type="text" id='businessName' placeholder='Enter Your Business name' className='input_style' />
                        </label>
                    </div>
                    <div className="flex max-lg:flex-col lg:gap-3 w-full lg:justify-between items-center">
                        <label htmlFor="email" className='label_style'>
                            Email
                            <input type="email" id='email' placeholder='Enter Your Email' className='input_style' />
                        </label>
                        <label htmlFor="city" className='label_style'>
                            Located City
                            <input type="text" id='city' placeholder='Enter Your City' className='input_style' />
                        </label>
                    </div>
                    <div className="flex max-lg:flex-col lg:gap-3 w-full lg:justify-between items-center">
                        <label htmlFor="password" className='label_style'>
                            Password
                            <input type="password" id='password' className='input_style' />
                        </label>
                        <label htmlFor="confirmPassword" className='label_style'>
                            Confirm Password
                            <input type="password" id='confirmPassword' className='input_style' />
                        </label>
                    </div>
                </div>
                <button className='button_style'>
                    Sign Up
                </button>
                <p className='font-poppins text-xs font-light text-center mt-2'>Already Have An Account? <br className='sm:hidden' /> <span className='underline cursor-pointer' onClick={() => navigate('/pharmacist/login')}>Log In</span></p>
            </div>
            <div className="max-lg:hidden flex items-center">
                <img src={DocImg} alt="heroImage" className=' object-cover' />
            </div>
        </div>
    )
}

export default PharmacistRegistration