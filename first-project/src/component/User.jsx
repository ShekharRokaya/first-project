


import React from 'react'

import { useParams } from 'react-router-dom'

const User = () => {
    const {username,userid}  = useParams()

  return (
    <div>
      <ul>
        <li>username:{username}</li>
        <li>userid:{userid}</li>
      </ul>
      <h1> user  {username} {userid}  page</h1>
    </div>
  )
}

export default User
