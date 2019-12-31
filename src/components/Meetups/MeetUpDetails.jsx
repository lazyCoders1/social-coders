import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateComment,
  updatePostInput,
  updatePostTitle,
  updateUserInfo,
  clearState
} from "../../Reduxs/reducer";
// import axios from "axios";
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

export class MeetUpsDetails extends Component {
  constructor() {
    super();
    this.state = {
      post: {},
      comments: [],
      isEditing: false,
      value: 0
      // profile_img
    };
  }

  render() {
    const { updateComment, updatePostInput, updatePostTitle } = this.props;
    const { isEditing } = this.state;
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
                            {this.state.post.title}
                            What is Javascript?
                            {/* {console.log("hit", this.state.post)} */}
                          </MDBCardTitle>
                          <div className="">
                            <MDBIcon icon="map-marker-alt" />
                            1234 st
                          </div>
                          <div className="users">
                            <MDBIcon icon="users" />
                            25 users
                          </div>
                          <div className="organizer">
                            <MDBIcon icon="user-astronaut" />
                            Harry Poter
                          </div>
                        </div>
                        <div className="meetup-details">
                        <hr/>
                          <MDBCardTitle>
                            {this.state.post.Details}
                            Details
                            {/* {console.log("hit", this.state.post)} */}
                          </MDBCardTitle>
                          <MDBCardText className="card-text">
                            {this.state.post.content}
                            Lorem ipsum dolor amet leggings fashion axe
                            skateboard meditation. Chia cornhole kombucha small
                            batch fam affogato vape kale chips marfa pok pok
                            raclette meditation everyday carry readymade. Wolf
                            tofu pitchfork vinyl mumblecore glossier hoodie
                            sriracha ethical. Flannel pitchfork ennui disrupt,
                            selvage photo booth glossier green juice chartreuse
                            3 wolf moon kogi. Ramps retro humblebrag listicle
                            flexitarian sustainable gastropub.Lorem ipsum dolor
                            amet leggings fashion axe skateboard meditation.
                            Chia cornhole kombucha small batch fam affogato vape
                            kale chips marfa pok pok raclette meditation
                            everyday carry readymade. Wolf tofu pitchfork vinyl
                            mumblecore glossier hoodie sriracha ethical. Flannel
                            pitchfork ennui disrupt, selvage photo booth
                            glossier green juice chartreuse 3 wolf moon kogi.
                            Ramps retro humblebrag listicle flexitarian
                            sustainable gastropub.Lorem ipsum dolor amet
                            leggings fashion axe skateboard meditation. Chia
                            cornhole kombucha small batch fam affogato vape kale
                            chips marfa pok pok raclette meditation everyday
                            carry readymade. Wolf tofu pitchfork vinyl
                            mumblecore glossier hoodie sriracha ethical. Flannel
                            pitchfork ennui disrupt, selvage photo booth
                            glossier green juice chartreuse 3 wolf moon kogi.
                            Ramps retro humblebrag listicle flexitarian
                            sustainable gastropub. PBR&B lo-fi vape tumeric man
                            braid, snackwave gentrify. Vice gochujang swag
                            copper mug art party. Intelligentsia sustainable
                            XOXO lumbersexual YOLO, tbh master cleanse cliche
                            drinking vinegar vegan snackwave occupy VHS man
                            braid. Vexillologist 90's chillwave heirloom kitsch
                            direct trade, vinyl flannel franzen chia occupy
                            listicle.
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
                          onChange={e => updatePostTitle(e.target.value)}
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
                          onChange={e => updatePostInput(e.target.value)}
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
                      onClick={() => {
                        console.log(this.state.post);
                        updatePostInput(this.state.post.content);
                        updatePostTitle(this.state.post.title);
                        this.setState({
                          isEditing: true
                        });
                      }}
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

function mapStateToProps(state) {
  const { createComment, createInput, createTitle } = state;

  return {
    createComment,
    createInput,
    createTitle
    // profile_img
  };
}

export default connect(mapStateToProps, {
  updateComment,
  updatePostInput,
  updatePostTitle,
  updateUserInfo,
  clearState
})(MeetUpsDetails);
