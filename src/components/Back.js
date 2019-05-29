import React from "react";
import Title from "./components/Title.js"
import Form from "./components/Form.js"
import Weather from "./components/Weather.js"
import Google from "./components/Google.js"
const API_KEY = "3e0e0c8dac80ba6a28f1b102567c1e71";
const GOOGLE_API = "9adf6fb9433e3a852fbfc40eba607eac81da1431";

class App extends React.Component{
  state={
    temperature: undefined,
    city: undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined
  }
  getWeather = async(e) => {
    e.preventDefault();
    const city= e.target.elements.city.value;
    const country= e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    const data = await api_call.json();
    if(city && country)
    {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity:data.main.humidity,
        description:data.weather[0].description
      });
    }
    else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity:undefined,
        description:undefined,
        error: "Enter the Values"
      });
    }

  }
  render(){
    return (
      <div>
        <div classname="wrapper">
          <div classname="main">
            <div classname="container">
              <div classname="row">
                <div classname="col-xs-5 title-container">
                  <Title />
                  </div>
                <div classname="col-xs-7 form-container">
                <Form getWeather={this.getWeather}/>
                <Weather temperature ={this.state.temperature}
                         city={this.state.city}
                         country={this.state.country}
                         humidity={this.state.humidity}
                         description={this.state.description}
                         error={this.state.error}
                />
                <Google />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
