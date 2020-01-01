import React, { Component } from 'react'
import axios from 'axios'
import Create from '../Posts/CreatePost'
// import "./JavaScript.css";
import { connect } from 'react-redux'
import { updatePosts } from '../../Reduxs/reducer'
import Post from '../Posts/Post'
import './Landing.scss'
import { MDBJumbotron, MDBAnimation, MDBRow } from 'mdbreact'
import ScrollAnimation from 'react-animate-on-scroll'
class Landing extends Component {
  state = {
    posts: [],
    title: '',
    img: '',
    content: '',
    toggle: false,
    search: ''
  }

  componentDidMount() {
    this.getPosts()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.posts.length !== this.state.posts.length) {
      this.getPosts()
    }
  }

  getPosts = () => {
    axios
      .get(`/api/posts`)
      .then(res => {
        // console.log(res.data)
        this.setState({ posts: res.data })
        this.props.updatePosts(res.data)
      })
      .catch(err => console.log(err))
  }

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  handleChange = event => {
    this.setState({ search: event.target.value })
  }

  render() {
    let filterByValue = this.props.posts.filter(o => {
      return Object.keys(o).some(k => {
        return o[k]
          .toString()
          .toLowerCase()
          .includes(this.state.search.toLowerCase())
      })
    })
    const mapPosts = filterByValue.map(post => (
      <Post key={post.id} post={post} />
    ))
    return (
      <>
        <MDBJumbotron
          fluid
          className="jtron"
          style={{
            maxHeight: '10rem',
            padding: '.1rem',
            backgroundImage:
              "url('https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80')",
            margin: '1rem 0 0 0',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {/* <ScrollAnimation animateIn="fadeInLeft" delay=".2s">
            <MDBIcon icon="terminal" />
          </ScrollAnimation> */}
          <div className="create">
            <MDBRow>
              <MDBAnimation type="flipInY" duration="3s" delay=".3s">
                <h1 className="CssText">Y</h1>
              </MDBAnimation>
              <MDBAnimation type="flipInY" duration="3s" delay=".4s">
                <h1 className="CssText">O</h1>
              </MDBAnimation>
              <MDBAnimation type="flipInY" duration="3s" delay=".5s">
                <h1 className="CssText">U</h1>
              </MDBAnimation>
              <MDBAnimation type="flipInY" duration="3s" delay=".6s">
                <h1 className="CssText">R</h1>
              </MDBAnimation>
              <MDBAnimation type="flipInY" duration="3s" delay=".7s">
                <h1 className="Feed">FEED</h1>
              </MDBAnimation>
            </MDBRow>
          </div>
        </MDBJumbotron>
        <input
          className="search"
          placeholder="Search..."
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
        {/* <ScrollAnimation className='post-animation' animateIn="fadeInLeft" delay=".2s"> */}
          {mapPosts}
        {/* </ScrollAnimation> */}
      </>
    )
  }
}

function mapStateToProps(reduxState) {
  const { posts } = reduxState
  return { posts }
}

const mapDispatchToProps = {
  updatePosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
