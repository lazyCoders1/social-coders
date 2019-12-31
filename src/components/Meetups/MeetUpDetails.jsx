import React, { Component } from "react";
import axios from "axios";
// import { Link } from "react-router-dom"
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBIcon,
  MDBInput,
  MDBJumbotron,
  MDBAnimation
} from "mdbreact";
import ScrollAnimation from "react-animate-on-scroll";
import "./MeetUpDetails.scss";
// import MeetUpsDash from "./MeetUp";
// import Comment from "../Comments/Comment";

export default class MeetUpDetails extends Component {
  constructor() {
    super();
    this.state = {
      postDetails: [
        {
          title: ""
        }
      ],
      comments: [],
      isEditing: false,
      value: 0
      // profile_img
    };
  }

  componentDidMount() {
    this.getPosts();
    // const stuff = this.props.getMeetupPostsForId(this.props.match.params.id);
    // this.setState({
    //   postDetails: this.props.getMeetupPostsForId(this.props.match.params.id)
    // });
    // console.log(stuff);
  }
  getPosts = () => {
    axios.get("/api/meetups").then(res => {
      // this.props.updateMeetupPosts(res.data);
      const postDets = res.data.filter(
        meetup => meetup.id == this.props.match.params.id
      );
      this.setState({
        meetUpPosts: res.data,
        // postDetails: this.props.getMeetupPostsForId(this.props.match.params.id)
        postDetails: postDets[0]
      });
      console.log(this.state.postDetails);
      console.log("getPosts (MeetUpsDetails.js) ", res.data);
    });
  };

