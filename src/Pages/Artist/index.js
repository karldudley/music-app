import React from 'react'
import { useParams } from 'react-router-dom'

function Artist() {

const params = useParams()
console.log(params);
  return (
    
    
    <h1>{params.name}</h1>
  );
}

export default Artist;
