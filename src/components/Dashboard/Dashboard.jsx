import React, { Component } from 'react'
import './Dashboard.scss'
import {
  MDBCard,
  MDBContainer,
  MDBRow,
  MDBIcon,
  MDBCardImage,
  MDBCardTitle,
  MDBJumbotron,
  MDBCol
} from 'mdbreact'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboardDiv">
        <header
          className="topHalf"
          style={{ display: 'flex', flexDirection: 'row' }}
        >
          <div
            className="devs"
            style={{
              display: 'flex',
              flexDirection: 'column',
              margin: '0 auto'
            }}
          >
            <h1
              style={{ margin: '2rem 0 0 1rem', textDecoration: 'underline' }}
            >
              Developers
            </h1>
            <a
              href="https://www.linkedin.com/in/nate-roundy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: '2rem', fontSize: '2rem', color: 'black' }}
            >
              <MDBIcon icon="beer" /> Roundy
            </a>
            <a
              href="https://www.linkedin.com/in/joshjagoda"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: '2rem', fontSize: '2rem', color: 'black' }}
            >
              <MDBIcon icon="robot" />
              Josh
            </a>
            <a
              href="https://www.linkedin.com/in/codyjamesyoung"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: '2rem', fontSize: '2rem', color: 'black' }}
            >
              <MDBIcon fab icon="earlybirds" />
              Cody
            </a>
            <a
              href="https://www.linkedin.com/in/harrison-hancock"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: '2rem', fontSize: '2rem', color: 'black' }}
            >
              <MDBIcon icon="user-ninja" />
              Hari
            </a>
          </div>
          <MDBContainer style={{ margin: '0 auto' }}>
            <MDBJumbotron
              style={{
                borderRadius: '2%',
                width: '70vw',
                height: '111vh',
                padding: 0
              }}
            >
              <MDBCol
                className="text-white text-center py-5 px-4 my-5"
                style={{
                  margin: '0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '70vw',
                  height: '111vh',
                  padding: 0,
                  borderRadius: '2%',
                  backgroundSize: '70vw 111vh',
                  backgroundImage: `url(https://images.unsplash.com/photo-1527698266440-12104e498b76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)`
                }}
              >
                <MDBCardTitle
                  style={{ fontSize: '5rem', maxWidth: '26rem' }}
                  className="h1-responsive pt-3 m-5 font-bold"
                >
                  Social Development
                </MDBCardTitle>
              </MDBCol>
            </MDBJumbotron>
          </MDBContainer>
        </header>

        <MDBRow
          className="startUpsRow"
          style={{
            display: 'flex',
            justifyContent: 'center',
            maxWidth: '100vw'
          }}
        >
          <MDBCard className="cards" style={{ width: '95vw' }}>
            <a className="linkText" href="#/startups">
              <MDBCardImage
                //className="img-fluid"
                href="#/startups"
                style={{ width: '95vw', height: '64vh' }}
                src="https://images.unsplash.com/photo-1547039996-61c1135690c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1797&q=80"
              />
              <MDBCardTitle
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontSize: '3rem',
                  color: 'black'
                }}
              >
                START UPS
              </MDBCardTitle>
            </a>
          </MDBCard>
        </MDBRow>
        <MDBRow>
          <MDBCol
            className="cardsContainer"
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              margin: '.5rem 0 0 2rem'
            }}
          >
            <MDBCard
              className="cards"
              style={{ width: '50vw', height: '45vh', margin: '0 0 .5rem 0' }}
            >
              <a className="linkText" href="#/channels">
                <MDBCardImage
                  className="img-fluid"
                  style={{ width: '50vw', height: '40vh' }}
                  src="https://images.unsplash.com/photo-1500627321089-19f8ec7b3038?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                />
                <MDBCardTitle
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    color: 'black'
                  }}
                >
                  CHANNELS
                </MDBCardTitle>
              </a>
            </MDBCard>
            <MDBCard
              className="cards"
              style={{ width: '50vw', height: '45vh' }}
            >
              <a className="linkText" href="#/meetups">
                <MDBCardImage
                  className="img-fluid"
                  style={{ width: '50vw', height: '40vh' }}
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1063&q=80"
                />
                <MDBCardTitle
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    color: 'black'
                  }}
                >
                  MEET UPS
                </MDBCardTitle>
              </a>
            </MDBCard>
          </MDBCol>
          <MDBCol
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column'
            }}
          >
            <MDBCard className="cards" style={{ width: '43.4vw' }}>
              <a className="linkText" href="#/favorites">
                <MDBCardImage
                  className="img-fluid"
                  src="https://images.unsplash.com/photo-1571172964276-91faaa704e1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                />
                <MDBCardTitle
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    color: 'black'
                  }}
                >
                  FAVORITES
                </MDBCardTitle>
              </a>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    )
  }
}

export default Dashboard
