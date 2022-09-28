import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Artists() {
  return (
    <div>

    
      <h1>Artist Info</h1>

      <br />

      <Link to="Mike">Mike</Link>
      <br />
      <Link to="Romeo">Romeo</Link>
      <br />
      <Link to="Shaw">Shaw</Link>

      <Outlet />

    </div>
  );
}

export default Artists;
