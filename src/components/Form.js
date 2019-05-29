import React from "react";
import {GoogleComponent} from "react-google-location";


const Form = props =>(
  <div>

    <form onSubmit={ props.getWeather}>
      <input type= "text" name="city" id="city" placeholder="City"/>
      <input type= "text" name="country" placeholder="Country"/>
      <button>Search</button>
    </form>
  </div>
);

export default Form
