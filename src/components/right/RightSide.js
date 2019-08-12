import React, { Component } from "react";
import FriendsNav from "./FriendsNav";
import FriendsTableHeader from "./FriendsTableHeader";
import FriendsTable from "./FriendsTable";
import ChatScreen from "./ChatScreen";

export class RightSide extends Component {
  render() {
    return (
      <div id="right" className="p-1">
        <ChatScreen />
      </div>
    );
  }
}

export default RightSide;

// <FriendsNav />
//
// <FriendsTableHeader />
//
// <FriendsTable />
