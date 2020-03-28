import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { Weather } from "./Weather";
import Time from "./Time";
import Name from "./Name";

function App() {
  const api = process.env.REACT_APP_PUB_KEY;
  console.log(api);
  return (
    <div className="App">
      <Name />
      <Time />
      <Weather />
    </div>
  );
}

export default App;
