import React, { Component } from "react";
import axios from "axios";
import Create from "../Posts/CreatePost";
import "./JavaScript.css";
import Post from "../Posts/Post";

class JavaScript extends Component {
  state = {
    posts: [],
    title: "",
    img: "",
    content: "",
    category: "JavaScript",
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
    const { category } = this.state;
    axios
      .get(`/api/posts/${category}`)
      .then(res => {
        this.setState({ posts: res.data });
      })
      .catch(err => console.log(err));
  };

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  render() {
    const mapPosts = this.state.posts.map(post => (
      <Post key={post.id} post={post} />
    ));
    return (
      <>
        {this.state.toggle ? (
          <Create
            toggle={this.toggle}
            getPosts={this.getPosts}
            category={this.state.category}
          />
        ) : null}
        <div className="input" onClick={this.toggle}>
          Create post...
        </div>
        {mapPosts}
      </>
    );
  }
}

export default JavaScript;
