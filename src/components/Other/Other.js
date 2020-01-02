import React, { Component } from "react";
import axios from "axios";
import Create from "../Posts/CreatePost";
import Post from "../Posts/Post";

class Other extends Component {
  state = {
    posts: [],
    category: "Other",
    toggle: false,
    search: ''
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

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  render() {
    let filterByValue = this.state.posts.filter(o => {
      return Object.keys(o).some(k => {
        return o[k].toString().toLowerCase().includes(this.state.search.toLowerCase())
      })
    })
    const usersPosts = filterByValue.map((post, i) => (
          <Post
            post={post}
            key={post.id}
          />
    ))
    return (
      <>
      <input
          className="search"
          placeholder="Search..."
          type="text"
          onChange={this.handleChange}
          value={this.state.search}
        />
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
        {usersPosts}
      </>
    );
  }
}

export default Other;
