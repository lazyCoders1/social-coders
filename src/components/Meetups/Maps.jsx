import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react'
import Geocode from 'react-geocode'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import './Maps.scss'
const { REACT_APP_GOOGLE_API_KEY } = process.env

class Maps extends Component {
  constructor() {
    super()

    this.state = {
      meetUpPosts: '',
      postDets: '',
      lat: '',
      lng: ''
    }
    Geocode.setApiKey(REACT_APP_GOOGLE_API_KEY)
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
    console.log(process.env.REACT_APP_GOOGLE_API_KEY)
    return (
      <div>
        {this.state.lng && (
          <div className="meetup_map">
            <Map
              google={this.props.google}
              zoom={13}
              initialCenter={{ lat: this.state.lat, lng: this.state.lng }}
            >
              <Marker position={{ lat: this.state.lat, lng: this.state.lng }}>
                <InfoWindow>
                  <h1>testi test</h1>
                </InfoWindow>
              </Marker>
            </Map>
          </div>
        )}
      </div>
    )
  }
}

export default withRouter(
  GoogleApiWrapper({
    apiKey: REACT_APP_GOOGLE_API_KEY
  })(Maps)
)
