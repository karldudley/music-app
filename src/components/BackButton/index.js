import React from 'react'
import { useNavigate } from 'react-router-dom'

function BackButton() {

    const navigate = useNavigate()

  return (
    <>
      <button className="back" onClick={() => navigate(-1)}>Back</button>
      {/* <button onClick={() => navigate('/')}>Home</button> */}
    </>
  );
}

export default BackButton;
