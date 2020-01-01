import React, { Component } from "react";
import { connect } from "react-redux";
import parse from "html-react-parser";
import ReactQuill from "react-quill";
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
  MDBIcon
} from "mdbreact";
import Swal from "sweetalert2";
import "./PostDetails.scss";
import Comment from "./Comment";

export class PostDetails extends Component {
  state = {
    author_id: 0,
    category: "",
    name: "",
    id: 0,
    profile_pic: "",
    title: "",
    img: "",
    content: "",
    comment: "",
    comments: [],
    isEditing: false
  };

  componentDidMount() {
    this.getPost();
    this.getComments();
  }

  getPost = () => {
    const { id } = this.props.match.params;
    axios
      .get(`/api/post/${id}`)
      .then(res => {
        this.setState(res.data);
      })
      .catch(err => console.log(err));
  };

  deletePost = () => {
    const { id } = this.state;
    axios
      .delete(`/api/posts/${id}`)
      .then(res => {
        Swal.fire({
          title: res.data.message,
          icon: "success",
          showConfirmButton: false,
          timer: 1200
        });
        window.history.go(-1);
      })
      .catch(err => console.log(err));
  };

  updatePost = () => {
    const { id, title, content, img } = this.state;
    axios
      .patch(`/api/posts/${id}`, { title, content, img })
      .then(res => {
        Swal.fire({
          title: res.data.message,
          icon: "success",
          showConfirmButton: false,
          timer: 1200
        });
        this.setState({ isEditing: false });
        this.getPost();
      })
      .catch(err => console.log(err));
  };

  getComments = () => {
    const { id } = this.props.match.params;
    axios
      .get(`/api/comments/${id}`)
      .then(res => {
        this.setState({
          comments: res.data
        });
      })
      .catch(err => console.log(err));
  };

  addComment = () => {
    const { comment: content } = this.state;
    const { id: post_id } = this.state;
    const { id: author_id } = this.props;
    axios
      .post("/api/comments", { content, post_id, author_id })
      .then(res => {
        this.setState({ comment: "" });
        this.getComments();
      })
      .catch(err =>
        Swal.fire({
          title: err.response.data.message,
          icon: "error",
          timer: 1200,
          showConfirmButton: false
        })
      );
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handlePost = value => {
    this.setState({ content: value });
  };

  handleComment = value => {
    this.setState({ comment: value });
  };

  render() {
    const modules = {
      toolbar: [
        ["bold", "italic", "underline", "strike", "code"],
        ["blockquote", "code-block"],
        ["link"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" }
        ]
      ]
    };
    const { isEditing } = this.state;
    const { title, name, category, content, author_id, img } = this.state;
    return (
      <div id="post-details">
        <MDBView className="postContainer">
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <MDBCard className="post-details-card shadow-box-example">
                  {!isEditing ? (
                    <MDBCardBody>
                      <MDBCardText
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        Posted by{" "}
                        <div
                          style={{
                            backgroundImage: `url(${this.state.profile_pic})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "40px",
                            width: "40px",
                            borderRadius: "50%",
                            margin: "3px"
                          }}
                        />
                        <Link
                          style={{ margin: "3px" }}
                          className="post-link"
                          to={`/profile/${author_id}`}
                        >
                          {name}
                        </Link>{" "}
                        in{" "}
                        <Link
                          style={{ margin: "3px" }}
                          className="post-link"
                          to={`/${category}`}
                        >
                          {category}
                        </Link>
                      </MDBCardText>
                      <MDBCardTitle tag="h5">
                        <h3> {title} </h3>
                      </MDBCardTitle>
                      <MDBCardImage
                        style={{ maxHeight: "500px", maxWidth: "500px" }}
                        src={img}
                      />
                      <MDBCardText className="card-text">
                        {parse(String(content))}
                      </MDBCardText>
                    </MDBCardBody>
                  ) : (
                    <MDBCardBody>
                      <MDBCardTitle tag="h5">
                        <input
                          style={{ width: "90%" }}
                          autoComplete="off"
                          type="text"
                          className="edit-title form-control form-control-sm"
                          placeholder="Title"
                          value={title}
                          name="title"
                          onChange={this.handleInput}
                        />
                        <input
                          style={{ width: "90%" }}
                          autoComplete="off"
                          type="text"
                          className="edit-title form-control form-control-sm"
                          placeholder="Image (optional)"
                          value={img}
                          name="img"
                          onChange={this.handleInput}
                        />
                        <ReactQuill
                          style={{
                            width: "100%"
                          }}
                          value={content}
                          modules={modules}
                          onChange={this.handlePost}
                        />
                      </MDBCardTitle>
                      <MDBBtn
                        onClick={this.updatePost}
                        color="default"
                        className="post-btn"
                        size="sm"
                      >
                        Save Edit
                      </MDBBtn>
                      <MDBBtn
                        onClick={() => {
                          this.setState({ isEditing: false });
                          this.getPost();
                        }}
                        color="default"
                        className="edit-cancel"
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
                      <br />
                      <button onClick={this.decrease}>
                        <MDBIcon icon="arrow-alt-circle-down" />
                      </button>
                    </div>
                    {/* <i className="fas fa-share"> Share</i> */}
                    <i className="fas fa-bookmark">Save</i>
                    <button
                      className="edit-btn"
                      onClick={() => this.setState({ isEditing: true })}
                    >
                      <MDBIcon icon="edit" />
                      Edit
                    </button>
                  </MDBCardFooter>

                  {/* COMMENT INPUT FIELD */}

                  <MDBCardBody>
                    <hr />
                    <p>Add a Comment</p>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fas fa-pencil-alt prefix"></i>
                        </span>
                      </div>
                      <ReactQuill
                        style={{
                          width: "100%"
                        }}
                        placeholder="What are your thoughts?"
                        value={this.state.comment}
                        onChange={this.handleComment}
                        modules={modules}
                      />
                    </div>
                    <MDBBtn
                      outline
                      color="default"
                      size="sm"
                      onClick={this.addComment}
                    >
                      Comment
                      <MDBIcon icon="pencil-alt" className="ml-1" />
                    </MDBBtn>
                    <br />
                    <MDBCardTitle style={{ marginTop: "50px" }} tag="h5">
                      Comments...
                    </MDBCardTitle>
                    <hr />
                    {this.state.comments.map(comment => (
                      <Comment key={comment.id} comment={comment} />
                    ))}
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

function mapStateToProps(reduxState) {
  const { id } = reduxState;
  return { id };
}

export default connect(mapStateToProps)(PostDetails);
