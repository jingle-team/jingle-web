import React, { Component } from "react";
import HomeButton from "./HomeButton";
import AddButton from "./AddButton";
import SearchButton from "./SearchButton";

export class LeftSide extends Component {
  render() {
    return (
      <div id="left" className="p-1">
        <HomeButton />

        <AddButton />

        <SearchButton />
      </div>
    );
  }
}

export default LeftSide;
