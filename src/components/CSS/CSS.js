import React, { Component } from "react";
import axios from "axios";
import Create from "../Posts/CreatePost";

class CSS extends Component {
  state = {
    posts: [],
    title: "",
    img: "",
    content: "",
    category: "CSS"
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    const { category } = this.state;
    axios
      .get(`/api/posts/${category}`)
      .then(res => {
        this.setState({ posts: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    const mapPosts = this.state.posts.map(post => (
      <div key={post.id}>{this.state.category}</div>
    ));
    return (
      <>
        <Create category={this.state.category} />
        {mapPosts}
      </>
    );
  }
}

export default CSS;
