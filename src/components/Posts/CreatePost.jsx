import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import Swal from 'sweetalert2'

class CreatePost extends Component {
  state = {
    title: "",
    img: "",
    content: "",
    category: this.props.category
  };

  addPost = () => {
    const { id: author_id } = this.props;
    const { title, img, content, category } = this.state;
    if(!category) {
      return Swal.fire({
        title: 'Please select a category.',
        icon: 'error'
      })
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
      <div>
        <div>
          <h1>Create a Post</h1>
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
          {this.props.location.pathname !== "/javascript" &&
            this.props.location.pathname !== "/css" &&
            this.props.location.pathname !== "/public" && (
              <select onChange={this.handleInput} name="category" id="">
                <option value=""></option>
                <option value="JavaScript">JavaScript</option>
                <option value="CSS">CSS</option>
                <option value="Other">Other</option>
              </select>
            )}
          <ReactQuill
            value={this.state.content}
            onChange={this.handleChange}
            modules={modules}
          />
          <button onClick={this.addPost}>Post</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  const { id } = reduxState;
  return { id };
}

export default withRouter(connect(mapStateToProps)(CreatePost));
