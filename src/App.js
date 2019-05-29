import React from "react";
import Title from "./components/Title.js"
import Form from "./components/Form.js"
import Weather from "./components/Weather.js"
const API_KEY = "3e0e0c8dac80ba6a28f1b102567c1e71";
//const GOOGLE_API = "AIzaSyDveBffHbDZ56W7vGOLtE6vlnFUuzoatN0";

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
    const location= e.target.elements.location.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`)
    const data = await api_call.json();
    if(location)
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
                  <Title />
                  </div>
                <Form getWeather={this.getWeather}/>
                <Weather temperature ={this.state.temperature}
                         city={this.state.city}
                         country={this.state.country}
                         humidity={this.state.humidity}
                         description={this.state.description}
                         error={this.state.error}
                />

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
