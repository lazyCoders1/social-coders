import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBBox
} from "mdbreact";

const Channels = () => {
  return (
    <>
      <h1 style={{ margin: "40px" }}>Channels</h1>
      <MDBBox className="d-flex">
        <MDBCol>
          <MDBCard style={{ width: "22rem" }}>
            <MDBCardImage
              className="img-fluid"
              src="https://colorlib.com/wp/wp-content/uploads/sites/2/JavaScript-logo.png"
              waves
            />
            <MDBCardBody>
              <MDBCardTitle>JavaScript</MDBCardTitle>
              <MDBCardText>
                This channel focuses solely on JavaScript code.
              </MDBCardText>
              <MDBBtn href="#/javascript">Go!</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard style={{ width: "22rem" }}>
            <MDBCardImage
              className="img-fluid"
              src="https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg"
              waves
            />
            <MDBCardBody>
              <MDBCardTitle>CSS</MDBCardTitle>
              <MDBCardText>
                This channel focuses solely on CSS code.
              </MDBCardText>
              <MDBBtn href="#/css">Go!</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard style={{ width: "22rem" }}>
            <MDBCardImage
              className="img-fluid"
              src="https://www.manbiz.com/wp-content/uploads/2016/04/5-ways-to-show-off-your-brand-onsite-and-why-you-need-to.jpg"
              waves
            />
            <MDBCardBody>
              <MDBCardTitle>Other</MDBCardTitle>
              <MDBCardText>
                This channel allows users to post any code they want to show off
                or to browse code already posted.
              </MDBCardText>
              <MDBBtn href="#/other">Go!</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBBox>
    </>
  );
};

export default Channels;
