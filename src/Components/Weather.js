import React from "react";
import ReactWeather from "react-open-weather";
import "react-open-weather/lib/css/ReactWeather.css";
import axios from "axios";
export default class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "",
      city: undefined,
      API: process.env.REACT_APP_PUB_KEY
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://api.ipstack.com/check?access_key=6bec36e242f15bca37761f998bd88d62`
      )
      .then(res =>
        this.setState({
          city: res.data.city
        })
      );
    // .then(json => {
    //   this.setState({ data: json.ip });
    // });
  }
  render() {
    console.log(this.state.city);
    return (
      <div>
        <ReactWeather
          style={{ backgroundColor: "red" }}
          forecast="today"
          apikey={this.state.API}
          type="city"
          city={this.state.city}
        />
        {this.state.data}
      </div>
    );
  }
}
