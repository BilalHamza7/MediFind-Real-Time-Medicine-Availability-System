import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import axios from 'axios'

import Userlogin from './Auth/UserAuth/Userlogin'
import UserRegistration from './Auth/UserAuth/UserRegistration'

import PharmacistRegistration from './Auth/PharmacistAuth/PharmacistRegistration'
import PharmacistLogin from './Auth/PharmacistAuth/PharmacistLogin'
import PharmResetPassword from './Auth/PharmacistAuth/PharmResetPassword'
import PharmOtpVerification from './Auth/PharmacistAuth/PharmOtpVerification'
import PharmEmailVerification from './Auth/PharmacistAuth/PharmEmailVerification'

import Layout from './Auth/Layout'
import UserEmailVerification from './Auth/UserAuth/UserEmailVerification'

// ✅ Set default token for Axios on initial load
const token = localStorage.getItem('token');
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

function App() {
  return (
    <Router>
      <Routes>
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
  );
}

export default App;
