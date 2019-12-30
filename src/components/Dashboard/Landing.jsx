import React, { Component } from "react";
import axios from "axios";
import Create from "../Posts/CreatePost";
// import "./JavaScript.css";
import { connect } from "react-redux";
import { updatePosts } from "../../Reduxs/reducer";
import Post from "../Posts/Post";
import "./Landing.scss";
class Landing extends Component {
  state = {
    posts: [],
    title: "",
    img: "",
    content: "",
    toggle: false,
    search: "",
    filteredPosts: []
  };

  componentDidMount() {
    this.getPosts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.posts.length !== this.state.posts.length) {
      this.getPosts();
      // console.log(this.state.posts)
    }
  }

  getPosts = () => {
    axios
      .get(`/api/posts`)
      .then(res => {
        // console.log(res.data)
        this.setState({ posts: res.data });
        this.props.updatePosts(res.data);
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
    let filterByValue = this.props.posts.filter(o => {
      return Object.keys(o).some(k => {
        return o[k].toString().toLowerCase().includes(this.state.search.toLowerCase())
      })
    })
  
    const mapPosts = filterByValue.map(post => (
      <Post key={post.id} post={post} />
    ));
    
    return (
      <>
        <input
          className="search"
          type="text"
          onChange={this.handleChange}
          value={this.state.search}
        />
        {this.state.toggle ? (
          <Create toggle={this.toggle} getPosts={this.getPosts} />
        ) : null}
        <div className="input" onClick={this.toggle}>
          Create post...
        </div>
        {mapPosts}
      </>
    );
  }
}

function mapStateToProps(reduxState) {
  const { posts } = reduxState;
  return { posts };
}

const mapDispatchToProps = {
  updatePosts
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
