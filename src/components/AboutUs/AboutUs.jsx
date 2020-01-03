import React, { Component } from 'react'
import './AboutUs.scss'
import { MDBCard, MDBRow, MDBCardImage, MDBCardTitle, MDBCol } from 'mdbreact'
import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll'

export class AboutUs extends Component {
  render() {
    return (
      <div className="AboutUsDiv">
        <header
          className="topHalf"
          style={{ display: 'flex', justifyContent: 'flex-start' }}
        >
          <div className="bg">
            <ScrollAnimation animateIn="fadeInLeft" delay=".8s">
              <h1 className="landingText">Social Coders</h1>
            </ScrollAnimation>
            <div className="moretext">
              <div className="landingDes">
                <h1>Developed</h1>
                <div className="moretext">
                  <ScrollAnimation animateIn="fadeInUp" delay=".5s">
                    <h1 className="onHund">1</h1>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="fadeInLeft" delay=".10s">
                    <h1 className="onHund">0</h1>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="fadeInRight" delay=".15s">
                    <h1 className="onHund">0</h1>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="fadeIn" delay=".20s">
                    <h1 className="onHund">%</h1>
                  </ScrollAnimation>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    margin: '.01rem'
                  }}
                >
                  <h1 style={{ margin: '1rem' }}>by</h1>
                  <h1 className="devM">Dev Mountain</h1>
                </div>
                Students!
              </div>
            </div>
          </div>
        </header>
        {/* 
        <MDBRow
          className="startUpsRow"
          style={{
            display: "flex",
            justifyContent: "center",
            maxWidth: "100vw"
          }}
        >
          <ScrollAnimation animateIn="fadeIn" delay=".8s">
            <MDBCard className="cards" style={{ width: "95vw" }}>
              <a className="linkText" href="#/startups">
                <MDBCardImage
                  //className="img-fluid"
                  href="https://devmountain.com/?utm_medium=ppc&utm_source=googleads&utm_campaign=branded&utm_term=dev%20mountain&e=&gclid=CjwKCAiAo7HwBRBKEiwAvC_Q8bomBKI209Z64j_qfjHmG4OvrfI2aDFoZqtr2D-z7AJ82kDgGkFAkBoCvdkQAvD_BwE"
                  style={{ width: '95vw', height: '64vh', margin: '1vh' }}
                  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                />
                <MDBCardTitle
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "3rem",
                    color: "black"
                  }}
                >
                  The Devs
                </MDBCardTitle>
              </a>
            </MDBCard>
          </ScrollAnimation>
        </MDBRow> */}
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
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className="linkText"
                  href="https://devmountain.com/?utm_medium=ppc&utm_source=googleads&utm_campaign=branded&utm_term=dev%20mountain&e=&gclid=CjwKCAiAo7HwBRBKEiwAvC_Q8bomBKI209Z64j_qfjHmG4OvrfI2aDFoZqtr2D-z7AJ82kDgGkFAkBoCvdkQAvD_BwE"
                >
                  <MDBCardImage
                    className="img-fluid"
                    style={{ width: '45vw', height: '40vh' }}
                    src="https://cdn.dribbble.com/users/125167/screenshots/1826114/dribbble.png"
                  />
                  <MDBCardTitle
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      fontSize: '2rem',
                      color: 'black'
                    }}
                  >
                    About Dev Mountain
                  </MDBCardTitle>
                </a>
              </MDBCard>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight" delay=".8s">
              <MDBCard
                className="cards"
                style={{ width: '45vw', height: '45vh', margin: '0 0 0 .5rem' }}
              >
                <a className="linkText" href="#/us">
                  <MDBCardImage
                    className="img-fluid"
                    style={{ width: '45vw', height: '40vh' }}
                    src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
                  />
                  <MDBCardTitle
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      fontSize: '2rem',
                      color: 'black'
                    }}
                  >
                    The Devs
                  </MDBCardTitle>
                </a>
              </MDBCard>
            </ScrollAnimation>
          </MDBCol>
        </MDBRow>
        <footer className="footer">
          {/* <div className="devs">
            <h1 style={{ maxWidth: '25vw' }}>Developers:</h1>
            <a
              href="https://www.linkedin.com/in/nate-roundy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: "2rem", fontSize: "2rem", color: "#2BBBAD" }}
            >
              <MDBIcon icon="beer" style={{ color: "#FFBB33" }} />
              >Roundy
            </a>
            <a
              href="https://www.linkedin.com/in/joshjagoda"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: "2rem", fontSize: "2rem", color: "#2BBBAD" }}
            >
              <MDBIcon icon="robot" style={{ color: "#FFBB33" }} />
              >Josh
            </a>
            <a
              href="https://www.linkedin.com/in/codyjamesyoung"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: "2rem", fontSize: "2rem", color: "#2BBBAD" }}
            >
              <MDBIcon fab icon="earlybirds" style={{ color: "#FFBB33" }} />
              >Cody
            </a>
            <a
              href="https://www.linkedin.com/in/harrison-hancock"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: "2rem", fontSize: "2rem", color: "#2BBBAD" }}
            >
              <MDBIcon icon="user-ninja" style={{ color: "#FFBB33" }} />
              >Hari
            </a>
          </div> */}
        </footer>
      </div>
    )
  }
}

export default AboutUs
