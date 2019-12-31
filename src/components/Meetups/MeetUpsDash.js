import React, { Component } from "react";

import Geocode from "react-geocode";
import axios from "axios";
import MeetUp from "./MeetUp";

import {
  MDBJumbotron,
  MDBBtn,
  MDBCol,
  MDBCardTitle,
  MDBContainer,
  MDBRow,
  MDBIcon,
  MDBInput
} from "mdbreact";
import "./MeetUpsDash.scss";

export default class CreateMeetUps extends Component {
  constructor() {
    super();

    this.state = {
      meetUpPosts: [],
      toggle: false,
      title: "",
      img: "",
      date: "",
      time: "",
      description: "",
      street: "",
      city: "",
      state: "",
      zipcode: ""
    };
    console.log("meetUpPosts", this.state.meetUpPosts);
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
    } = this.state;
    axios
      .post("/api/meetups", {
        title,
        img,
        date,
        time,
        description,
        street,
        city,
        state,
        zipcode
      })
      .then(res => {
        this.setState({
          title: "",
          img: "",
          date: "",
          time: "",
          description: "",
          street: "",
          city: "",
          state: "",
          zipcode: ""
        });
      });
    this.toggle();
    this.getPosts();
    this.refreshPage();
  };

  getPosts = () => {
    axios.get("/api/meetups").then(res => {
      this.setState({ meetUpPosts: res.data });
      console.log("getPosts (MeetUpsDash.js) ", res.data);
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
  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  refreshPage = () => {
    window.location.reload(false);
  };

  render() {
    // console.log(this.state.meetUpPosts)
    const meetUp = this.state.meetUpPosts.map(el => {
      return (
        <MeetUp key={el.id} meetUpPost={el} deletePost={this.deletePost} />
      );
    });

    return (
      <div>
        <header
          style={{
            display: "flex",
            justifyContent: "row"
          }}
        >
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <MDBJumbotron style={{ padding: 0 }}>
                  <MDBCol
                    className="text-white text-center py-5 px-4 my-5"
                    style={{
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundImage: `url(https://images.unsplash.com/photo-1500021804447-2ca2eaaaabeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)`
                    }}
                  >
                    <MDBCol className="py-5">
                      <MDBCardTitle
                        className="h1-responsive pt-3 m-5 font-bold"
                        style={{ fontSize: "5rem" }}
                      >
                        Wanna Meet Up?
                      </MDBCardTitle>
                      <MDBBtn
                        outline
                        color="white"
                        className="mb-5"
                        onClick={() => this.toggle()}
                      >
                        <MDBIcon icon="users" className="mr-2"></MDBIcon> Create
                        a Meet Up
                      </MDBBtn>
                    </MDBCol>
                  </MDBCol>
                </MDBJumbotron>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </header>
        {this.state.toggle ? (
          <div>
            <div className="blur" />
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
                  style={{ margin: "0 0 8px 30px", padding: "2px" }}
                />
                <MDBInput
                  name="img"
                  type="text"
                  value={this.state.img}
                  label="img"
                  icon="images"
                  onChange={this.handleInput}
                  style={{ margin: "0 0 8px 30px", padding: "2px" }}
                />
                <MDBInput
                  name="date"
                  type="text"
                  value={this.state.date}
                  label="date"
                  icon="calendar-alt"
                  onChange={this.handleInput}
                  style={{ margin: "0 0 8px 30px", padding: "8px" }}
                />
                <MDBInput
                  name="time"
                  type="text"
                  value={this.state.time}
                  label="time"
                  icon="clock"
                  onChange={this.handleInput}
                  style={{ margin: "0 0 8px 30px", padding: "2px" }}
                />
                <MDBInput
                  name="description"
                  type="text"
                  value={this.state.description}
                  label="description"
                  icon="keyboard"
                  onChange={this.handleInput}
                  style={{ margin: "0 0 8px 30px", padding: "2px" }}
                />
                <MDBInput
                  name="street"
                  type="text"
                  value={this.state.street}
                  label="street"
                  icon="road"
                  onChange={this.handleInput}
                  style={{ margin: "0 0 8px 30px", padding: "2px" }}
                />
                <MDBInput
                  name="city"
                  type="text"
                  value={this.state.city}
                  label="city"
                  icon="city"
                  onChange={this.handleInput}
                  style={{ margin: "0 0 8px 30px", padding: "2px" }}
                />
                <MDBInput
                  name="state"
                  type="text"
                  value={this.state.state}
                  label="state"
                  icon="map-pin"
                  onChange={this.handleInput}
                  style={{ margin: "0 0 8px 30px", padding: "2px" }}
                />
                <MDBInput
                  name="zipcode"
                  type="text"
                  value={this.state.zipcode}
                  label="zipcode"
                  icon="globe-americas"
                  onChange={this.handleInput}
                  style={{ margin: "0 0 8px 30px", padding: "2px" }}
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
        <div className="d-flex  justify-content-center align-content-around flex-wrap bd-highlight example-parent">
          {/* <h1>meetupjunk</h1> */}
          {/* <MDBBtn color="warning" size="sm" onClick={() => this.toggle()}>
          add a meetup??
        </MDBBtn> */}
          {meetUp}
        </div>
      </div>
    );
  }
}
