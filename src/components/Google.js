import { GoogleComponent } from 'react-google-location'

import React, { Component } from 'react';



const API_KEY = "9adf6fb9433e3a852fbfc40eba607eac81da1431"

class Google extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: null,
    };
  }

  render() {
    return (
      <div >
         <GoogleComponent

          apiKey={API_KEY}
          language={'en'}
          country={'country:in|country:us'}
          coordinates={true}
          locationBoxStyle={'custom-style'}
          locationListStyle={'custom-style-list'}
          onChange={(e) => { this.setState({ place: e }) }} />
      </div>

    )
  }
}


export default Google;
