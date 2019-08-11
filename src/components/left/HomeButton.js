import React, { Component } from "react";
import appIcon from "../../img/speech-bubble.svg";

export class HomeButton extends Component {
  render() {
    return (
      <div>
        <img
          id="btn-home"
          className="btn left-icons m-2"
          alt="Home"
          title="Home"
          src={appIcon}
        />
      </div>
    );
  }
}

export default HomeButton;
