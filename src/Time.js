import React, { Component } from "react";

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
    const ibBlue = {
      display: "inline-block",
      color: "skyblue"
    };
    return (
      <div>
        <h2 style={ibBlue}>{this.state.hours} :</h2>
        <h2 style={ibBlue}>{this.state.mins} :</h2>{" "}
        <h2 style={ibBlue}>{this.state.secs}</h2>
      </div>
    );
  }
}

export default Time;
