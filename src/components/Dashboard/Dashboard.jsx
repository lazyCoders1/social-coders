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
  MDBCol,
  MDBView
} from 'mdbreact'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboardDiv">
        <header
          className="topHalf"
          style={{ display: 'flex', flexDirection: 'row' }}
        >
          <MDBContainer style={{ margin: '0 auto' }}>
            <MDBJumbotron
              style={{
                borderRadius: '2%',
                width: '90.2vw',
                height: '100vh',
                padding: 0
              }}
            >
              <MDBCol
                className="text-white text-center py-5 px-4 my-5"
                id="landingPic"
                style={{
                  margin: '0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '90.2vw',
                  height: '100vh',
                  padding: 0,
                  borderRadius: '2%',
                  backgroundSize: '90vw 111vh',
                  backgroundImage: `url(https://images.unsplash.com/photo-1493159815322-8ab88f5234aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)`
                }}
                hover
                zoom
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
              <MDBIcon icon="beer" /> >Roundy
            </a>
            <a
              href="https://www.linkedin.com/in/joshjagoda"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: '2rem', fontSize: '2rem', color: '#2BBBAD' }}
            >
              <MDBIcon icon="robot" />
              >Josh
            </a>
            <a
              href="https://www.linkedin.com/in/codyjamesyoung"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: '2rem', fontSize: '2rem', color: '#2BBBAD' }}
            >
              <MDBIcon fab icon="earlybirds" />
              >Cody
            </a>
            <a
              href="https://www.linkedin.com/in/harrison-hancock"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: '2rem', fontSize: '2rem', color: '#2BBBAD' }}
            >
              <MDBIcon icon="user-ninja" />
              >Hari
            </a>
          </div>
        </footer>
      </div>
    )
  }
}

export default Dashboard
