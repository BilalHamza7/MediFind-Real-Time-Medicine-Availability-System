import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Userlogin from './Auth/UserAuth/Userlogin'
import PharmacistLogin from './Auth/PharmacistAuth/PharmacistLogin'
import PharmacistRegistration from './Auth/PharmacistAuth/PharmacistRegistration'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/userlogin' element={<Userlogin />} />
        <Route path='/pharmacistLogin' element={<PharmacistLogin />} />
        <Route path='/pharmacistRegistration' element={<PharmacistRegistration />} />
      </Routes>
    </Router>
  )
}

export default App
