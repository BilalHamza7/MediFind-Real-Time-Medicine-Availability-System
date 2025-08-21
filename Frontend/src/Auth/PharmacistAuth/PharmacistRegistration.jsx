/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import DocImg from '../../assets/DocImg4.png';
import CityDropdown from '../../Components/CityDropdown';

const PharmacistRegistration = () => {

    const navigate = useNavigate();

    const [errors, setErrors] = useState({})
    const [confirmPassword, setConfirmPassword] = useState('')
    const [formData, setFormData] = useState({
        fullName: '',
        businessName: '',
        registeredNo: '',
        locatedCity: '',
        address: '',
        email: '',
        password: '',
    })

    const handleCitySelect = (city) => {
        setFormData(prev => ({
            ...prev,
            locatedCity: city
        }));
    };

    const handleChange = (e) => {
        validate();
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const validate = () => {
        const errors = {};
        if (!formData.fullName.trim()) {
            errors.fullName = true;
        }

        if (!formData.businessName.trim()) {
            errors.businessName = true;
        }

        if (!formData.registeredNo.trim()) {
            errors.registeredNo = true;
        }

        if (!formData.locatedCity.trim()) {
            errors.locatedCity = true;
        }

        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = true;
        }

        if (!formData.password.trim()) {
            errors.password = true;
        }

        if (!confirmPassword.trim()) {
            errors.confirmPassword = true;
        } else if (confirmPassword != formData.password) {
            errors.confirmPassword = 'invalid'
        }

        return errors;
    }

    const handleSignUp = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            alert('called')
            return;
        }
        try {
            const response = await axios.post('http://localhost:5143/api/pharmacist/createPharmacist', formData);
            if (response.status === 200) {
                alert('Registration successful');
                navigate('/pharmacist/login');
            }
        }
        catch (error) {
            console.error('Error during pharmacist registration:', error);
            setErrors({ server: 'Registration failed. Please try again later.' });
        }
    };

    return (
        <div className="flex justify-center lg:justify-between bg-[#E8F9FF] w-4/5 max-w-4xl my-14 rounded-md">
            <div className="flex flex-col items-center justify-center px-5 py-5 w-full max-w-lg ">
                <p className='font-poppins text-center text-2xl md:text-3xl'>
                    Welcome To MediFind!
                </p>
                <p className='font-poppins text-center text-xs md:text-sm mt-2 font-light'>
                    Create Your Account And Widen Your Scope To Reach More Customers!
                </p>
                <form className='w-full flex flex-col items-center relative' onSubmit={handleSignUp} >
                    <div className="flex max-lg:flex-col lg:gap-3 w-full lg:justify-between items-center">
                        <label htmlFor="fullName" className='label_style relative'>
                            Full Name
                            <input type="text" id='fullName' name='fullName' value={formData.fullName} placeholder='Enter Your Full Name' className='input_style' onChange={handleChange} />
                            {errors.fullName && <p className="text-red-400 text-left text-xs mt-2 md:mt-1 absolute top-12 md:top-16 ">Full Name is required</p>}
                        </label>
                        <label htmlFor="businessName" className='label_style relative'>
                            Business Name
                            <input type="text" id='businessName' name='businessName' value={formData.businessName} placeholder='Enter Your Business Name' className='input_style' onChange={handleChange} />
                            {errors.businessName && <p className="text-red-400 text-left text-xs mt-2 md:mt-1 absolute top-12 md:top-16 ">Business Name Is Required</p>}
                        </label>
                    </div>
                    <div className="flex max-lg:flex-col lg:gap-3 w-full lg:justify-between items-center">
                        <label htmlFor="registeredNo" className='label_style relative'>
                            Registered Business No.
                            <input type="text" id='registeredNo' name='registeredNo' value={formData.registeredNo} placeholder='Enter Your Registration No.' className='input_style' onChange={handleChange} />
                            {errors.registeredNo && <p className="text-red-400 text-left text-xs mt-2 md:mt-1 absolute top-12 md:top-16 ">Registration Number Is Required</p>}
                        </label>
                        <CityDropdown onCitySelect={handleCitySelect} error={errors} />
                    </div>
                    <div className="w-full">
                        <label htmlFor="email" className='label_style relative'>
                            Email
                            <input type="email" id='email' name='email' value={formData.email} placeholder='Enter Your Email' className='input_style' onChange={handleChange} />
                            {errors.email && <p className="text-red-400 text-left text-xs mt-2 md:mt-1 absolute top-12 md:top-16 ">A Valid Email Is Required</p>}
                        </label>
                    </div>
                    <div className="flex max-lg:flex-col lg:gap-3 w-full lg:justify-between items-center mb-8">
                        <label htmlFor="password" className='label_style relative'>
                            Password
                            <input type="password" id='password' name='password' value={formData.password} className='input_style' onChange={handleChange} />
                            {errors.password && <p className="text-red-400 text-left text-xs mt-2 md:mt-1 absolute top-12 md:top-16 ">Password Is Required</p>}
                        </label>
                        <label htmlFor="confirmPassword" className='label_style relative'>
                            Confirm Password
                            <input type="password" id='confirmPassword' value={confirmPassword} className='input_style' onChange={(e) => setConfirmPassword(e.target.value)} />
                            {errors.confirmPassword && <p className="text-red-400 text-left text-xs mt-2 md:mt-1 absolute top-12 md:top-16 ">{errors.confirmPassword === 'invalid' ? 'Password Is Not Matching' : 'Re-Enter Password'}</p>}
                        </label>
                    </div>
                    {errors.server && <p className="text-red-500 text-center text-xs mt-2 md:mt-1 absolute bottom-12">{errors.server}</p>}
                    <button className='button_style' type='submit'>
                        Sign Up
                    </button>
                </form>
                <p className='font-poppins text-xs font-light text-center mt-2'>Already Have An Account? <br className='sm:hidden' /> <span className='underline cursor-pointer' onClick={() => navigate('/pharmacist/login')}>Log In</span></p>
            </div>
            <div className="max-lg:hidden flex items-center">
                <img src={DocImg} alt="heroImage" className='object-cover' />
            </div>
        </div>
    )
}

export default PharmacistRegistration