import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Artists() {
  return (
    <div>

    
      <h1>Artist Info</h1>

      <br />

      <Link to="Daughters">Daughters</Link>
      <br />
      <Link to="Death Grips">Death Grips</Link>
      <br />
      <Link to="Nirvana">Nirvana</Link>
      <br />
      <Link to="Le Tigre">Le Tigre</Link>

      <Outlet />

    </div>
  );
}

export default Artists;
