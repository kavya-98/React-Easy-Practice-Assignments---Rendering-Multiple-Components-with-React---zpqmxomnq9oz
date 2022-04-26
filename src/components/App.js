import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [name, setname] = useState("abc");
  const [state, setstate] = useState("xyz");
  return (
    <div id="main">
      <div data-ns-test="project-name">{name}</div>
      <div data-ns-test="project-description">{state}</div>
    </div>
  );
};

export default App;
