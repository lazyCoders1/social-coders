import React from 'react'
import './TheDevs.scss'
import {
  MDBJumbotron,
  MDBContainer,
  MDBCardImage,
  MDBRow,
  MDBIcon
} from 'mdbreact'
import ScrollAnimation from 'react-animate-on-scroll'

const TheDevs = () => {
  return (
    <div>
      <hr />
      <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutRight">
        <MDBJumbotron fluid className="jumboImgR">
          <MDBContainer>
            <MDBRow style={{ display: 'flex', alignItems: 'center' }}>
              <MDBCardImage
                src="https://media.licdn.com/dms/image/C5603AQEIYLmz5xTE-w/profile-displayphoto-shrink_200_200/0?e=1583366400&v=beta&t=GwSzPUbh0YD9gDdYmRI25LncwQQpqqYwsuuU27d94rM"
                alt="Roundy"
                className="devsPro"
              />
              <h2
                className="display-4"
                style={{
                  textDecoration: 'none',
                  color: '#FFD396',
                  margin: '2rem'
                }}
              >
                Nate Roundy
              </h2>
              <a href="https://www.linkedin.com/in/nate-roundy">
                <MDBIcon
                  fab
                  icon="linkedin"
                  style={{ color: 'white', fontSize: '1.6rem' }}
                />
              </a>
              <a href="https://github.com/Vosslc">
                <MDBIcon
                  fab
                  icon="github"
                  style={{ margin: '3rem', color: 'white', fontSize: '1.6rem' }}
                />
              </a>
            </MDBRow>
            <p
              className="lead"
              style={{
                marginTop: '2rem',
                textDecoration: 'none',
                color: '#FFD396',
                fontSize: '1.6rem'
              }}
            >
              Developer by day, Brewer by night
            </p>
          </MDBContainer>
        </MDBJumbotron>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutLeft">
        <MDBJumbotron fluid className="jumboImgC">
          <MDBContainer>
            <MDBRow style={{ display: 'flex', alignItems: 'center' }}>
              <MDBCardImage
                src="https://media.licdn.com/dms/image/C5603AQE6d4yh-3HPvw/profile-displayphoto-shrink_200_200/0?e=1583366400&v=beta&t=B0NOTNk-_1BMvGuvKhArRBiBTb3lNWfP0JYwK3YxBTo"
                alt="Cody"
                className="devsPro"
              />
              <h2
                className="display-4"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  margin: '2rem'
                }}
              >
                Cody Young
              </h2>
              <a href="https://www.linkedin.com/in/codyjamesyoung">
                <MDBIcon
                  fab
                  icon="linkedin"
                  style={{ color: 'white', fontSize: '1.6rem' }}
                />
              </a>
              <a href="https://github.com/Codus1127">
                <MDBIcon
                  fab
                  icon="github"
                  style={{ margin: '3rem', color: 'white', fontSize: '1.6rem' }}
                />
              </a>
            </MDBRow>
            <p
              className="lead"
              style={{
                marginTop: '2rem',
                textDecoration: 'none',
                color: 'white',
                fontSize: '1.6rem'
              }}
            >
              A grill hunting homie dev
            </p>
          </MDBContainer>
        </MDBJumbotron>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutRight">
        <MDBJumbotron fluid className="jumboImgJ">
          <MDBContainer>
            <MDBRow style={{ display: 'flex', alignItems: 'center' }}>
              <MDBCardImage
                src="https://media.licdn.com/dms/image/C5603AQHs-X_hHpwOZw/profile-displayphoto-shrink_200_200/0?e=1583366400&v=beta&t=1yWeDSZa3Dpckd4o-kA5Kbynmi2WyTQMooHVJuiYvfs"
                alt="Roundy"
                className="devsPro"
              />
              <h2
                className="display-4"
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  margin: '2rem'
                }}
              >
                Josh Jagoda
              </h2>
              <a href="https://www.linkedin.com/in/joshjagoda">
                <MDBIcon
                  fab
                  icon="linkedin"
                  style={{ color: 'white', fontSize: '1.6rem' }}
                />
              </a>
              <a href="https://github.com/jnjagod">
                <MDBIcon
                  fab
                  icon="github"
                  style={{ margin: '3rem', color: 'white', fontSize: '1.6rem' }}
                />
              </a>
            </MDBRow>
            <p
              className="lead"
              style={{
                marginTop: '2rem',
                textDecoration: 'none',
                color: 'black',
                fontSize: '1.6rem'
              }}
            >
              100% H.U.M.A.N
            </p>
          </MDBContainer>
        </MDBJumbotron>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutLeft">
        <MDBJumbotron fluid className="jumboImgH">
          <MDBContainer>
            <MDBRow style={{ display: 'flex', alignItems: 'center' }}>
              <MDBCardImage
                src="https://media.licdn.com/dms/image/C4E03AQE8eh187_5FNA/profile-displayphoto-shrink_200_200/0?e=1583366400&v=beta&t=ph6K0QXXrbAwtSirAcR734Pb9zJvtF-FhTNu-5IpNRY"
                alt="Roundy"
                className="devsPro"
              />
              <h2
                className="display-4"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  margin: '2rem'
                }}
              >
                Harrison Hancock
              </h2>
              <a href="https://www.linkedin.com/in/harrison-hancock">
                <MDBIcon
                  fab
                  icon="linkedin"
                  style={{ color: 'white', fontSize: '1.6rem' }}
                />
              </a>
              <a href="https://github.com/Shokupanman">
                <MDBIcon
                  fab
                  icon="github"
                  style={{ margin: '3rem', color: 'white', fontSize: '1.6rem' }}
                />
              </a>
            </MDBRow>
            <p
              className="lead"
              style={{
                marginTop: '2rem',
                textDecoration: 'none',
                color: 'white',
                fontSize: '1.6rem'
              }}
            >
              Bilingual Web Developer
            </p>
          </MDBContainer>
        </MDBJumbotron>
      </ScrollAnimation>
    </div>
  )
}

export default TheDevs
