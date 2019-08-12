import React, { Component } from "react";
import phoneCallIcon from "../../img/phone-call.svg";
import videoCallIcon from "../../img/videocam-call.svg";
import onlineIcon from "../../img/online-icon.png";

export class ChatScreen extends Component {
  render() {
    return (
      <div>
        <div id="friend-chat-nav" className="friend-nav nav nav-tabs nav-fill">
          <div id="friend-name-and-status">
            <div>Friend 1</div>
            <img src={onlineIcon} alt="online icon" />
          </div>

          <div id="friend-action-container">
            <img
              src={phoneCallIcon}
              className="mr-2 action-icons mx-1"
              alt="Voice call"
            />
            <img
              src={videoCallIcon}
              className="mr-2 action-icons mx-1"
              alt="Video call"
            />
          </div>
        </div>

        <div id="friend-chat-container">
          <div id="chat-display" />

          <div id="comment-input" />
        </div>
      </div>
    );
  }
}

export default ChatScreen;

//#60C655
