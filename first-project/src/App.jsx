import React, { useState } from 'react'

import "./App.css"
import Alert from './component/Alert'

import Navbar from './component/Navbar'

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Contact from './component/contact';

const App = () => {

  // const [color, setColor] = useState("blue") 
  const [text, setText] = useState("enable dark mode")
  const [textColor, setTextColor] = useState('red')
  const [mode, setMode] = useState('light')
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
    if (mode == "light") {
      setMode("dark")
      setText('enable  light mode')
      setTextColor('blue')
      showAlert("success", "dark mode has been enable")
    }
    else {
      setMode('light')
      setText('enable dark mode')
      setTextColor('green')
      showAlert("success", "light mode has been enable")
    }


  }
  return (

    <>
      <Router>


        <Navbar title="this is header" mode={mode} style={{ color: textColor }} text={text} toggleMode={toggleMode} />
        <Alert alert={alert} showAlert={showAlert} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />


        </Routes>
      </Router>
    </>
  )
}

export default App
