import React, { Component } from "react";
import axios from "axios";
import Create from "../Posts/CreatePost";
import parse from 'html-react-parser'
import './JavaScript.css'

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

  component

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
      <div 
      style={{
        margin: '30px', 
        lineHeight: '1.3', 
        border: '1px solid black', 
        padding: '7px'
      }} 
      key={post.id}>
        {parse(post.content)}
      </div>
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
