import React from "react";
import "./Input.css";
import sendIcon from "../../icons/send.png";
import { MdSend } from "react-icons/md";

const Input = ({ message, setMessage, sendMessage }) => (
    <div className="input-div">

    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="Type a Message..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
        />
      <div className="sendButton">
      <MdSend className="sendIcon" onClick={(event) => sendMessage(event)} />
      </div>
    </form>
        </div>
);

export default Input;
