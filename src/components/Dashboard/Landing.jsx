import React, { Component } from "react";
import axios from "axios";
import Create from "../Posts/CreatePost";
// import "./JavaScript.css";
import Post from "../Posts/Post";

class Landing extends Component {
  state = {
    posts: [],
    title: "",
    img: "",
    content: ""
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    axios
      .get(`/api/posts`)
      .then(res => {
          console.log(res.data)
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
        <Create getPosts={this.getPosts} />
        {mapPosts}
      </>
    );
  }
}

export default Landing;