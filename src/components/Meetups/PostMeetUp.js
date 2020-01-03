import React from 'react'
import { MDBInput, MDBBtn, MDBContainer, MDBCard } from 'mdbreact'
import { Component } from 'react'
import axios from 'axios'


class PostMeetUp extends Component {
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
  // componentDidMount = () => {
  //   console.log(props.id)
  // }

  addPost = () => {
    const {
      title,
      img,
      date,
      time,
      description,
      street,
      city,
      state,
      zipcode
    } = this.state
    
    console.log(author_id)
    axios
      .post('/api/meetups', {
        title,
        img,
        date,
        time,
        description,
        street,
        city,
        state,
        zipcode,
        author_id
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
    console.log(this.props.id)
    return (
      <div>
        <MDBContainer>
          <MDBCard>
            <MDBInput
              type="text"
              value={this.state.title}
              label="title"
              icon="signature"
              style={{ margin: '0 0 8px 30px', padding: '2px' }}
            />
            <MDBInput
              type="text"
              value={this.state.img}
              label="img"
              icon="images"
              style={{ margin: '0 0 8px 30px', padding: '2px' }}
            />
            <MDBInput
              type="text"
              value={this.state.date}
              label="date"
              icon="calendar-alt"
              style={{ margin: '0 0 8px 30px', padding: '2px' }}
            />
            <MDBInput
              type="text"
              value={this.state.time}
              label="time"
              icon="clock"
              style={{ margin: '0 0 8px 30px', padding: '2px' }}
            />
            <MDBInput
              type="text"
              value={this.state.description}
              label="description"
              icon="keyboard"
              style={{ margin: '0 0 8px 30px', padding: '2px' }}
            />
            <MDBInput
              type="text"
              value={this.state.street}
              label="street"
              icon="road"
              style={{ margin: '0 0 8px 30px', padding: '2px' }}
            />
            <MDBInput
              type="text"
              value={this.state.city}
              label="city"
              icon="city"
              style={{ margin: '0 0 8px 30px', padding: '2px' }}
            />
            <MDBInput
              type="text"
              value={this.state.state}
              label="state"
              icon="map-pin"
              style={{ margin: '0 0 8px 30px', padding: '2px' }}
            />
            <MDBInput
              type="text"
              value={this.state.zipcode}
              label="zipcode"
              icon="globe-americas"
              style={{ margin: '0 0 8px 30px', padding: '2px' }}
            />
          </MDBCard>
          <MDBBtn onClick={this.addPost()} />
        </MDBContainer>
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  const { id } = reduxState;
  return { id };
}

export default connect(mapStateToProps)(PostMeetUp)
