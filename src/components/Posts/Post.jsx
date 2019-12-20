import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBIcon } from "mdbreact";
import "./post.scss";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import parse from "html-react-parser";

class Post extends Component {
  addFavorite = () => {
    const { id } = this.props;
    const { id: post_id } = this.props.post;
    axios
      .post(`/api/favorites/${id}`, { post_id })
      .then(toast("Post added to favorites!"))
      .catch(err => console.log(err));
  };

  render() {
    const { title, img, content, name, profile_pic } = this.props.post;
    return (
      <div className="post-card">
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
          </div>
          <i className="fas fa-star" onClick={() => this.addFavorite()}></i>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  const { id } = reduxState;
  return { id };
}

export default connect(mapStateToProps)(Post);
