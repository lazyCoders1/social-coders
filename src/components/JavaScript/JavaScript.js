import React, { Component } from "react";
import axios from "axios";
import Create from "../Posts/CreatePost";
import './JavaScript.css'
import Post from '../Posts/Post'

class JavaScript extends Component {
  state = {
    posts: [],
    title: "",
    img: "",
    content: "",
    category: "JavaScript"
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
      <Post
      key={post.id}
      post={post}
      />
    ));
    return (
      <>
        <Create 
        getPosts={this.getPosts} 
        category={this.state.category} 
        />
        {mapPosts}
      </>
    );
  }
}

export default JavaScript;
