import React, { useState } from 'react'

const FaveButton = ({id, handleLike}) => {
    const [faved, setFaved] = useState(false)

    const changeStarColour = () => {
        setFaved(faved => !faved)
        handleLike(id)
    }

    return (
        <>
            <span
                role="switch"
                id="fave"
                aria-checked={faved}
                style={{color: faved ? 'gold' : 'grey'}}
                onClick={changeStarColour}
                >★
            </span>
        </>
    )
}

export default FaveButton;
