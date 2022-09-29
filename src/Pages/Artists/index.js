import useAxios from '../../hooks/useAxios'

function Artists() {
  const { data: tracks, isPending } = useAxios('https://music-app-db-kd.herokuapp.com/artists')

  return (
    <div>
      { isPending && <div>Loading...</div> }
      {(tracks) && 
      
      <div className="track-list"> 
          {tracks.map((track) => (
              <div className="track-details" key={track.id}>
                  <a href={`https://www.youtube.com/results?autoplay=1&search_query=${track.name}_${track.artist}`}>
                    <h3>{ track.artist }</h3>
                  </a>
              </div>
          ))}
        </div>
      }
    </div>
  );
}

export default Artists;
