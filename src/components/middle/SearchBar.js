import React, { Component } from "react";

export class SearchBar extends Component {
  render() {
    return (
      <div id="middle-search-bar-container">
        <input
          id="middle-search-bar"
          className="p-1 mx-auto form-control"
          type="text"
          placeholder="Find or start a conversation"
        />
      </div>
    );
  }
}

export default SearchBar;
