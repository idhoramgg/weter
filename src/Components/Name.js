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
    let timex = new Date().getHours();
    let pagi = timex > 0 && timex < 9 && timex >= 0 && timex < 9;
    let siang = timex >= 9 && timex < 16;
    let sore = timex >= 16 && timex < 18;
    let malam = timex >= 18 && timex < 24;

    const ibBlue = {
      display: "inline-block",
      color: "black",
      fontSize: "100px",
      fontFamily: `Dancing Script, cursive`,
      fontWeight: 200,
      textShadow: `-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white`
    };

    if (pagi) {
      return (
        <div>
          <h1 style={ibBlue}>
            Selamat Pagi {this.state.name}, Semoga Harimu Menyenangkan
          </h1>
        </div>
      );
    } else if (siang) {
      return (
        <div>
          <h1 style={ibBlue}>
            Selamat Siang {this.state.name}, Semoga Tetap Semangat
          </h1>
        </div>
      );
    } else if (sore) {
      return (
        <div>
          <h1 style={ibBlue}>
            Selamat Sore {this.state.name}, Jangan Lupa Istirahat
          </h1>
        </div>
      );
    } else if (malam) {
      return (
        <div>
          <h1 style={ibBlue}>Selamat Malam {this.state.name}, Selamat tidur</h1>
        </div>
      );
    } else {
      return <h1>404</h1>;
    }
  }
}
