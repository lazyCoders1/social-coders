import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import Geocode from 'react-geocode'

Geocode.setApiKey(process.env.GOOGLE_API_KEY)
Geocode.enableDebug()
Geocode.fromAddress('Dev Mountain').then(res => {
  const { lat, lng } = res.results[0].geometry.location
  console.log(lat, lng)
})

class MeetUps extends Component {
  constructor() {
    super()

    this.state = {
      title: '',
      img: '',
      description: '',
      date: '',
      street: '',
      city: '',
      state: '',
      zipcode: ''
    }
  }
  render() {
    const mapStyles = {
      width: '30vw',
      height: '40vh',
      margin: '2rem'
    }
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176 }}
        >
          <Marker
            position={{
              address: '1600+Amphitheatre+Parkway,+Mountain+View,+CA'
            }}
          />
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAF2ehHNVz4w3Q6wBLgY_zDICDGirXRoCE'
})(MeetUps)
