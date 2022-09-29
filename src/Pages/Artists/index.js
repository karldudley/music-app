import React from 'react'
import { Link } from 'react-router-dom'

function Artists() {
  return (
    <div>

    
      <h1>Artist Info</h1>

      <br />

      <Link to="1">Daughters</Link>
      <br />
      <Link to="2">Death Grips</Link>
      <br />
      <Link to="3">Nirvana</Link>
      <br />
      <Link to="4">Le Tigre</Link>

    </div>
  );
}

export default Artists;
