import React, { Component } from "react";
import { connect } from "react-redux";
import { getMeetupPostsForId, updateMeetupPosts } from "../../Reduxs/reducer";
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
  MDBInput
} from "mdbreact";
import "./MeetUpDetails.scss";
// import MeetUpsDash from "./MeetUp";
// import Comment from "../Comments/Comment";

export class MeetUpDetails extends Component {
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
    this.setState({
      postDetails: this.props.getMeetupPostsForId(this.props.match.params.id)
    });
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
        <MDBView className="postContainer">
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <MDBCard className="post-details-card shadow-box-example">
                  {/* <Link className="btn stretched-link" to={`/postdetails/${this.props.el.post_id}`}> */}
                  {!isEditing ? (
                    <MDBCardBody>
                      {/* <div className="d-flex justify-content"> */}
                      <div className="d-flex justify-content-around flex-wrap">
                        <img
                          className="meetup_img_card rounded img-fluid"
                          src="https://www.tutorialrepublic.com/lib/images/javascript-illustration.png"
                          // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ahKQqrD2owx4mqWUU0hcUbRBY6tCDWtclDUy5BnI3sp8pUuM&s"
                          // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ahKQqrD2owx4mqWUU0hcUbRBY6tCDWtclDUy5BnI3sp8pUuM&s"
                          alt=""
                        />

                        <div className="meetup-info mt-4">
                          <MDBCardTitle>
                            {this.state.postDetails.title}

                            {/* {console.log("hit", this.state.post)} */}
                          </MDBCardTitle>
                          <div className="">
                            <MDBIcon icon="map-marker-alt" />
                            {this.state.postDetails.street}
                          </div>
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
                          <hr />
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

                  {/*! COMMENTS */}

                  <MDBCardFooter className="footer-bar">
                    <div className="def-number-input number-input">
                      <button onClick={this.increase}>
                        <MDBIcon icon="arrow-alt-circle-up" />
                      </button>
                      <br />
                      {/* <input
                        className="quantity"
                        name="quantity"
                        value={this.state.value}
                        onChange={() => console.log("change")}
                        type="number"
                      /> */}
                      <br />
                      <button onClick={this.decrease}>
                        <MDBIcon icon="arrow-alt-circle-down" />
                      </button>
                    </div>

                    <i className="fas fa-share"> Share</i>

                    <i className="fas fa-bookmark"> Save</i>
                    <button
                      className="edit-btn"
                      // onClick={() => {
                      //   console.log(this.state.post);
                      //   updatePostInput(this.state.post.content);
                      //   updatePostTitle(this.state.post.title);
                      //   this.setState({
                      //     isEditing: true
                      //   });
                      // }}
                    >
                      <MDBIcon icon="edit" />
                      Edit
                    </button>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </div>
    );
  }
}

export default connect(null, {
  getMeetupPostsForId,
  updateMeetupPosts
})(MeetUpDetails);
