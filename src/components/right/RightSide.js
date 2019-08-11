import React, { Component } from "react";
import FriendsNav from "./FriendsNav";
import FriendsTableHeader from "./FriendsTableHeader";
import FriendsTable from "./FriendsTable";

export class RightSide extends Component {
  render() {
    return (
      <div id="right" className="p-1">
        <FriendsNav />

        <FriendsTableHeader />

        <FriendsTable />
      </div>
    );
  }
}

export default RightSide;
