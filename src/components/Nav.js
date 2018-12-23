import React from 'react'
import { NavLink } from 'react-router-dom';


const Nav = () => {
  return (
    <div className="nav-bar-wrapper">
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/shows">Shows</NavLink>
      <NavLink to='/listen'>Music</NavLink>
      <NavLink to='/merch'>Merch</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
    </div>
  )
}

export default Nav
