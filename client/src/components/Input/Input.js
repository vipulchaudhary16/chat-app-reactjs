import React from 'react';
import './Input.css'
import sendIcon from '../../icons/send.png'

const Input = ({ message , setMessage, sendMessage   }) => (
  <div className="formDiv">

  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a Message..."
      value={message}
      onChange={(event) => setMessage(event.target.value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
      />
    <button className="sendButton" onClick={event => sendMessage(event)}><img src={sendIcon} alt="Icon" className="onlineIcon" />
 </button>
  </form>
      </div>
)

export default Input;