import React, { Component } from "react";
import axios from "axios";
import Create from "../Posts/CreatePost";
// import "./JavaScript.css";
import Post from "../Posts/Post";
import './Landing.scss'
class Landing extends Component {
  state = {
    posts: [],
    title: "",
    img: "",
    content: "",
    toggle: false
  };

  componentDidMount() {
    this.getPosts();
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.posts.length !== this.state.posts.length) {
      this.getPosts();
    }
  }

  getPosts = () => {
    axios
      .get(`/api/posts`)
      .then(res => {
          // console.log(res.data)
        this.setState({ posts: res.data });
      })
      .catch(err => console.log(err));
  };

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    const mapPosts = this.state.posts.map(post => (
      <Post key={post.id} post={post} />
    ));
    return (
      <>
        {this.state.toggle ? <Create toggle={this.toggle} getPosts={this.getPosts} /> : null}
        <div className='input' onClick={this.toggle}>Create post...</div>
        {mapPosts}
      </>
    );
  }
}

export default Landing;