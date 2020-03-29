import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Weather from "./Components/Weather";
import Time from "./Components/Time";
import Name from "./Components/Name";

// import ipMiddleware from "./helper/getIP";
//bg

function App() {
  let timex = new Date().getHours();
  let pagi = timex > 0 && timex < 9;
  let pagii = timex >= 0 && timex < 9;
  let siang = timex >= 9 && timex < 16;
  let sore = timex >= 16 && timex < 18;
  let malam = timex >= 18 && timex < 24;

  if (pagi || pagii || siang || sore) {
    return (
      <div className="body morning">
        <div className="App">
          <div className="box">
            <Name />
            <Time />
            <Weather />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="body night">
        <div className="App">
          <div className="box">
            <Name />
            <Time />
            <Weather />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
