import React, { Component } from 'react'
import './Dashboard.scss'
import {
  MDBCard,
  MDBRow,
  MDBIcon,
  MDBCardImage,
  MDBCardTitle,
  MDBCol
} from 'mdbreact'
import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboardDiv">
        <header
          className="topHalf"
          style={{ display: 'flex', justifyContent: 'flex-start' }}
        >
          <div className="bg">
            <ScrollAnimation animateIn="fadeInLeft" delay=".8s">
              <h1 className="landingText">DEVELOP CREATIVELY</h1>
            </ScrollAnimation>
          </div>
        </header>

        <MDBRow
          className="startUpsRow"
          style={{
            display: 'flex',
            justifyContent: 'center',
            maxWidth: '100vw'
          }}
        >
          <ScrollAnimation animateIn="fadeIn" delay=".8s">
            <MDBCard className="cards" style={{ width: '95vw' }}>
              <a className="linkText" href="#/startups">
                <MDBCardImage
                  //className="img-fluid"
                  href="#/startups"
                  style={{ width: '95vw', height: '64vh', margin: '1vh' }}
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
          </ScrollAnimation>
        </MDBRow>
        <MDBRow>
          <MDBCol
            className="cardsContainer"
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
              margin: '.5rem 0 0 2rem'
            }}
          >
            <ScrollAnimation animateIn="fadeInLeft" delay=".8s">
              <MDBCard
                className="cards"
                style={{ width: '45vw', height: '45vh' }}
              >
                <a className="linkText" href="#/channels">
                  <MDBCardImage
                    className="img-fluid"
                    style={{ width: '45vw', height: '40vh' }}
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
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight" delay=".8s">
              <MDBCard
                className="cards"
                style={{ width: '45vw', height: '45vh', margin: '0 0 0 .5rem' }}
              >
                <a className="linkText" href="#/meetups">
                  <MDBCardImage
                    className="img-fluid"
                    style={{ width: '45vw', height: '40vh' }}
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
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
            </ScrollAnimation>
          </MDBCol>
        </MDBRow>
        <footer className="footer">
          <div className="devs">
            <h1 style={{ maxWidth: '25vw' }}>Developers:</h1>
            <a
              href="https://www.linkedin.com/in/nate-roundy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: '2rem', fontSize: '2rem', color: '#2BBBAD' }}
            >
              <MDBIcon icon="beer" style={{ color: '#FFBB33' }} />
              >Roundy
            </a>
            <a
              href="https://www.linkedin.com/in/joshjagoda"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: '2rem', fontSize: '2rem', color: '#2BBBAD' }}
            >
              <MDBIcon icon="robot" style={{ color: '#FFBB33' }} />
              >Josh
            </a>
            <a
              href="https://www.linkedin.com/in/codyjamesyoung"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: '2rem', fontSize: '2rem', color: '#2BBBAD' }}
            >
              <MDBIcon fab icon="earlybirds" style={{ color: '#FFBB33' }} />
              >Cody
            </a>
            <a
              href="https://www.linkedin.com/in/harrison-hancock"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: '2rem', fontSize: '2rem', color: '#2BBBAD' }}
            >
              <MDBIcon icon="user-ninja" style={{ color: '#FFBB33' }} />
              >Hari
            </a>
          </div>
        </footer>
      </div>
    )
  }
}

export default Dashboard
