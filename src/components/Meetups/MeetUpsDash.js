import React, { Component } from 'react'
import Maps from './Maps'
import axios from 'axios'
import MeetUp from './MeetUp'

import {
  MDBJumbotron,
  MDBBtn,
  // MDBCol,
  // MDBCardTitle,
  // MDBContainer,
  MDBRow,
  MDBIcon,
  MDBInput

  // MDBAnimation
} from 'mdbreact'
import ScrollAnimation from 'react-animate-on-scroll'
import './MeetUpsDash.scss'
import { connect } from "react-redux";

export class CreateMeetUps extends Component {
  constructor() {
    super()

    this.state = {
      meetUpPosts: [],
      toggle: false,
      title: '',
      img: '',
      date: '',
      time: '',
      description: '',
      street: '',
      city: '',
      state: '',
      zipcode: '',
      search: ''
    }
  }

  componentDidMount() {
    this.getPosts()
  }

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
    const {id: author_id} = this.props
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
    this.toggle()
    this.getPosts()
    this.refreshPage()
  }

  getPosts = () => {
    axios.get('/api/meetups').then(res => {
      this.setState({ meetUpPosts: res.data })
      // console.log('getPosts (MeetUpsDash.js) ', res.data)
    })
  }

  // submitPost = () => {
  //   axios
  //     .post('/api/meetups')
  //     .then(res => {
  //       alert(res.data.message)
  //     })
  //     .catch(err => alert(err.res.data.message))
  // }
  deletePost = id => {
    axios
      .delete(`api/meetups/${id}`)
      .then(() => {
        this.getPosts()
      })
      .catch(err => {
        alert(err.res.data.message)
      })
  }
  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }
  handleInput = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  refreshPage = () => {
    window.location.reload(false)
  }

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  render() {
    // console.log(this.props.id)
    let filterByValue = this.state.meetUpPosts.filter(o => {
      return Object.keys(o).some(k => {
        return o[k].toString().toLowerCase().includes(this.state.search.toLowerCase())
      })
    })
    const meetUp = filterByValue.map((el, i) => (
      <MeetUp key={el.id} meetUpPost={el} deletePost={this.deletePost} />  
    ))
    // console.log(this.state.meetUpPosts)
    
    return (
      <div>
         <input
          className="search"
          placeholder="Search..."
          type="text"
          onChange={this.handleChange}
          value={this.state.search}
        />
        {this.state.toggle ? (
          <div>
            <div className="blur2" />
            <section className="newPost">
              <div>
                <div className="cancel" onClick={() => this.toggle()}>
                  X
                </div>
                <MDBInput
                  name="title"
                  type="text"
                  value={this.state.title}
                  label="title"
                  icon="signature"
                  onChange={e => this.handleInput(e)}
                  style={{ margin: '0 0 8px 30px', padding: '2px' }}
                />
                <MDBInput
                  name="img"
                  type="text"
                  value={this.state.img}
                  label="img"
                  icon="images"
                  onChange={this.handleInput}
                  style={{ margin: '0 0 8px 30px', padding: '2px' }}
                />
                <MDBInput
                  name="date"
                  type="text"
                  value={this.state.date}
                  label="date"
                  icon="calendar-alt"
                  onChange={this.handleInput}
                  style={{ margin: '0 0 8px 30px', padding: '8px' }}
                />
                <MDBInput
                  name="time"
                  type="text"
                  value={this.state.time}
                  label="time"
                  icon="clock"
                  onChange={this.handleInput}
                  style={{ margin: '0 0 8px 30px', padding: '2px' }}
                />
                <MDBInput
                  name="description"
                  type="text"
                  value={this.state.description}
                  label="description"
                  icon="keyboard"
                  onChange={this.handleInput}
                  style={{ margin: '0 0 8px 30px', padding: '2px' }}
                />
                <MDBInput
                  name="street"
                  type="text"
                  value={this.state.street}
                  label="street"
                  icon="road"
                  onChange={this.handleInput}
                  style={{ margin: '0 0 8px 30px', padding: '2px' }}
                />
                <MDBInput
                  name="city"
                  type="text"
                  value={this.state.city}
                  label="city"
                  icon="city"
                  onChange={this.handleInput}
                  style={{ margin: '0 0 8px 30px', padding: '2px' }}
                />
                <MDBInput
                  name="state"
                  type="text"
                  value={this.state.state}
                  label="state"
                  icon="map-pin"
                  onChange={this.handleInput}
                  style={{ margin: '0 0 8px 30px', padding: '2px' }}
                />
                <MDBInput
                  name="zipcode"
                  type="text"
                  value={this.state.zipcode}
                  label="zipcode"
                  icon="globe-americas"
                  onChange={this.handleInput}
                  style={{ margin: '0 0 8px 30px', padding: '2px' }}
                />
              </div>
              <MDBBtn
                outline
                color="white"
                className="mb-5"
                onClick={() => this.addPost()}
              >
                Post!
              </MDBBtn>
            </section>
          </div>
        ) : null}
        <div className="">
          <header className="header-meetup-dash">
            <MDBJumbotron
              fluid
              className="jtron"
              style={{
                maxHeight: '10rem',
                padding: '.1rem',
                backgroundColor: '#34A9DC',
                margin: '1rem 0 0 0',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <ScrollAnimation animateIn="fadeInLeft">
              {/* <ScrollAnimation animateIn="fadeInLeft" delay=".5s"> */}
                <MDBIcon fab icon="meetup" className="meetup-dash-icon" />
              </ScrollAnimation>
              <div className="create">
                <MDBRow>
                  <ScrollAnimation className="bounceIn delay-1s">
                    <p className="meetups-header-text">MEET UPS </p>
                    {/* {console.log("hit", this.state.post)} */}
                  </ScrollAnimation>
                </MDBRow>
              </div>
              <ScrollAnimation className="bounceIn delay-1s">
                <MDBBtn
                  className="post-meetup-btn"
                  color="white"
                  size="sm"
                  onClick={() => this.toggle()}
                >
                  Post MeetUp
                </MDBBtn>
              </ScrollAnimation>
            </MDBJumbotron>
          </header>
          <div className="d-flex  justify-content-center align-content-around flex-wrap bd-highlight example-parent">
            {meetUp}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  const { id } = reduxState;
  return { id };
}

export default connect(mapStateToProps)(CreateMeetUps)
