import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <Link to="/">HOME</Link>
        <Link to="/products">PRODUCTS</Link>
        <Link to="/about">ABOUT</Link>
    </div>
  )
}

export default NavBar