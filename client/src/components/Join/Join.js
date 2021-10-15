import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Join.css'

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">

                <h1 className="heading">Join The Private Room</h1>

                <div><input type="text" className="joinInput" placeholder="Enter Your Name" onChange={(event) => { setName(event.target.value) }} /></div>

                <div><input type="text" className="joinInput" placeholder="Enter Your Room Code" onChange={(event) => { setRoom(event.target.value) }} /></div>

                <Link onClick={(event) => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>

                    <button className="button mt-20" type="submit">Sign In</button>
                    
                </Link>
            </div>
        </div>
    )
}

export default Join;