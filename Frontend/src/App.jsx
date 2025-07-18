import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Userlogin from './Auth/UserAuth/Userlogin'
import PharmacistLogin from './Auth/PharmacistAuth/PharmacistLogin'
import PharmacistRegistration from './Auth/PharmacistAuth/PharmacistRegistration'
import NavBar from './Components/NavBar'
import UserRegistration from './Auth/UserAuth/UserRegistration'
import PharmResetPassword from './Auth/PharmacistAuth/PharmResetPassword'
import PharmOtpVerification from './Auth/PharmacistAuth/PharmOtpVerification'
import PharmEmailVerification from './Auth/PharmacistAuth/PharmEmailVerification'

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/userlogin' element={<Userlogin />} />
        <Route path='/userRegistration' element={<UserRegistration />} />
        <Route path='/pharmacist/login' element={<PharmacistLogin />} />
        <Route path='/pharmacist/registration' element={<PharmacistRegistration />} />
        <Route path='/pharmacist/emailVerification' element={<PharmEmailVerification />} />
        <Route path='/pharmacist/otpVerification' element={<PharmOtpVerification />} />
        <Route path='/pharmacist/resetPassword' element={<PharmResetPassword />} />
      </Routes>
    </Router>
  )
}

export default App
