import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Userlogin from './Auth/UserAuth/Userlogin'
import PharmacistLogin from './Auth/PharmacistAuth/PharmacistLogin'
<<<<<<< HEAD
import PharmacistRegistration from './Auth/PharmacistAuth/PharmacistRegistration'
=======
import NavBar from './Components/NavBar'
import UserRegistration from './Auth/UserAuth/UserRegistration'
>>>>>>> a44a07e8852c5de8b79197add075cdda2609c238

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/userlogin' element={<Userlogin />} />
        <Route path='/userRegistration' element={<UserRegistration />} />
        <Route path='/pharmacistLogin' element={<PharmacistLogin />} />
        <Route path='/pharmacistRegistration' element={<PharmacistRegistration />} />
      </Routes>
    </Router>
  )
}

export default App
