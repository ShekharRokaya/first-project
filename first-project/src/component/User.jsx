


import React from 'react'

import { useParams } from 'react-router-dom'

const User = () => {
    const {fname,lname}  = useParams()

  return (
    <div>
      <h1> user  {fname} {lname}  page</h1>
    </div>
  )
}

export default User
