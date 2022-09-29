import React from 'react'
import { NavLink } from 'react-router-dom'
import { BackButton } from '../../components'

function Header() {
  const activeClass = (({ isActive }) => isActive ? 'active' : 'notactive')


  return (
    <nav className="navbar">
      <h1>My Playlists</h1>
      <div className="links">
        <NavLink className={activeClass} to="/" end>Home</NavLink>
        <NavLink className={activeClass} to="/artists">Artists</NavLink>
        <NavLink className={activeClass} to="/add">Add</NavLink>
        <BackButton id = "back" />
      </div>
    </nav>
  );
}

export default Header;
