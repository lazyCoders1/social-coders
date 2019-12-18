import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

class MeetUps extends Component {
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
  apiKey: 'AIzaSyBTEz9tmLc2NzmQ6Aq_zt9qE3OjWgoiGRM'
})(MeetUps)
