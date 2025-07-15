import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Userlogin from './Auth/UserAuth/Userlogin'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/userlogin' element={<Userlogin />} />
      </Routes>
    </Router>
  )
}

export default App
