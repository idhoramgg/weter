import React, { Component } from "react";

export default class Name extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }

  getName = () => {
    let nameUser = prompt("What is your name ?");
    this.setState({
      name: nameUser
    });
  };

  componentDidMount() {
    this.getName();
  }
  render() {
    const ibBlue = {
      display: "inline-block",
      color: "skyblue"
    };
    return (
      <div>
        <h1 style={ibBlue}>Welcome, {this.state.name}</h1>
      </div>
    );
  }
}
