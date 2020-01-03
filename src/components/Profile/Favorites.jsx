import React, { Component } from 'react'
import axios from 'axios'
import Post from '../Posts/Post'
import { connect } from 'react-redux'
import { MDBJumbotron, MDBAnimation, MDBIcon, MDBRow } from 'mdbreact'
import ScrollAnimation from 'react-animate-on-scroll'
import './Favorites.scss'

class Favorites extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      search: ''
    }
  }

  componentDidMount = () => {
    this.getFavorites()
    console.log(this.state.posts)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.posts.length !== this.state.posts.length) {
      this.getFavorites()
    }
  }

  getFavorites = () => {
    const { id } = this.props
    console.log(id)
    axios
      .get(`/api/favorites/${id}`)
      .then(res => {
        this.setState({ posts: res.data })
      })
      .catch(err => console.log(err))
  }

  handleChange = event => {
    this.setState({ search: event.target.value })
  }

  render() {
    let filterByValue = this.state.posts.filter(o => {
      return Object.keys(o).some(k => {
        return o[k]
          .toString()
          .toLowerCase()
          .includes(this.state.search.toLowerCase())
      })
    })
    const usersPosts = filterByValue.map((post, i) => (
      <Post post={post} key={post.id} />
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
        <MDBJumbotron
          fluid
          className="jtron"
          style={{
            maxHeight: '10rem',
            padding: '.1rem',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518706016428-64215811367b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')",
            margin: '1rem 0 0 0',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <ScrollAnimation animateIn="fadeInLeft" delay=".2s">
            <MDBIcon far icon="heart" className="lapTop2" />
          </ScrollAnimation>
          <div className="create">
            <MDBRow>
              <MDBAnimation type="slideInLeft" delay=".1s">
                <h1 className="Ctext22">F</h1>
              </MDBAnimation>
              <MDBAnimation type="slideInUp" delay=".2s">
                <h1 className="Ctext22">A</h1>
              </MDBAnimation>
              <MDBAnimation type="slideInDown" delay=".3s">
                <h1 className="Ctext22">V</h1>
              </MDBAnimation>
              <MDBAnimation type="slideInUp" delay=".4s">
                <h1 className="Ctext22">O</h1>
              </MDBAnimation>
              <MDBAnimation type="slideInRight" delay=".5s">
                <h1 className="Ctext22">R</h1>
              </MDBAnimation>
              <MDBAnimation type="slindeInUp" delay=".6s">
                <h1 className="Ctext22">I</h1>
              </MDBAnimation>
              <MDBAnimation type="slideInDown" delay=".7s">
                <h1 className="Ctext22">T</h1>
              </MDBAnimation>
              <MDBAnimation type="slideInLeft" delay=".8s">
                <h1 className="Ctext22">E</h1>
              </MDBAnimation>
              <MDBAnimation type="slideInRight" delay=".9s">
                <h1 className="Ctext22">S</h1>
              </MDBAnimation>
            </MDBRow>
          </div>
        </MDBJumbotron>

        {usersPosts}
      </>
    )
  }
}

function mapStateToProps(reduxState) {
  const { id } = reduxState
  return { id }
}

export default connect(mapStateToProps)(Favorites)
