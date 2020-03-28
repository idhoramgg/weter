import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Weather from "./Components/Weather";
import Time from "./Components/Time";
import Name from "./Components/Name";

// import ipMiddleware from "./helper/getIP";
//bg

function App() {
  console.log(window);

  let timezone = new Date().toLocaleTimeString();
  let pagi = "AM";
  let malam = "PM";
  // console.log(timezone.includes(pagi));

  if (timezone.includes(pagi)) {
    return (
      <div className="body morning">
        <div className="App">
          <Name />
          <Time />
          <Weather />
        </div>
      </div>
    );
  } else if (timezone.includes(malam)) {
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
  } else {
    return <h1>error</h1>;
  }
}

export default App;
