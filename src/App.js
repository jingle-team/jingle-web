import React from "react";
import "./app-layout.css";
import LeftSide from "./components/left/LeftSide";
import MiddleSide from "./components/middle/MiddleSide";
import RightSide from "./components/right/RightSide";

function App() {
  return (
    <div id="container">
      <LeftSide />

      <MiddleSide />

      <RightSide />
    </div>
  );
}

export default App;
