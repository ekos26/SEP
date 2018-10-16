import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <div className='navbar'>
      <ul>
        <li>
      <Link to='/campuses'>Campuses</Link>
        </li>
      </ul>
      <ul>
        <li>
      <Link to='/students'>Students</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
