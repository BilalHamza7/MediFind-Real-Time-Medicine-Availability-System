/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import axios from 'axios'

import DocImg1 from '../../assets/DocImg1.png'
import { useNavigate } from 'react-router-dom';

const PharmacistLogin = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({})


    const validate = () => {
        const errors = {};
        if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'A Valid Email Is Required';
        }
        if (!password.trim()) {
            errors.password = 'Password Is Required';
        }
        return errors;
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const response = await axios.post('http://localhost:5143/api/pharmacist/login', {
                email,
                password,
            });

            const { status, message, token } = response.data;

            if (status === 'success') {
                localStorage.setItem('token', token);
                console.log('Login successful:', message);
                setErrors({});
                navigate('/pharmacist/home');
            }

        } catch (error) {
            if (error.response) {
                const { message } = error.response.data;
                console.error("Login failed:", message);
                setErrors({ server: message });
            } else {
                setErrors({ server: 'Login failed. Please try again later.' });
            }
        }
    };

    return (
        <div className="flex justify-center md:justify-between bg-[#E8F9FF] w-4/5 max-w-2xl mt-14 rounded-md">
            <div className="flex flex-col items-center justify-center px-5 py-5 w-full max-w-sm ">
                <p className='font-poppins text-center text-2xl md:text-4xl'>
                    Welcome Back!
                </p>
                <p className='font-poppins text-center text-xs md:text-sm mt-2 font-light'>
                    Let's Log You In To Continue
                </p>
                <form className='w-full flex flex-col items-center relative' onSubmit={handleLogin}>
                    <label htmlFor="email" className='label_style relative'>
                        Email
                        <input type="email" id='email' value={email} placeholder='Enter your email' className='input_style' onChange={(e) => setEmail(e.target.value)} />
                        {errors.email && <p className="text-red-400 text-left text-xs mt-2 md:mt-1 absolute top-12 md:top-16 ">{errors.email}</p>}
                    </label>
                    <label htmlFor="password" className='label_style relative'>
                        Password
                        <input type="password" id='password' value={password} className='input_style' onChange={(e) => setPassword(e.target.value)} />
                        {errors.password && <p className="text-red-400 text-left text-xs mt-2 md:mt-1 absolute top-12 md:top-16 ">{errors.password}</p>}

                    </label>
                    <div className="flex justify-end mt-2 w-full mb-4">
                        {/* <label htmlFor="remember" className='flex gap-1 text-xs md:text-sm font-poppins font-light items-center justify-center'>
                            <input type="checkbox" id='remember' className='w-4 h-4 accent-[#007AFF] focus:outline-none ' />
                            Remember Me
                        </label> */}
                        <p className='underline font-poppins font-light text-xs md:text-sm text-right cursor-pointer' onClick={() => navigate('/pharmacist/emailVerification')}>Forgot Password?</p>
                    </div>
                    {errors.server && <p className="text-red-500 text-center text-sm mt-2 md:mt-1 absolute bottom-16">{errors.server}</p>}
                    <button className='button_style' type='submit'>
                        Log In
                    </button>
                    <p className='font-poppins text-xs font-light text-center mt-2'>Don't Have An Account? <br className='sm:hidden' /> <span className='underline cursor-pointer' onClick={() => navigate('/pharmacist/registration')}>Create An Account</span></p>
                </form>
            </div>
            <div className="max-md:hidden">
                <img src={DocImg1} alt="heroImage" className=' object-cover' />
            </div>
        </div >
    )
}

export default PharmacistLogin