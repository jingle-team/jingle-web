import React, { Component } from "react";

export class Contacts extends Component {
  render() {
    return (
      <div id="middle-main" className="mt-2">
        <header id="middle-main-header">Direct Messages</header>

        <div
          style={{ color: "white", display: "flex", flexDirection: "column" }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>Friend 1</div>
            <div>Online</div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>Friend 2</div>
            <div>Offline</div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>Friend 3</div>
            <div>Busy</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
