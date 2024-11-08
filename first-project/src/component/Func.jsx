import React, { useEffect, useState } from 'react'

const Func = () => {
    const [count ,setCount] = useState(0)
  const [message,setMessage] = useState(null)
  const [notifiction , setNotification] = useState([])

    console.log("helo bhadra class // render method")

   useEffect (()=>{
    console.log("component mounted")

    return()=>{
      console.log("component will unmount")
    }
   }, [])
   
useEffect (()=>{
  console.log("count updated" , count)
 },[count,message,notifiction ])

 const increment=()=>{
  setCount(count + 1)
  
 }

  return (
    <div className='container'>
     
      <h1>count :{count}</h1>
      <button className='btn btn-primary'  onClick={increment}>increment</button>
     
      </div>
  )
}

export default Func
