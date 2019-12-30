import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import Swal from "sweetalert2";
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  // MDBCardText,
  // MDBCardFooter,
  MDBIcon,
  // MDBInput,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";
import "./CreatePost.scss";

class CreatePost extends Component {
  state = {
    title: "",
    img: "",
    content: "",
    category: this.props.category,
    createPostToggle: false
  };

  addPost = () => {
    const { id: author_id } = this.props;
    const { title, img, content, category } = this.state;
    if (!category) {
      return Swal.fire({
        title: "Please select a category.",
        icon: "error"
      });
    }
    axios
      .post("/api/posts", { title, img, content, author_id, category })
      .then(res => {
        this.setState({
          title: "",
          img: "",
          content: ""
        });
        this.props.getPosts();
      })
      .catch(err => console.log(err));
  };
  //! CREATE POST FORM TOGGLE
  toggle = () => {
    this.setState({
      createPostToggle: !this.state.createPostToggle
    });
  };
  // !------

  handleChange = value => {
    this.setState({ content: value });
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
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
    // const { createPostToggle } = this.state.createPostToggle;
    return (
      <div id="create-post-details">
        <MDBView className="create-post-container">
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                {!this.createPostToggle ? (
                  <div className="postCard card">
                    <div className="card-body">
                      {/* <Link to="/CreatePost"> */}
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Create Post"
                        readOnly
                        onClick={() => this.toggle()}
                      ></input>
                      {/* </Link> */}
                    </div>
                  </div>
                ) : (
                  <MDBCard className="post-details-card shadow-box-example">
                    <MDBCardBody>
                      <MDBCardTitle tag="h5">
                        {this.props.location.pathname !== "/javascript" &&
                          this.props.location.pathname !== "/css" &&
                          this.props.location.pathname !== "/public" && (
                            // <select
                            //   onChange={this.handleInput}
                            //   name="category"
                            //   id=""
                            // >
                            //   <option value=""></option>
                            //   <option value="JavaScript">JavaScript</option>
                            //   <option value="CSS">CSS</option>
                            //   <option value="Other">Other</option>
                            // </select>
                            <MDBDropdown size="sm">
                              <MDBDropdownToggle caret color="white">
                                <MDBIcon icon="terminal" size="lg" />{" "}
                                Channels...
                              </MDBDropdownToggle>
                              <MDBDropdownMenu color="danger" basic>
                                <MDBDropdownItem>JavaScript</MDBDropdownItem>
                                <MDBDropdownItem>CSS</MDBDropdownItem>
                                <MDBDropdownItem>Other</MDBDropdownItem>
                              </MDBDropdownMenu>
                            </MDBDropdown>
                          )}
                        <input
                          type="text"
                          id="example3"
                          name="title"
                          className="edit-title form-control form-control-sm"
                          placeholder="Title"
                          onChange={this.handleInput}
                          value={this.state.title}
                        />

                        <input
                          className="add-img form-control form-control-sm"
                          placeholder="Image (optional)..."
                          onChange={this.handleInput}
                          value={this.state.img}
                          type="text"
                        />

                        <ReactQuill
                          value={this.state.content}
                          onChange={this.handleChange}
                          modules={modules}
                        />

                        {/* <MDBInput
                        className="edit-content"
                        // iconClass="white-text"
                        // icon="pencil-alt"
                        type="textarea"
                        label="Editing Post?"
                        outline
                        value={this.props.createInput}
                        name="input"
                        // onChange={e => updatePostInput(e.target.value)}
                      ></MDBInput> */}
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
                  </MDBCard>
                )}
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

export default withRouter(connect(mapStateToProps)(CreatePost));

// <div>
//   <div>
//     <h1>Create a Post</h1>
//     <input
//       placeholder="Title..."
//       name="title"
//       size="100"
//       autoComplete="off"
//       onChange={this.handleInput}
//       value={this.state.title}
//       type="text"
//     />
//     <input
//       placeholder="Image (optional)..."
//       name="img"
//       size="100"
//       autoComplete="off"
//       onChange={this.handleInput}
//       value={this.state.img}
//       type="text"
//     />
//     {this.props.location.pathname !== "/javascript" &&
//       this.props.location.pathname !== "/css" &&
//       this.props.location.pathname !== "/public" && (
//         <select onChange={this.handleInput} name="category" id="">
//           <option value=""></option>
//           <option value="JavaScript">JavaScript</option>
//           <option value="CSS">CSS</option>
//           <option value="Other">Other</option>
//         </select>
//       )}
//     <ReactQuill
//       value={this.state.content}
//       onChange={this.handleChange}
//       modules={modules}
//     />
//     <button onClick={this.addPost}>Post</button>
//   </div>
// </div>










<!-- ! New code...  Roundy -->

import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import Swal from "sweetalert2";
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  // MDBCardText,
  // MDBCardFooter,
  MDBIcon,
  // MDBInput,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBButton
} from "mdbreact";
import "./CreatePost.scss";

class CreatePost extends Component {
  state = {
    title: "",
    img: "",
    content: "",
    category: this.props.category,
    createPostToggle: false
  };

  addPost = () => {
    const { id: author_id } = this.props;
    const { title, img, content, category } = this.state;
    if (!category) {
      return Swal.fire({
        title: "Please select a category.",
        icon: "error"
      });
    }
    axios
      .post("/api/posts", { title, img, content, author_id, category })
      .then(res => {
        this.setState({
          title: "",
          img: "",
          content: ""
        });
        this.props.getPosts();
      })
      .catch(err => console.log(err));
  };
  //! CREATE POST FORM TOGGLE
  toggle = () => {
    this.setState({
      createPostToggle: !this.state.createPostToggle
    });
  };
  // !------

  handleChange = value => {
    this.setState({ content: value });
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
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
    // const { createPostToggle } = this.state.createPostToggle;
    return (
      <div id="create-post-details">
        <MDBView className="create-post-container">
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                {!this.createPostToggle ? (
                  <div className="postCard card">
                    <div className="card-body">
                      {/* <Link to="/CreatePost"> */}
                      <MDBBtn onClick={() => this.toggle()}></MDBBtn>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Create Post"
                        readOnly
                        
                      ></input>
                      
                      {/* </Link> */}
                    </div>
                  </div>
                ) : (
                  <MDBCard className="post-details-card shadow-box-example">
                    <MDBCardBody>
                      <MDBCardTitle tag="h5">
                        {this.props.location.pathname !== "/javascript" &&
                          this.props.location.pathname !== "/css" &&
                          this.props.location.pathname !== "/public" && (
                            // <select
                            //   onChange={this.handleInput}
                            //   name="category"
                            //   id=""
                            // >
                            //   <option value=""></option>
                            //   <option value="JavaScript">JavaScript</option>
                            //   <option value="CSS">CSS</option>
                            //   <option value="Other">Other</option>
                            // </select>
                            <MDBDropdown size="sm">
                              <MDBDropdownToggle caret color="white">
                                <MDBIcon icon="terminal" size="lg" />{" "}
                                Channels...
                              </MDBDropdownToggle>
                              <MDBDropdownMenu color="danger" basic>
                                <MDBDropdownItem>JavaScript</MDBDropdownItem>
                                <MDBDropdownItem>CSS</MDBDropdownItem>
                                <MDBDropdownItem>Other</MDBDropdownItem>
                              </MDBDropdownMenu>
                            </MDBDropdown>
                          )}
                        <input
                          type="text"
                          id="example3"
                          name="title"
                          className="edit-title form-control form-control-sm"
                          placeholder="Title"
                          onChange={this.handleInput}
                          value={this.state.title}
                        />

                        <input
                          className="add-img form-control form-control-sm"
                          placeholder="Image (optional)..."
                          onChange={this.handleInput}
                          value={this.state.img}
                          type="text"
                        />

                        <ReactQuill
                          value={this.state.content}
                          onChange={this.handleChange}
                          modules={modules}
                        />

                        {/* <MDBInput
                        className="edit-content"
                        // iconClass="white-text"
                        // icon="pencil-alt"
                        type="textarea"
                        label="Editing Post?"
                        outline
                        value={this.props.createInput}
                        name="input"
                        // onChange={e => updatePostInput(e.target.value)}
                      ></MDBInput> */}
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
                  </MDBCard>
                )}
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

export default withRouter(connect(mapStateToProps)(CreatePost));



<!-- ! -->

// <div>
//   <div>
//     <h1>Create a Post</h1>
//     <input
//       placeholder="Title..."
//       name="title"
//       size="100"
//       autoComplete="off"
//       onChange={this.handleInput}
//       value={this.state.title}
//       type="text"
//     />
//     <input
//       placeholder="Image (optional)..."
//       name="img"
//       size="100"
//       autoComplete="off"
//       onChange={this.handleInput}
//       value={this.state.img}
//       type="text"
//     />
//     {this.props.location.pathname !== "/javascript" &&
//       this.props.location.pathname !== "/css" &&
//       this.props.location.pathname !== "/public" && (
//         <select onChange={this.handleInput} name="category" id="">
//           <option value=""></option>
//           <option value="JavaScript">JavaScript</option>
//           <option value="CSS">CSS</option>
//           <option value="Other">Other</option>
//         </select>
//       )}
//     <ReactQuill
//       value={this.state.content}
//       onChange={this.handleChange}
//       modules={modules}
//     />
//     <button onClick={this.addPost}>Post</button>
//   </div>
// </div>


<!-- !style scss -->
#create-post-details {
  // Use code bellow if you add content next to post
  // width: 800px;

  // .card {
  //   display: block;
  //   display: -webkit-box;
  //   max-width: 100%;
  //   height: 60px;
  //   margin: 0 auto;
  //   font-size: 14px;
  //   line-height: 1.5;
  //   -webkit-line-clamp: 3;
  //   -webkit-box-orient: vertical;
  //   overflow: hidden;
  //   text-overflow: ellipsis;
  // }
  .create-post-container {
    // width: 450px;
    // position: relative;
    // padding-bottom: 25px;

    width: 765px;
    height: 100%;
    margin: 20px auto;
    // box-shadow: 5px 5px 5px -3px rgba(0, 0, 0, 0.376);
    // border: .5px solid rgba(68, 68, 68, 0.479);

    // text-align: center;
    padding: 10px;
    // background: ghostwhite;
  }

  .postContainer {
    padding-top: 115px;
    padding-bottom: 125px;
    overflow: scroll;
  }

  .post-details-card {
    // margin: 50px;
    background-color: ghostwhite;
  }
  .card-text {
    line-height: 1.5;
  }
}
