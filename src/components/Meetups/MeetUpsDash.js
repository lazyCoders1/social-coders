import React, { Component } from "react";
import Geocode from "react-geocode";
import axios from "axios";
import MeetUp from "./MeetUp";
import PostMeetUp from "./PostMeetUp";
// import { MDBBtn } from 'mdbreact'

export default class CreateMeetUps extends Component {
  constructor() {
    super();

    this.state = {
      meetUpPosts: [],
      toggle: false
    };
    Geocode.setApiKey(process.env.GOOGLE_API_KEY);
    Geocode.enableDebug();
  }
  findLocation = address => {
    Geocode.fromAddress(address).then(res => {
      const { lat, lng } = res.results[0].geometry.location;
      console.log(lat, lng);
    });
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    axios.get("/api/meetups").then(res => {
      this.setState({ meetUpPosts: res.data });
      console.log("getPosts (MeetUpsDash.js) ", res.data)
    });
  };

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
        this.getPosts();
      })
      .catch(err => {
        alert(err.res.data.message);
      });
  };
  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    // console.log(this.state.meetUpPosts)
    const meetUp = this.state.meetUpPosts.map(el => {
      return (
        <MeetUp key={el.id} meetUpPost={el} deletePost={this.deletePost} />
      );
    });

    return (
      <div className="d-flex  justify-content-center align-content-around flex-wrap bd-highlight example-parent">
        {/* <h1>meetupjunk</h1> */}
        {/* <MDBBtn color="warning" size="sm" onClick={() => this.toggle()}>
          add a meetup??
        </MDBBtn> */}
        {meetUp}
        {this.state.toggle ? (
          this.state.meetUpPosts.map(el => {
              console.log(el)
              return (
                <PostMeetUp
                  key={el.id}
                  meetUpPost={el}
                  postMeetUp={this.submitPost}
                  handleChange={this.handleChange}
                />
              )
            })
          // <PostMeetUp className="" />
        ) : null}
      </div>
    );
  }
}
