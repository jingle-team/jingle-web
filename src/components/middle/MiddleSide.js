import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Contacts from "./Contacts";
import UserInfo from "./UserInfo";

export class MiddleSide extends Component {
  render() {
    return (
      <div id="middle" className="p-1">
        <SearchBar />

        <Contacts />

        <UserInfo />
      </div>
    );
  }
}

export default MiddleSide;
