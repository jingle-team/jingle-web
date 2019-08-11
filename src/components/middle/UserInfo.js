import React, { Component } from "react";
import defaultAvatar from "../../img/avatar-default.svg";
import muteIcon from "../../img/muted-icon.svg";
import deafenIcon from "../../img/deafen-icon.svg";
import settingsIcon from "../../img/settings.svg";

export class UserInfo extends Component {
  render() {
    return (
      <div id="middle-user-container" className="p-1">
        <div id="user-avatar">
          <img src={defaultAvatar} alt="defaut avatar" />
        </div>

        <div id="user-name">TestName</div>

        <div id="user-action-container">
          <img
            className="user-actions mr-2"
            src={muteIcon}
            alt="mute icon"
            title="Mute"
          />
          <img
            className="user-actions mr-2"
            src={deafenIcon}
            alt="deafen icon"
            title="Deafen"
          />
          <img
            className="user-actions"
            src={settingsIcon}
            alt="settings icon"
            title="Settings"
          />
        </div>
      </div>
    );
  }
}

export default UserInfo;
