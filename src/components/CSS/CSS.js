import React, { Component } from 'react'
import axios from 'axios'
import Create from '../Posts/CreatePost'
import Post from '../Posts/Post'
import './CSS.css'
import { MDBJumbotron, MDBAnimation, MDBIcon, MDBRow } from 'mdbreact'
import ScrollAnimation from 'react-animate-on-scroll'

class CSS extends Component {
  state = {
    posts: [],
    category: 'CSS',
    toggle: false
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
    const { category } = this.state
    axios
      .get(`/api/posts/${category}`)
      .then(res => {
        this.setState({ posts: res.data })
      })
      .catch(err => console.log(err))
  }

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    const mapPosts = this.state.posts.map(post => (
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
            backgroundColor: '#34A9DC',
            margin: '1rem 0 0 0',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <ScrollAnimation animateIn="fadeInLeft" delay=".2s">
            <MDBIcon fab icon="css3-alt" className="cssIcon" />
          </ScrollAnimation>
          <div className="create">
            <MDBRow>
              <MDBAnimation type="flipInY" duration="3s" delay=".3s">
                <h1 className="CssText">S</h1>
              </MDBAnimation>
              <MDBAnimation type="flipInY" duration="3s" delay=".4s">
                <h1 className="CssText">T</h1>
              </MDBAnimation>
              <MDBAnimation type="flipInY" duration="3s" delay=".5s">
                <h1 className="CssText">Y</h1>
              </MDBAnimation>
              <MDBAnimation type="flipInY" duration="3s" delay=".6s">
                <h1 className="CssText">L</h1>
              </MDBAnimation>
              <MDBAnimation type="flipInY" duration="3s" delay=".7s">
                <h1 className="CssText">E</h1>
              </MDBAnimation>
            </MDBRow>
          </div>
        </MDBJumbotron>
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
        <ScrollAnimation animateIn="fadeInLeft">{mapPosts}</ScrollAnimation>
      </>
    )
  }
}

export default CSS
