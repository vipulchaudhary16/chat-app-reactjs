import React from 'react';

import './InfoBar.css'

import closeIcon from '../../icons/close.png'
import onlineIcon from '../../icons/online.png'

const InfoBar = ({room})=>(
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img src={onlineIcon} alt="Icon" className="onlineIcon" />
            <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
            <a className="closeLink" href="/"><img className="closeIcon" src={closeIcon} alt="Close" /></a>
        </div>
    </div>

)

export default InfoBar;