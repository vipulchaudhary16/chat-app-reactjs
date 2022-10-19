import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Join.css'
import appIcon from '../../icons/AppIcon.png'

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="main">
            <div className="iconDiv">
                <img className="appIcon" src={appIcon} alt="" />
                <p>VeerZa</p>
            </div>
            <div className="joinOuterContainer">

                <div className="joinInnerContainer">

                    <h1 className="heading">Welcome to VeerZa Chat Room</h1>

                    <div><input type="text" className="joinInput" placeholder="Enter Your Name" onChange={(event) => { setName(event.target.value) }} /></div>

                    <div><input type="text" className="joinInput" placeholder="Enter Your Room Code" onChange={(event) => { setRoom(event.target.value) }} /></div>

                    <Link onClick={(event) => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>

                        <button className="button mt-20" type="submit">Join the party</button>

                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Join;