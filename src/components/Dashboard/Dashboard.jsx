import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Link to="/startups">startups</Link>
        <Link to="/channels">channels</Link>
        <Link to="/meetups"> meetups</Link>
        <Link to="/favorites">favorites</Link>
        <Link to="/">dashboard</Link>
      </div>
    )
  }
}

export default Dashboard
