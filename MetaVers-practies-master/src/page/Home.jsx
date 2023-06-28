import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div>

        <NavLink to="/">home</NavLink>
        <br />
        <NavLink to="/meta">meta</NavLink>
    </div>
  )
}

export default Home