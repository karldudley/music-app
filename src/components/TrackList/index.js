import React from 'react';
import { Link } from "react-router-dom"
import { FaveButton } from '../../components'

const TrackList = ({ tracks, handleLike }) => {
    return ( 
        <div className="track-list">
            {tracks.map((track) => (
                <div className="track-details" key={track.id}>
                    <Link to={`/artists/${track.id}`}>
                        <h2>{ track.artist }</h2>
                        <h3>{ track.name }</h3>
                        <h3>{ track.year }</h3>
                        <h3>{ (track.liked ? "Likes: 1" : "Likes: 0")}</h3>
                    </Link>
                    <FaveButton id={track.id} handleLike={handleLike}/>
                </div>
            ))}
        </div>
     );
}
 
export default TrackList;