  render() {
    const { isEditing } = this.state;
    // const el = props.meetUpPost;
    return (
      <div id="meetup-post-details">
        <MDBView className="post-container">
          {/* <MDBContainer> */}
          {/* <MDBRow>
              <MDBCol> */}

          <MDBCard className="post-details-card shadow-box-example">
            <MDBJumbotron
              fluid
              className="jtron"
              style={{
                maxHeight: "10rem",
                padding: ".1rem",
                backgroundColor: "#4ba3c7",
                // margin: "1rem 0 0 0",
                display: "flex",
                alignItems: "center"
              }}
            >
              <ScrollAnimation animateIn="fadeInLeft" delay=".5s">
                <MDBIcon icon="icons" className="cssIcon pr-5" />
              </ScrollAnimation>
              <div className="create">
                <MDBRow>
                  {/* <MDBAnimation type="bounceIn" delay=".1s">
                    <h1 className="CssText">M</h1>
                  </MDBAnimation>
                  <MDBAnimation type="bounceIn" delay=".2s">
                    <h1 className="CssText">E</h1>
                  </MDBAnimation>
                  <MDBAnimation type="bounceIn" delay=".3s">
                    <h1 className="CssText">E</h1>
                  </MDBAnimation>
                  <MDBAnimation type="bounceIn" delay=".4s">
                    <h1 className="CssText">T</h1>
                  </MDBAnimation>
                  <MDBAnimation type="bounceIn" delay=".6s">
                    <h1 className="CssText">U</h1>
                  </MDBAnimation>
                  <MDBAnimation type="bounceIn" delay=".6s">
                    <h1 className="CssText">P</h1>
                  </MDBAnimation> */}
                  <ScrollAnimation className="bounceIn delay-1s">
                    <p className="CssText">{this.state.postDetails.title}</p>
                    {/* {console.log("hit", this.state.post)} */}
                  </ScrollAnimation>
                  
                </MDBRow>
              </div>
            </MDBJumbotron>
            {/* <Link className="btn stretched-link" to={`/postdetails/${this.props.el.post_id}`}> */}
            {!isEditing ? (
              <MDBCardBody>
                {/* <div className="d-flex justify-content"> */}
                <div className="d-flex justify-content-around flex-wrap">
                  <img
                    className="meetup_img_card rounded img-fluid"
                    src={this.state.postDetails.img}
                    alt=""
                  />

                  <div className="meetup-info mt-4">
                    <div className="date-time">
                      {this.state.postDetails.date +
                        ", " +
                        this.state.postDetails.time}
                    </div>
                    <br />
                    {/* <MDBCardTitle>
                      {this.state.postDetails.title}

                      {console.log("hit", this.state.post)}
                    </MDBCardTitle> */}
                    <div className="">
                      <MDBIcon icon="map-marker-alt" />
                      {" " + this.state.postDetails.street}
                    </div>
                    <br />
                    <div className="users">
                      <MDBIcon icon="users" />
                      25 users
                    </div>
                    <div className="organizer">
                      <MDBIcon icon="user-astronaut" />
                      Harry Potter
                    </div>
                  </div>
                  <div className="meetup-details">
                    <MDBCardTitle>
                      {/* {this.state.post.title} */}
                      {this.props.title}
                      Details
                      {/* {console.log("hit", this.state.post)} */}
                    </MDBCardTitle>
                    <MDBCardText className="card-text">
                      {this.state.postDetails.description}
                    </MDBCardText>
                  </div>
                </div>
              </MDBCardBody>
            ) : (
              <MDBCardBody>
                <MDBCardTitle>
                  <input
                    type="text"
                    id="example3"
                    className="edit-title form-control form-control-sm"
                    placeholder="Title"
                    value={this.props.createTitle}
                    name="title"
                    // onChange={e => updatePostTitle(e.target.value)}
                  />
                  <MDBInput
                    className="edit-content"
                    // iconClass="white-text"
                    // icon="pencil-alt"
                    type="textarea"
                    label="Editing Post?"
                    outline
                    value={this.props.createInput}
                    name="input"
                    // onChange={e => updatePostInput(e.target.value)}
                  ></MDBInput>
                  {/* {console.log("hit", this.state.post)} */}
                </MDBCardTitle>
                <MDBBtn
                  onClick={() => this.editPost()}
                  color="default"
                  className="post-btn"
                  size="sm"
                >
                  Edit Post
                </MDBBtn>
                <MDBBtn
                  onClick={() =>
                    this.setState({
                      isEditing: false
                    })
                  }
                  color="default"
                  className="cancel"
                  size="sm"
                >
                  Cancel
                </MDBBtn>

                <MDBBtn
                  onClick={() => {
                    this.deletePost();
                    this.setState({
                      isEditing: false
                    });
                  }}
                  outline
                  color="danger"
                  className="delete"
                  size="sm"
                >
                  Delete Post
                </MDBBtn>
              </MDBCardBody>
            )}

            <MDBCardFooter className="footer-bar">
              {/* SHARE BTN */}
              <button
                type="button"
                class="mobile-meetup-btn btn btn-default px-3"
              >
                <i class="fas fa-share " aria-hidden="true"></i>
              </button>
              <button
                type="button"
                class="desktop-meetup-btn btn btn-outline-default waves-effect"
              >
                <i class="fas fa-share pr-2" aria-hidden="true"></i>Share
              </button>
              {/* SAVE BTN */}
              <button
                type="button"
                class="mobile-meetup-btn btn btn-default px-3"
              >
                <i class="fas fa-bookmark" aria-hidden="true"></i>
              </button>
              <button
                type="button"
                class="desktop-meetup-btn btn btn-outline-default waves-effect"
              >
                <i class="fas fa-bookmark pr-2" aria-hidden="true"></i>Save
              </button>
              {/* EDIT BTN */}
              <button
                type="button"
                class="mobile-meetup-btn btn btn-default px-3"
              >
                <i class="fas fa-edit" aria-hidden="true"></i>
              </button>
              <button
                type="button"
                class="desktop-meetup-btn btn btn-outline-default waves-effect"
              >
                <i class="fas fa-edit pr-2" aria-hidden="true"></i>Edit
              </button>
            </MDBCardFooter>
          </MDBCard>

          {/* </MDBCol>
            </MDBRow> */}
          {/* </MDBContainer> */}
        </MDBView>
      </div>
    );
  }
}
