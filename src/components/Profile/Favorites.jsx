import React, { Component } from "react";
import axios from 'axios'
import Post from "../Posts/Post"
import { connect } from 'react-redux'

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state={
      posts: [],
      search: ''
    }
  }

  componentDidMount =()=> {
    this.getFavorites()
    console.log(this.state.posts)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.posts.length !== this.state.posts.length) {
      this.getFavorites()
    }
  }

  getFavorites = () => {
    const {id} = this.props
    console.log(id)
    axios.get(`/api/favorites/${id}`)
    .then(res => {
      this.setState({posts: res.data})
    })
    .catch(err => console.log(err))
  }

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  render() {
    let filterByValue = this.state.posts.filter(o => {
      return Object.keys(o).some(k => {
        return o[k]
          .toString()
          .toLowerCase()
          .includes(this.state.search.toLowerCase());
      });
    });
    const usersPosts = filterByValue.map((post, i) => (
      <Post post={post} key={post.id} />
    ));
    return (
      <>
        <input
          className="search"
          placeholder="Search..."
          type="text"
          onChange={this.handleChange}
          value={this.state.search}
        />
        {usersPosts}

    </>
    )
  }
}

function mapStateToProps(reduxState) {
  const { id } = reduxState
  return { id }
}

export default connect(mapStateToProps) (Favorites);
