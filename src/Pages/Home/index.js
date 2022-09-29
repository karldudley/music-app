import useAxios from '../../hooks/useAxios'
import { TrackList } from '../../components'


const Home = () => {
    const { data: tracks, setData: setTracks, isPending } = useAxios('https://music-app-db-kd.herokuapp.com/artists')

    const handleLike = (id) => {
        const newTracks = [...tracks];
        for (let i=0; i<newTracks.length; i++){
            if (newTracks[i].id === id){
                (newTracks[i].liked ? newTracks[i].liked=false : newTracks[i].liked=true)
            }
        }
        setTracks(tracks => tracks = [...newTracks]);
    }

    return ( 
    <div className="track-list">
        {/* only output once the tracks have been collected from the db. Also show a loading message as data is collected */}
        { isPending && <div>Loading...</div> }
        {tracks && <TrackList tracks={tracks} handleLike={handleLike} />}
        {/* <TrackList tracks={tracks.filter((track) => track.year >= 2000)} playlist="Modern Friday Night Bangers"/> */}
    </div>
    );
}

export default Home;
