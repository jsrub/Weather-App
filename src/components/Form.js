import React from "react";

const Form = props =>(
  <div>
  <form onSubmit={ props.getWeather}>
  <div class="form-group">
      <input type= "text" class="form-control" name="location" id="location" placeholder="Location" />
  </div>
      <button type="submit" class="btn btn-primary">Search</button>
    </form>
  </div>
);

export default Form
