import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class CreatePost extends Component {
  state = {
    title: "",
    img: "",
    content: ""
  };

  addPost = () => {
    const { id: author_id, category } = this.props;
    const { title, img, content } = this.state;
    axios
      .post("/api/posts", { title, img, content, author_id, category })
      .then(res => {
        this.setState({
          title: "",
          img: "",
          content: ""
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <div>
          <h1>Create a Post</h1>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  const { id } = reduxState;
  return { id };
}

export default connect(mapStateToProps)(CreatePost);
