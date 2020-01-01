import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react'
import Geocode from 'react-geocode'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class Maps extends Component {
  constructor() {
    super()

    this.state = {
      meetUpPosts: '',
      postDets: '',
      lat: '',
      lng: ''
    }
    Geocode.setApiKey('AIzaSyAF2ehHNVz4w3Q6wBLgY_zDICDGirXRoCE')
  }

  getPosts = () => {
    axios.get('/api/meetups').then(res => {
      const postDetails = res.data.filter(
        meetup => meetup.id == this.props.match.params.id
      )
      this.setState({
        meetUpPosts: res.data,
        postDets: postDetails[0]
      })
    })
  }

  getAddress = () => {
    const address = `${this.state.postDets.street}, ${this.state.postDets.city}, ${this.state.postDets.state} ${this.state.postDets.zipcode} `
    console.log(this.state.postDets)
    Geocode.fromAddress(`${address}`).then(
      response => {
        console.log(response)
        const { lat, lng } = response.results[0].geometry.location
        console.log(lat, lng)
        this.setState({
          lat: lat,
          lng: lng
        })
      },
      error => {
        console.log(error)
      }
    )
  }
  componentDidMount = () => {
    this.getPosts()
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.postDets !== this.state.postDets) {
      this.getAddress()
    }
  }
  render() {
    //console.log(this.state.postDets)
    const mapStyles = {
      width: '30vw',
      height: '40vh',
      margin: '2rem'
    }
    return (
      <div>
        {this.state.lng && (
          <Map
            google={this.props.google}
            zoom={15}
            style={mapStyles}
            initialCenter={{ lat: this.state.lat, lng: this.state.lng }}
          >
            <Marker position={{ lat: this.state.lat, lng: this.state.lng }}>
              <InfoWindow>
                <h1>testi test</h1>
              </InfoWindow>
            </Marker>
          </Map>
        )}
      </div>
    )
  }
}

export default withRouter(
  GoogleApiWrapper({
    apiKey: 'AIzaSyAF2ehHNVz4w3Q6wBLgY_zDICDGirXRoCE'
  })(Maps)
)
