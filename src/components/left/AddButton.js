import React, { Component } from "react";
import addIcon from "../../img/add.svg";

export class AddButton extends Component {
  render() {
    return (
      <div>
        <img
          id="btn-add-server"
          className="btn left-icons  mx-2 my-1"
          alt="Add a Server"
          title="Add a Server"
          src={addIcon}
        />
      </div>
    );
  }
}

export default AddButton;
