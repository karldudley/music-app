import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Artists() {
  return (
    <div>

    
      <h1>Artist Info</h1>

      <br />

      <Link to="Daughters">Mike</Link>
      <br />
      <Link to="Death Grips">Romeo</Link>
      <br />
      <Link to="Nirvana">Shaw</Link>
      <br />
      <Link to="Le Tigre">Shaw</Link>

      <Outlet />

    </div>
  );
}

export default Artists;
