import React, { Component } from "react";
import friendIcon from "../../img/friends.svg";

export class FriendsNav extends Component {
  render() {
    return (
      <ul id="friend-nav" className="nav nav-tabs nav-fill p-1">
        <li className="nav-item mr-2">
          <div id="friend-tag" className="pt-2">
            <img id="friend-icon" src={friendIcon} alt="friends icon" />
            <div id="friend-title" className="ml-2">
              Friends
            </div>
          </div>
        </li>

        <li className="nav-item">
          <div className="nav-link friends-nav-link">Online</div>
        </li>

        <li className="nav-item">
          <div className="nav-link friends-nav-link">All</div>
        </li>

        <li className="nav-item">
          <div className="nav-link friends-nav-link">Pending</div>
        </li>

        <li className="nav-item">
          <div className="nav-link friends-nav-link">Blocked</div>
        </li>

        <li className="nav-item">
          <div className="btn btn-success">Add Friends</div>
        </li>
      </ul>
    );
  }
}

export default FriendsNav;
