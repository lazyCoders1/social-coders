import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBIcon } from "mdbreact";
import "./post.scss";
import axios from "axios";
import parse from "html-react-parser";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";

class Post extends Component {
  addFavorite = () => {
    const { id: user_id } = this.props;
    const { id: post_id } = this.props.post;
    axios
      .post(`/api/favorites`, { post_id, user_id })
      .then(res =>
        Swal.fire({
          title: res.data.message,
          icon: "success",
          timer: 1000,
          showConfirmButton: false,
          position: "top-end"
        })
      )
      .catch(err =>
        Swal.fire({
          title: err.response.data.message,
          icon: "error",
          timer: 1200,
          showConfirmButton: false,
          position: "top-end"
        })
      );
  };

  deletePost = () => {
    const { id } = this.props.post;
    axios
      .delete(`/api/posts/${id}`)
      .then(res => document.location.reload())
      .catch(err => console.log(err));
  };

  render() {
    const { id, title, img, content, name, profile_pic } = this.props.post;
    return (
      <div
        onClick={() => this.props.history.push(`/post_details/${id}`)}
        style={{ background: "#f8f8ff" }}
        className="post-card"
      >
        <div
          style={{
            backgroundImage: `url(${profile_pic})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            height: "50px",
            width: "50px",
            borderRadius: "50%",
            top: "10px",
            left: "10px"
          }}
        />
        <h2 className="users-name">{name}</h2>
        <h4 className="time">12 hrs</h4>
        <h4 className="title">{title}</h4>
        <div className="post-content">{parse(content)}</div>
        <img className="post-picture" src={`${img}`} alt="" />
        <h5 className="likes">43 likes</h5>
        <div className="icons">
          <div className="icon-box">
            <i className="fas fa-heart"></i>
            <MDBIcon far icon="comment-alt" />
            <MDBIcon icon="share" />
            <i onClick={this.deletePost} className="fas fa-ellipsis-h"></i>
          </div>
          <i className="fas fa-star" onClick={this.addFavorite}></i>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  const { id } = reduxState;
  return { id };
}

export default withRouter(connect(mapStateToProps)(Post));
