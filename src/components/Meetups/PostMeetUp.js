import React from 'react'
import { MDBInput, MDBBtn, MDBContainer, MDBCard } from 'mdbreact'
import { Component } from 'react'
import axios from 'axios'

export default class PostMeetUp extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      img: '',
      date: '',
      time: '',
      description: '',
      street: '',
      city: '',
      state: '',
      zipcode: ''
    }
  }

  addPost = () => {
    const {
      title,
      img,
      date,
      time,
      description,
      street,
      state,
      zipcode
    } = this.state
    axios
      .post('/api/meetups', {
        title,
        img,
        date,
        time,
        description,
        street,
        state,
        zipcode
      })
      .then(res => {
        this.setState({
          title: '',
          img: '',
          date: '',
          time: '',
          description: '',
          street: '',
          city: '',
          state: '',
          zipcode: ''
        })
      })
  }

  render() {
    return (
      <div>
        <MDBContainer>
          <MDBCard>
            <MDBInput
              type="text"
              value={this.state.title}
              label="title"
              icon="signature"
              style={{ width: '35vw', margin: '0 0 8px 30px', padding: '2px' }}
            />
            <MDBInput
              type="text"
              value={this.state.img}
              label="img"
              icon="images"
              style={{ width: '35vw', margin: '0 0 8px 30px', padding: '2px' }}
            />
            <MDBInput
              type="text"
              value={this.state.date}
              label="date"
              icon="calendar-alt"
              style={{ width: '35vw', margin: '0 0 8px 30px', padding: '2px' }}
            />
            <MDBInput
              type="text"
              value={this.state.time}
              label="time"
              icon="clock"
              style={{ width: '35vw', margin: '0 0 8px 30px', padding: '2px' }}
            />
            <MDBInput
              type="text"
              value={this.state.description}
              label="description"
              icon="keyboard"
              style={{ width: '35vw', margin: '0 0 8px 30px', padding: '2px' }}
            />
            <MDBInput
              type="text"
              value={this.state.street}
              label="street"
              icon="road"
              style={{ width: '35vw', margin: '0 0 8px 30px', padding: '2px' }}
            />
            <MDBInput
              type="text"
              value={this.state.city}
              label="city"
              icon="city"
              style={{ width: '35vw', margin: '0 0 8px 30px', padding: '2px' }}
            />
            <MDBInput
              type="text"
              value={this.state.state}
              label="state"
              icon="map-pin"
              style={{ width: '35vw', margin: '0 0 8px 30px', padding: '2px' }}
            />
            <MDBInput
              type="text"
              value={this.state.zipcode}
              label="zipcode"
              icon="globe-americas"
              style={{ width: '35vw', margin: '0 0 8px 30px', padding: '2px' }}
            />
          </MDBCard>
          <MDBBtn onClick={this.addPost()} />
        </MDBContainer>
      </div>
    )
  }
}
