import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function People() {
  return (
    <div className="content">

    
      <h1>Handy list of people</h1>

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

export default People;
