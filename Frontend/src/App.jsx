import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Userlogin from './Auth/UserAuth/Userlogin'
import PharmacistLogin from './Auth/PharmacistAuth/PharmacistLogin'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/userlogin' element={<Userlogin />} />
        <Route path='/pharmacistLogin' element={<PharmacistLogin />} />
      </Routes>
    </Router>
  )
}

export default App
