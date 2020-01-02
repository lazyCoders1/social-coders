import React, { Component } from 'react'
import axios from 'axios'
import Create from '../Posts/CreatePost'
import Post from '../Posts/Post'
import { MDBJumbotron, MDBAnimation, MDBIcon, MDBRow } from 'mdbreact'
import ScrollAnimation from 'react-animate-on-scroll'
import './Other.scss'

class Other extends Component {
  state = {
    posts: [],
    category: 'Other',
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
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage:
              "url('https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')",
            margin: '1rem 0 0 0',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <ScrollAnimation animateIn="fadeInLeft" delay=".2s">
            <MDBIcon icon="laptop-code" className="lapTop" />
          </ScrollAnimation>
          <div className="create">
            <MDBRow>
              <MDBAnimation type="slideInLeft" delay=".1s">
                <h1 className="Ctext2">O</h1>
              </MDBAnimation>
              <MDBAnimation type="slideInUp" delay=".2s">
                <h1 className="Ctext2">T</h1>
              </MDBAnimation>
              <MDBAnimation type="slideInDown" delay=".3s">
                <h1 className="Ctext2">H</h1>
              </MDBAnimation>
              <MDBAnimation type="slideInUp" delay=".4s">
                <h1 className="Ctext2">E</h1>
              </MDBAnimation>
              <MDBAnimation type="slideInRight" delay=".5s">
                <h1 className="Ctext2">R</h1>
              </MDBAnimation>
              {/* <MDBAnimation type="bounceIn" delay=".6s">
                <h1 className="Ctext2">E</h1>
              </MDBAnimation> */}
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
        {mapPosts}
      </>
    )
  }
}

export default Other
