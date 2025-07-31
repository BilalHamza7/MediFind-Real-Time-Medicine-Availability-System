import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import axios from 'axios'

import Userlogin from './Auth/UserAuth/Userlogin'
import UserRegistration from './Auth/UserAuth/UserRegistration'
import UserEmailVerification from './Auth/UserAuth/UserEmailVerification'
import UserHome from './User/UserHome'

import PharmacistRegistration from './Auth/PharmacistAuth/PharmacistRegistration'
import PharmacistLogin from './Auth/PharmacistAuth/PharmacistLogin'
import PharmResetPassword from './Auth/PharmacistAuth/PharmResetPassword'
import PharmOtpVerification from './Auth/PharmacistAuth/PharmOtpVerification'
import PharmEmailVerification from './Auth/PharmacistAuth/PharmEmailVerification'
import PharmacistDashboard from './Pharmacist/PharmacistDashboard'

// import NavBar from './Components/NavBar'
import Home from './Home'
import Layout from './Layout'
import AuthLayout from './Auth/AuthLayout'
import PharmacistLayout from './Pharmacist/PharmacistLayout'
import UserLayout from './User/UserLayout'

// ✅ Set default token for Axios on initial load
const token = localStorage.getItem('token');
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

function App() {
  return (
    <Router>
      {/* <NavBar /> */}
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route path='home' element={<Home />} />
        </Route>

        <Route path='/auth' element={<AuthLayout />}>
          <Route path='pharmacistLogin' element={<PharmacistLogin />} />
          <Route path='pharmacistRegistration' element={<PharmacistRegistration />} />
          <Route path='pharmacistemailVerification' element={<PharmEmailVerification />} />
          <Route path='pharmacistOtpVerification' element={<PharmOtpVerification />} />
          <Route path='pharmacistResetPassword' element={<PharmResetPassword />} />
          <Route path='userLogin' element={<Userlogin />} />
          <Route path='userRegistration' element={<UserRegistration />} />
          <Route path='userEmailVerification' element={<UserEmailVerification />} />
        </Route>

        <Route path='/pharmacist' element={<PharmacistLayout />}>
          <Route path='dashboard' element={<PharmacistDashboard />} />
        </Route>

        <Route path='/user' element={<UserLayout />}>
          <Route path='home' element={<UserHome />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
