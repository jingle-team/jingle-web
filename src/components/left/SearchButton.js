import React, { Component } from "react";
import searhIcon from "../../img/magnifying-glass.svg";

export class SearchButton extends Component {
  render() {
    return (
      <div>
        <img
          id="btn-find-server"
          className="btn left-icons mx-2 my-1"
          alt="Find Server"
          title="Find Server"
          src={searhIcon}
        />
      </div>
    );
  }
}

export default SearchButton;
