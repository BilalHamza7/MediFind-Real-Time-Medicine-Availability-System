import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Userlogin from './Auth/UserAuth/Userlogin'
import UserRegistration from './Auth/UserAuth/UserRegistration'

import PharmacistRegistration from './Auth/PharmacistAuth/PharmacistRegistration'
import PharmacistLogin from './Auth/PharmacistAuth/PharmacistLogin'
import PharmResetPassword from './Auth/PharmacistAuth/PharmResetPassword'
import PharmOtpVerification from './Auth/PharmacistAuth/PharmOtpVerification'
import PharmEmailVerification from './Auth/PharmacistAuth/PharmEmailVerification'

import Layout from './Auth/Layout'
import UserEmailVerification from './Auth/UserAuth/UserEmailVerification'

function App() {

  return (
    <Router>
      <Routes>
        {/* Routes before login with a layout for navbar before login */}
        <Route path='/' element={<Layout />}>
          <Route path='/pharmacist/login' element={<PharmacistLogin />} />
          <Route path='/pharmacist/registration' element={<PharmacistRegistration />} />
          <Route path='/pharmacist/emailVerification' element={<PharmEmailVerification />} />
          <Route path='/pharmacist/otpVerification' element={<PharmOtpVerification />} />
          <Route path='/pharmacist/resetPassword' element={<PharmResetPassword />} />
          <Route path='/userlogin' element={<Userlogin />} />
          <Route path='/userRegistration' element={<UserRegistration />} />
          <Route path='/useremailverification' element={<UserEmailVerification />} />
        </Route>

        
      </Routes>
    </Router>
  )
}

export default App
