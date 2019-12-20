import React, { Component } from "react";
import axios from "axios";
import Create from "../Posts/CreatePost";
import Post from "../Posts/Post";

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
      <Post key={post.id} post={post} />
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
