import { useParams } from 'react-router-dom'
import useAxios from '../../hooks/useAxios';
import { useNavigate } from 'react-router-dom'

function Artist() {
  const { id } = useParams()
  const { data: track, isPending } = useAxios('https://music-app-db-kd.herokuapp.com/artists/' + id);
  const navigate = useNavigate()
  const handleClick = () => {
    fetch('https://music-app-db-kd.herokuapp.com/artists/' + track.id, {
      method: 'DELETE'
    }).then(() => {
      navigate('/');
    }) 
  }

  return (
    
    <div className='track-info'>
      { isPending && <div>Loading...</div> }
      { track && (
        <article>
          <h2>{ track.artist }</h2>
          <h3>{ track.name }</h3>
          <h3>Released in { track.year }</h3>
          <div>{ track.info }</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
}

export default Artist;
