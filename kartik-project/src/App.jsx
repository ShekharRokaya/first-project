import { useState } from 'react'
import './App.css'

import Navbar from './component/Navbar';
import Alert from './component/Alert'
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Contact from './component/Contact';
import About from './component/About';
import Home from './component/Home';


/* import Counter from './component/Counter'; */
import User from './component/User';
import UserList from './component/UserList';

import ProductState from './Context/ProductState';
import Signup from './component/Signup';
import Login from './component/Login';




function App() {
  // const [color, setColor] = useState("blue")
  const [mode, setMode] = useState('light')
  const [text, setText] = useState('enable dark mode')
  const [alert, setAlert] = useState(null)

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);

  }



  const toggleMode = () => {
    if (mode == 'light') {
      setMode('dark')
      setText('enable light mode')
      showAlert('success', 'dark mode has been enable')
    }
    else {
      setMode('light')
      setText('enable dark mode')
      showAlert('success', 'light mode has been enable')
    }
  }


  return (
    <>
      <ProductState>
        <Router>
          <Navbar title="logo here" mode={mode} text={text} toggleMode={toggleMode} />
          <Alert alert={alert} showAlert={showAlert} />
          {/* <Counter /> */}
          {/* <Func /> */}
          {/* <Counter /> */}
          <Routes>
            <Route path='/' element={<Home showAlert={showAlert} />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path="/user/:userId/:userName" element={<User />} />
            <Route path="/user" element={<UserList />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
         
          </Routes>
        </Router>
      </ProductState>
    </>
  )
}

export default App