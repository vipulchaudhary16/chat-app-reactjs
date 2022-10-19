import React from "react";
import ReactEmoji from "react-emoji";

import "./Message.css";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <div className="messageBox sentBg">
        <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox receiveBg">
        <p className="sentText-sender">{user}</p>
        <p className="messageText">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  );
};

export default Message;
