import React, { Component } from "react";
import "../App.css";
import Swal from "sweetalert2";

export default class Name extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }

  getName = () => {
    Swal.mixin({
      input: "text",
      confirmButtonText: "Next &rarr;",
      showCancelButton: true,
      progressSteps: [""]
    })
      .queue([
        {
          title: "Halo, Siapa namamu?",
          text: ""
        }
      ])
      .then(result => {
        console.log(result);

        if (result.value) {
          let answers = result.value[0];
          console.log(answers);
          this.setState({
            name: answers
          });
          Swal.fire({
            title: "Keren!",
            html: `
            Selamat datang
            <pre><code>${answers}</code></pre>
          `,
            confirmButtonText: "Lovely!"
          });
        }
      });
  };

  componentDidMount() {
    this.getName();
  }
  render() {
    let timex = new Date().getHours();
    let pagi = timex > 0 && timex < 9;
    let pagii = timex >= 0 && timex < 9;
    let siang = timex >= 9 && timex < 16;
    let sore = timex >= 16 && timex < 18;
    let malam = timex >= 18 && timex < 24;

    if (pagi) {
      return (
        <div className="iblue">
          <p>Selamat Pagi {this.state.name}, Semoga Harimu Menyenangkan</p>
        </div>
      );
    } else if (pagii) {
      return (
        <div className="iblue">
          <p>Selamat Pagi {this.state.name}, Semoga Harimu Menyenangkan</p>
        </div>
      );
    } else if (siang) {
      return (
        <div className="iblue">
          <p>Selamat Siang {this.state.name}, Semoga Tetap Semangat</p>
        </div>
      );
    } else if (sore) {
      return (
        <div className="iblue">
          <p>Selamat Sore {this.state.name}, Jangan Lupa Istirahat</p>
        </div>
      );
    } else if (malam) {
      return (
        <div className="iblue">
          <p>Selamat Malam {this.state.name}, Selamat tidur</p>
        </div>
      );
    } else {
      return <h1>404</h1>;
    }
  }
}
