import React, { Component } from 'react'
import './Dashboard.scss'
import { Link } from 'react-router-dom'
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from 'mdbreact'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboardDiv">
        <MDBCol className="cardsContainer">
          <MDBCard className="cards" style={{ width: '25rem' }}>
            <MDBCardImage
              className="img-fluid"
              src="https://images.unsplash.com/photo-1526397751294-331021109fbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
            />
            <MDBCardTitle>
              <a className="linkText" href="#/startups">
                START UPS
              </a>
            </MDBCardTitle>
          </MDBCard>
          <MDBCard className="cards" style={{ width: '25rem' }}>
            <MDBCardImage
              className="img-fluid"
              src="https://images.unsplash.com/photo-1500627321089-19f8ec7b3038?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            />
            <MDBCardTitle>
              <a className="linkText" href="#/channels">
                CHANNELS
              </a>
            </MDBCardTitle>
          </MDBCard>
          <MDBCard className="cards" style={{ width: '25rem' }}>
            <MDBCardImage
              className="img-fluid"
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1063&q=80"
            />
            <MDBCardTitle>
              <a className="linkText" href="#/meetups">
                MEET UPS
              </a>
            </MDBCardTitle>
          </MDBCard>
          <MDBCard className="cards" style={{ width: '25rem' }}>
            <MDBCardImage
              className="img-fluid"
              src="https://images.unsplash.com/photo-1571172964276-91faaa704e1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            />
            <MDBCardTitle>
              <a className="linkText" href="#/favorites">
                FAVORITES
              </a>
            </MDBCardTitle>
          </MDBCard>
        </MDBCol>
      </div>
    )
  }
}

export default Dashboard
