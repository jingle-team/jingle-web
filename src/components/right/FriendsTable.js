import React, { Component } from "react";

export class FriendsTable extends Component {
  render() {
    return (
      <div id="friend-table">
        <div className="friends">
          <div className="friend-name">Friend 1</div>
          <div className="friend-status">Online</div>
          <div className="friend-action">Action icons here</div>
        </div>

        <div className="friends">
          <div className="friend-name">Friend 2</div>
          <div className="friend-status">Offline</div>
          <div className="friend-action">Action icons here</div>
        </div>

        <div className="friends">
          <div className="friend-name">Friend 3</div>
          <div className="friend-status">Busy</div>
          <div className="friend-action">Action icons here</div>
        </div>
      </div>
    );
  }
}

export default FriendsTable;
