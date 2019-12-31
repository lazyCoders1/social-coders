import React from "react";
import {
  // MDBBtn,
  MDBCard,
  // MDBContainer,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  // MDBNavbarNav,
  // MDBCardFooter,
  MDBCardText,
  // MDBBox,
  MDBCol
} from "mdbreact";
import { Link } from "react-router-dom";
import "./MeetUps.scss";

export default function MeetUpsDash(props) {
  const el = props.meetUpPost;
  return (
    <div id="meetups" key={el.id}>
      <MDBCol>
        <Link to={`/meetup_details/${el.id}`}>
          <MDBCard className="meetup-cards shadow-box-example hoverable">
            {/* <MDBNavbarNav right>
                <MDBBtn
                  style={{ height: "2rem" }}
                  color="warning"
                  size="sm"
                  onClick={() => props.deletePost(el.id)}
                >
                  X
                </MDBBtn>
              </MDBNavbarNav> */}

            <MDBCardImage className="img-fluid" src={el.img} waves />
            <MDBCardBody className="meetup-content">
              <MDBCardText className="text-uppercase font-weight-bolder blue-text">
                {el.date}, {el.time}{" "}
              </MDBCardText>
              <MDBCardTitle>{el.title}</MDBCardTitle>
              {/* <MDBCardText>Time:</MDBCardText> */}
              <MDBCardText>Description: {el.description} </MDBCardText>
              <MDBCardText>Street: {el.street} </MDBCardText>
              <MDBCardText>City: {el.city}</MDBCardText>
              <MDBCardText>State: {el.state} </MDBCardText>
              <MDBCardText>Zipcode: {el.zipcode}</MDBCardText>
            </MDBCardBody>
            {/* <MDBCardFooter className="footer-bar">
                <p>Last updated 1 min ago</p>
                <Link>
                  <button>
                    <i className="fas fa-comment-alt"> Comment</i>
                  </button>
                </Link>
                <button>
                  <i className="fas fa-share"> Share</i>
                </button>
                <i className="fas fa-bookmark"> Save</i>
              </MDBCardFooter> */}
          </MDBCard>
        </Link>
      </MDBCol>
    </div>
  );
}
