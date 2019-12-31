import React, { Component } from "react";
import { connect } from "react-redux";
import parse from "html-react-parser";
import {
  updateComment,
  updatePostInput,
  updatePostTitle,
  updateUserInfo,
  clearState
} from "../../Reduxs/reducer";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBCardFooter,
  MDBIcon,
  MDBInput
} from "mdbreact";
import "./PostDetails.scss";
// import Comment from "../Comments/Comment";

export class PostDetails extends Component {
  state = {
    post: {},
    comments: [],
    isEditing: false,
    value: 0
    // profile_img
  };

  componentDidMount() {
    this.getPost();
  }

  getPost = () => {
    const { id } = this.props.match.params;
    axios.get(`/api/post/${id}`).then(res => {
      console.log(res.data);
      this.setState({ post: res.data });
    });
  };

  render() {
    const { updateComment, updatePostInput, updatePostTitle } = this.props;
    const { isEditing } = this.state;
    const { title, name, category, content, author_id, img } = this.state.post;
    return (
      <div id="post-details">
        <MDBView className="postContainer">
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <MDBCard className="post-details-card shadow-box-example">
                  {/* <Link className="btn stretched-link" to={`/postdetails/${this.props.el.post_id}`}> */}
                  {!isEditing ? (
                    <MDBCardBody>
                      <MDBCardText>
                        Posted by{" "}
                        <Link className='post-link' to={`/profile/${author_id}`}>{name}</Link> in{" "}
                        <Link className='post-link' to={`/${category}`}>{category}</Link>
                      </MDBCardText>
                      <MDBCardTitle tag="h5">
                        <h3> {title} </h3>
                        {/* {console.log("hit", this.state.post)} */}
                      </MDBCardTitle>
                      <MDBCardImage style={{maxHeight: '500px', maxWidth: '500px'}} src={img} />  
                      <MDBCardText className="card-text">
                        {parse(String(content))}
                      </MDBCardText>
                    </MDBCardBody>
                  ) : (
                    <MDBCardBody>
                      <MDBCardTitle tag="h5">
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
                        Save Edit
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
                    {/* <i className="fas fa-share"> Share</i> */}
                    <i className="fas fa-bookmark"> Save</i>
                    <button
                      className="edit-btn"
                      onClick={() => {
                        // console.log(this.state.post);
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

                  {/* COMMENT INPUT FIELD */}

                  <MDBCardBody>
                    <hr />
                    <p>Comment as Roundy</p>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fas fa-pencil-alt prefix"></i>
                        </span>
                      </div>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="What are your thoughts?"
                        value={this.props.createComment}
                        name="input"
                        onChange={e => updateComment(e.target.value)}
                      ></textarea>
                    </div>
                    <MDBBtn
                      outline
                      color="default"
                      size="sm"
                      onClick={() => this.addNewComment()}
                    >
                      Comment
                      <MDBIcon icon="pencil-alt" className="ml-1" />
                    </MDBBtn>
                    <br />
                    <hr />
                    <MDBCardTitle tag="h5">Comments...</MDBCardTitle>

                    {/* {this.state.comments.map((el, index) => (
                      <Comment
                        el={el}
                        index={index}
                        key={el.comment_id}
                        remove={this.deleteComment}
                      />
                    ))} */}
                  </MDBCardBody>
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
})(PostDetails);
