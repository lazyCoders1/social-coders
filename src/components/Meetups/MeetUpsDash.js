import React, { Component } from 'react'
import Geocode from 'react-geocode'
import axios from 'axios'
import MeetUp from './MeetUp'
import PostMeetUp from './PostMeetUp'
import { MDBBtn } from 'mdbreact'

export default class CreateMeetUps extends Component {
  constructor() {
    super()

    this.state = {
      meetUpPosts: [],
      toggle: false
    }
    Geocode.setApiKey(process.env.GOOGLE_API_KEY)
    Geocode.enableDebug()
  }
  findLocation = address => {
    Geocode.fromAddress(address).then(res => {
      const { lat, lng } = res.results[0].geometry.location
      console.log(lat, lng)
    })
  }

  componentDidMount() {
    this.getPosts()
  }

  getPosts = () => {
    axios.get('/api/meetups').then(res => {
      this.setState({ meetUpPosts: res.data })
      // console.log(res.data)
    })
  }

  submitPost = () => {
    axios
      .post('/api/meetups')
      .then(res => {
        alert(res.data.message)
      })
      .catch(err => alert(err.res.data.message))
  }
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

  render() {
    // console.log(this.state.meetUpPosts)
    const meetUp = this.state.meetUpPosts.map(el => {
      return <MeetUp key={el.id} meetUpPost={el} deletePost={this.deletePost} />
    })
    const postMeetUp = this.state.meetUpPosts.map(el => {
      return (
        <PostMeetUp key={el.id} meetUpPost={el} postMeetUp={this.submitPost} />
      )
    })

    return (
      <div>
        <h1>meetupjunk</h1>
        <MDBBtn color="warning" size="sm" onClick={() => this.toggle()}>
          add a meetup??
        </MDBBtn>
        {meetUp}
        {this.state.toggle ? postMeetUp : null}
      </div>
    )
  }
}
