import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import Geocode from 'react-geocode'
import axios from 'axios'
import Profile from '../Profile/Profile'

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

  getMeetups = () => {
    axios
      .get('/api/meetups')
      .then(meetups => {
        this.setState({
          title: meetups.data.title,
          img: meetups.data.img,
          description: meetups.data.description,
          date: meetups.data.date,
          street: meetups.data.street,
          city: meetups.data.city,
          state: meetups.data.state,
          zipcode: meetups.data.zipcode
        })
      })
      .catch(err => {
        console.log(err)
      })
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
          <Marker position={{ lat: 47.444, lng: -122.176 }} />
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAF2ehHNVz4w3Q6wBLgY_zDICDGirXRoCE'
})(MeetUps)
