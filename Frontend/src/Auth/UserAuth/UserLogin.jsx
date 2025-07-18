import React, { useState } from 'react'
import image from '../../assets/DocImg1.png'
import googleIcon from '../../assets/google-icon.svg'
const Userlogin = () => {
  const [docImage, setDocImage] = useState(image);
  const [googleIconImage, setGoogleIconImage] = useState(googleIcon);
  return (
    <div className="min-h-screen flex items-center justify-center bg-background " >
      <div className="bg-card p-8 rounded-xl shadow-lg flex flex-col md:flex-row w-full mx-4 max-w-4xl bg-[#E8F9FF]">
        {/* Form Section */}
        <div className="w-full md:w-1/2 ">
          <h2 className="text-2xl font-bold mb-6 text-primary p-4">Login</h2>
          <form>
            <input
              type="email"
              placeholder="Email Address"
              className="border border-[#007AFF] p-3 w-full rounded-md mb-4  bg-[#FBFBFB] mb-8"
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-[#007AFF] p-3 w-full rounded-md mb-4  bg-[#FBFBFB] mb-8"
            />
            <div className="flex items-center justify-between mb-8">
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-primary text-sm">Forgot Password?</a>
            </div>
            <div className="flex justify-center mb-8">
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 w-2/3 rounded-md hover:bg-blue-700 transition"
              >
                Login
              </button>
            </div>

          </form>
          <div className="my-8">
            <button className="w-full flex items-center justify-center border  py-2 rounded-md  border-[#007AFF] ">
              <img src={googleIconImage} alt="Google" className="w-5 h-5 mr-2" />
              Sign in with Google
            </button>
          </div>
          <p className="mt-4 text-center text-sm">
            Don’t have an account? <a href="/userRegistration" className="text-primary underline">Sign up</a>
          </p>
        </div>

        {/* Image Section */}
        <div className="hidden md:flex items-center justify-center w-1/2">
          <img src={docImage} alt="Doctor" className="max-w-full" />
        </div>
      </div>
    </div>
  )
}

export default Userlogin