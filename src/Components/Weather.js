import React from "react";
import ReactWeather from "react-open-weather";
import "../App.css";
import axios from "axios";
export default class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "",
      loading: true,
      lat: null,
      lon: null
    };
  }
  // componentDidMount() {
  //   // this.getIP();
  //   this.getLocation();
  // }
  // getLocation = async () => {
  //   let result = await axios.get(
  //     `http://api.ipstack.com/check?access_key=6bec36e242f15bca37761f998bd88d62`
  //   );
  //   let latt = result.data.latitude.toString();
  //   let lonn = result.data.longitude.toString();

  //   // let resJson = JSON.stringify(result);
  //   // console.log(city);

  //   this.setState({
  //     ...this.state,
  //     lat: latt,
  //     lon: lonn
  //   });
  // };

  // getIP = () => {
  //   axios
  //     .get(
  //       `https://api.openweathermap.org/data/2.5/weather?q=Depok &appid=${this.state.API}`
  //     )
  //     .then(res => console.log(res));
  // };

  render() {
    console.log(ReactWeather);
    console.log(this.state.lat);
    console.log(this.state.lon);

    return (
      <ReactWeather
        style={{ background: "gray" }}
        forecast="today"
        unit="metric"
        apikey="3674b65e6c4f839884c64ddd0c1258bb"
        type="city"
        city="Jakarta"
      />
    );
  }
}
