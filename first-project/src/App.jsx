import React, { useState } from 'react'

import "./App.css"
import Alert from './component/Alert'

import Navbar from './component/Navbar'

const App = () => {

// const [color, setColor] = useState("blue") 
  const [text,setText]= useState("enable dark mode")
  const [textColor , setTextColor] = useState ('red')
    const [mode , setMode] = useState('light')
    const [alert,setAlert] = useState(null)
    const showAlert =(type ,message)=>{
     setAlert ({
        type:type,
        message:message
      })
      setTimeout(() => {
      setAlert(null)
     }, 1000);
 
    }

   const toggleMode=()=>{
      if(mode == "light"){
        setMode("dark")
        setText('enable  light mode')
        setTextColor ('blue')
        showAlert("success", "dark mode has been enable")
      }
     else{
      setMode('light')
      setText('enable dark mode')
      setTextColor('green')
      showAlert("success", "light mode has been enable")
     }

     /* const changeColor = (newColor) => {
      setTextColor(newColor); */
    }
  return (
    
    <>
   
       <Navbar title="this is header" mode={mode} style={{ color:textColor}} text={text} toggleMode={toggleMode}/>
      <Alert alert={alert} showAlert={showAlert}/>
       <div>
      {/* Display text with dynamic color */}
      <p style={{ color: textColor }}>This text color changes!</p>

      {/* Buttons to change color */}
     
    </div>
      {/*  <h1> bhadra + group</h1>
    <div className='card'>
      <button onClick={()=>setColor("red")}>
        please click me {color}
      </button>
      </div> */}
      </>
  )
}

export default App
