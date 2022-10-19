import React from 'react';
import {BsWhatsapp} from 'react-icons/bs'
import {ImExit} from 'react-icons/im'

import './InfoBar.css'

import closeIcon from '../../icons/close.png'
import onlineIcon from '../../icons/online.png'

const InfoBar = ({room})=>(
    <div className="infoBar">
        <div className="leftInnerContainer">
            <BsWhatsapp className="onlineIcon"/>
            <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
            <a className="closeLink" href="/">
            <button >Leave Chat</button>
            </a>
        </div>
    </div>

)

export default InfoBar;