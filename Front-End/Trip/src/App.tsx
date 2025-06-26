import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import SignUp from './components/SignUp';
import Home from './Pages/Home'
import Destination from './Pages/Destination';
import MywishList from './Pages/MywishList';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<About/>}></Route>
        <Route path='SignUp' element = {<SignUp/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Destination'  element={<Destination/>}></Route>
        <Route path='/MywishList' element={<MywishList/>}></Route>
      </Routes>
    </Router>
     
  )
}

export default App
