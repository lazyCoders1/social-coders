import React, { Component } from "react";
import { connect } from "react-redux";
import { updateComment, updateUserInfo } from "../../Reduxs/reducer";
import {
  MDBRow,
  MDBCol,
  // MDBBtn,
  // MDBView,
  MDBContainer,
  // MDBCard,
  MDBCardBody,
  // MDBCardTitle,
  MDBCardText
  // MDBCardFooter,
  // MDBIcon
} from "mdbreact";

export class PostDetailComments extends Component {
  render() {
    return (
      <div>
        <MDBContainer className="commentText">
          <MDBRow>
            <MDBCol>
              {/* <Link className="btn stretched-link" to={`/postdetails/${this.props.el.post_id}`}> */}
              <MDBCardBody>
                <MDBCardText>{this.props.el.comment_content}</MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { createComment } = state;

  return {
    createComment
    // profile_img
  };
}

export default connect(mapStateToProps, {
  updateComment,
  updateUserInfo
})(PostDetailComments);
