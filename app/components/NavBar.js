import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/campuses'>
      <h3>Campuses</h3>
      </Link>
      <Link to='/students'>Students
      <h3>Students</h3>
      </Link>
    </div>
  )
}

export default Navbar
