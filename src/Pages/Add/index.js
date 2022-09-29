import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Add = () => {
  const [artist, setArtist] = useState('');
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');
  const [year, setYear] = useState('');
  const liked = false;
  const [isPending, setIsPending] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    const track = { artist, name, info, year, liked }

    setIsPending(true)
    
    fetch('https://music-app-db-kd.herokuapp.com/artists/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(track)
    }).then(() => {
      console.log('new track added');
      setIsPending(false)
      navigate('/')
    })
    
  }

  return (
    <div className="create">
      <h2>Add a New Track</h2>
      <form onSubmit={handleSubmit}>
        <label>Artist:</label>
        <input 
          type="text" 
          required 
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <label>Track name:</label>
        <input 
          type="text" 
          required 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Track information:</label>
        <textarea
          required
          value={info}
          onChange={(e) => setInfo(e.target.value)}
        ></textarea>
        <label>Year of release:</label>
        <input 
          type="text" 
          required 
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        { isPending && <button disabled>Adding track...</button> }
        { !isPending && <button>Add Track</button> }
      </form>
    </div>
  );
}
 
export default Add;
