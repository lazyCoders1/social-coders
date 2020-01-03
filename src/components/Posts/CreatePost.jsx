import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import Swal from "sweetalert2";
import "./CreatePost.scss";
import { MDBBtn, MDBIcon, MDBAnimation } from "mdbreact";

export class CreatePost extends Component {
  state = {
    title: "",
    img: "",
    content: "",
    category: this.props.category
  };

  addPost = () => {
    const { id: author_id } = this.props;
    const { title, img, content, category } = this.state;
    const time_stamp = new Date()
    if (!category) {
      return Swal.fire({
        title: "Please select a category.",
        icon: "error"
      });
    }
    axios
      .post("/api/posts", { title, img, content, author_id, category, time_stamp })
      .then(res => {
        this.setState({
          title: "",
          img: "",
          content: ""
        });
        this.props.getPosts();
        this.props.toggle();
      })
      .catch(err =>
        Swal.fire({
          title: err.response.data.message,
          icon: "error",
          showConfirmButton: false,
          timer: 1200
        })
      );
  };

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
    return (
      <>
        <MDBAnimation
          type="fadeIn"
          style={{
            zIndex: "20"
          }}
        >
          <div className="blur" style={{ zIndex: "10" }}>
            <div className="create-post-container">
              <div className="cancel" onClick={this.props.toggle}>
                X
              </div>
              {this.props.location.pathname !== "/javascript" &&
                this.props.location.pathname !== "/css" &&
                this.props.location.pathname !== "/other" && (
                  <select onChange={this.handleInput} name="category" id="">
                    <option value=""></option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="CSS">CSS</option>
                    <option value="Other">Other</option>
                  </select>
                )}
              <input
                placeholder="Title..."
                name="title"
                size="100"
                autoComplete="off"
                onChange={this.handleInput}
                value={this.state.title}
                type="text"
              />
              <input
                placeholder="Image (optional)..."
                name="img"
                size="100"
                autoComplete="off"
                onChange={this.handleInput}
                value={this.state.img}
                type="text"
              />
              <ReactQuill
                style={{
                  borderRadius: "5px",
                  border: ".5px solid rgb(192, 192, 192)"
                }}
                className="textbox"
                value={this.state.content}
                onChange={this.handleChange}
                modules={modules}
              />
              <MDBBtn
                className="post-button"
                outline
                color="default"
                size="sm"
                onClick={this.addPost}
              >
                Post
                <MDBIcon icon="pencil-alt" className="ml-2" />
              </MDBBtn>
            </div>
          </div>
        </MDBAnimation>
      </>
    );
  }
}

function mapStateToProps(reduxState) {
  const { id } = reduxState;
  return { id };
}

export default withRouter(connect(mapStateToProps)(CreatePost));
