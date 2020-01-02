import React, { Component } from "react";
import { connect } from "react-redux";
import parse from "html-react-parser";
import axios from "axios";
import ReactQuill from "react-quill";
import { Link } from "react-router-dom";
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBContainer,
  MDBCardBody,
  MDBCardText
} from "mdbreact";
import "./Comment.scss";

export class Comment extends Component {
  constructor(props) {
    super(props);
    const { id, content, name, profile_pic } = this.props.comment;
    this.state = {
      id,
      content,
      name,
      profile_pic,
      edit: false
    };
  }
  
  deleteComment = () => {
    const { id } = this.state;
    axios
      .delete(`/api/comments/${id}`)
      .then(res => window.location.reload())
      .catch(err => console.log(err));
  };

  updateComment = () => {
    if (this.state.comment) {
      const { id, comment: content } = this.state;
      axios
        .patch(`/api/comments/${id}`, { content })
        .then(res => window.location.reload())
        .catch(err => console.log(err));
    } else {
      const { id, content } = this.state;
      axios
        .patch(`/api/comments/${id}`, { content })
        .then(res => window.location.reload())
        .catch(err => console.log(err));
    }
  };

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  };

  handleComment = value => {
    this.setState({ comment: value });
  };

  render() {
    const modules = {
      toolbar: [
        ["bold", "italic", "underline", "strike", "code"],
        ["blockquote", "code-block"],
        ["link"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" }
        ]
      ]
    };
    const { content, name, profile_pic } = this.state;
    return (
      <div>
        <MDBContainer className="commentText">
          <MDBRow>
            <MDBCol>
              <MDBCardBody>
                <MDBCardText>
                  {!this.state.edit ? (
                    parse(String(content))
                  ) : (
                    <div>
                      <ReactQuill
                        style={{
                          width: "100%"
                        }}
                        defaultValue={content}
                        onChange={this.handleComment}
                        modules={modules}
                      />
                    </div>
                  )}
                  <div className="commentor-box">
                    <div className="commentbtn-box">
                      {this.props.id === this.props.comment.author_id && (
                        <>
                          {!this.state.edit ? (
                            <MDBBtn onClick={this.toggleEdit} size="sm">
                              Edit Comment
                            </MDBBtn>
                          ) : (
                            <MDBBtn
                              size="sm"
                              onClick={() => {
                                this.toggleEdit();
                                this.updateComment();
                              }}
                            >
                              Save Edit
                            </MDBBtn>
                          )}
                          <MDBBtn
                            size="sm"
                            color="danger"
                            onClick={this.deleteComment}
                          >
                            Delete Comment
                          </MDBBtn>
                        </>
                      )}
                    </div>
                    <Link
                      className="commentor-links"
                      to={`/profile/${this.props.comment.author_id}`}
                    >
                      <div
                        style={{
                          backgroundImage: `url(${profile_pic})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          height: "35px",
                          width: "35px",
                          borderRadius: "50%",
                          marginRight: "10px"
                        }}
                      />
                      {name}
                    </Link>
                  </div>
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  const { id } = reduxState;
  return { id };
}

export default connect(mapStateToProps)(Comment);
