import React, { Component } from "react";
import "../App.css";
class Time extends Component {
  constructor() {
    super();
    this.state = {
      hours: null,
      mins: null,
      secs: null
    };
  }

  getTime = () => {
    const newHours = new Date().getHours();
    const newMins = new Date().getMinutes();
    const newSecs = new Date().getSeconds();

    setTimeout(this.getTime, 1000);

    this.setState({
      hours: newHours,
      mins: newMins,
      secs: newSecs
    });
  };

  componentDidMount() {
    this.getTime();
  }
  render() {
    return (
      <div className="boxhrs">
        <h2 className="hrs"> {this.state.hours}</h2> :
        <h2 className="hrs"> {this.state.mins} </h2>{" "}
        {/* <h2 className="hrs"> {this.state.secs}</h2> */}
      </div>
    );
  }
}

export default Time;
