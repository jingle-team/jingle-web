import React, { Component } from "react";

export class FriendsTableHeader extends Component {
  render() {
    return (
      <div id="friend-table-header" className="p-1">
        <div id="friend-column-name">Name</div>

        <span className="friend-header-separator">|</span>

        <div id="friend-column-status">Status</div>

        <span className="friend-header-separator">|</span>

        <div id="friend-column-actions" className="pr-3">
          Action
        </div>
      </div>
    );
  }
}

export default FriendsTableHeader;
