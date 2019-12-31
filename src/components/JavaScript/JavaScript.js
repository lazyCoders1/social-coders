import React, { Component } from 'react'
import axios from 'axios'
import Create from '../Posts/CreatePost'
import './JavaScript.css'
import Post from '../Posts/Post'
import { MDBJumbotron, MDBAnimation, MDBIcon, MDBRow } from 'mdbreact'
import ScrollAnimation from 'react-animate-on-scroll'

class JavaScript extends Component {
  state = {
    posts: [],
    category: 'JavaScript',
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
            backgroundColor: '#FAD000',
            margin: '1rem 0 0 0',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <ScrollAnimation animateIn="fadeInLeft" delay=".2s">
            <MDBIcon fab icon="js-square" className="jsSquare" />
          </ScrollAnimation>
          <div className="create">
            <MDBRow>
              <MDBAnimation type="bounceIn" delay=".1s">
                <h1 className="Ctext">C</h1>
              </MDBAnimation>
              <MDBAnimation type="bounceIn" delay=".2s">
                <h1 className="Ctext">R</h1>
              </MDBAnimation>
              <MDBAnimation type="bounceIn" delay=".3s">
                <h1 className="Ctext">E</h1>
              </MDBAnimation>
              <MDBAnimation type="bounceIn" delay=".4s">
                <h1 className="Ctext">A</h1>
              </MDBAnimation>
              <MDBAnimation type="bounceIn" delay=".5s">
                <h1 className="Ctext">T</h1>
              </MDBAnimation>
              <MDBAnimation type="bounceIn" delay=".6s">
                <h1 className="Ctext">E</h1>
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

export default JavaScript
