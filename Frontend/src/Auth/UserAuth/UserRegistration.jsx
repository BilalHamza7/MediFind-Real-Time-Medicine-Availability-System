import React from 'react'
import docImage from '../../assets/DocImg3.png'
const UserRegistration = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-background'>
      <div className="bg-card p-8 rounded-xl shadow-lg flex flex-col md:flex-row w-full max-w-4xl bg-[#E8F9FF]">
        {/* Form Section */}
        <div className='w-full md:w-1/2'>
          <h2 className="text-2xl font-bold mb-6 text-primary p-4">Sign Up</h2>
          <form>
            <input
              type="text"
              placeholder="Full Name"
              className="border border-[#007AFF] p-3 w-full rounded-md mb-4 bg-[#FBFBFB] mb-8"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-[#007AFF] p-3 w-full rounded-md mb-4 bg-[#FBFBFB] mb-8"
            />
            <input
              type="text"
              placeholder="Age"
              className="border border-[#007AFF] p-3 w-full rounded-md mb-4 bg-[#FBFBFB] mb-8"
            />
            <select
              className="border border-[#007AFF] p-3 w-full rounded-md mb-4 bg-[#FBFBFB] mb-8"
              defaultValue=""
            >
              <option value="" disabled>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <input
              type="password"
              placeholder="Password"
              className="border border-[#007AFF] p-3 w-full rounded-md mb-4 bg-[#FBFBFB] mb-8"
            />
            <div className="flex justify-center mb-8">
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 w-full rounded-md hover:bg-blue-700 transition"
              >
                Sign up
              </button>
            </div>
          </form>
          <p className="mt-4 text-center text-sm">
            Already have an account? <a href="/userlogin" className="text-primary underline">Login</a>
          </p>
        </div>
        <div className="hidden md:flex items-center justify-center w-1/2">
          <img src={docImage} alt="Doctor" className="max-w-full" />
        </div>
      </div>
    </div>
  )
}

export default UserRegistration
