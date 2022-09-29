import React from 'react'
import { useParams } from 'react-router-dom'

function Artist() {

const params = useParams()
const wikiURL = `https://en.wikipedia.org/wiki/${params.name}_(band)`
  return (
    
    <>
      <h1>{params.name}</h1>
      <a href={wikiURL}>Wiki</a>
    </>
  );
}

export default Artist;
