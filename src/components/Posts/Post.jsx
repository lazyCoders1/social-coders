import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBIcon } from "mdbreact";
import "./post.scss";
import axios from "axios";
import parse from "html-react-parser";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      comments: 0,
      liked: false,
      fav: false
    };
  }

  componentDidMount = () => {
    this.getLikes();
    this.checkLikes();
    this.checkFav();
    this.countComments();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.liked !== this.state.liked) {
      this.getLikes();
    }
    if (prevState.fav !== this.state.fav) {
      this.checkFav();
    }
  };

  checkFav = () => {
    if (this.props.id) {
      const { id: user_id } = this.props;
      const { id: post_id } = this.props.post;
      axios
        .post("/api/favs", { user_id, post_id })
        .then(res => this.setState({ fav: res.data }))
        .catch(err => console.log(err));
    }
  };

  addFavorite = () => {
    const { id: user_id } = this.props;
    const { id: post_id } = this.props.post;
    axios
      .post(`/api/favorites`, { post_id, user_id })
      .then(res => this.setState({ fav: true }))
      .catch(err =>
        Swal.fire({
          title: err.response.data.message,
          icon: "error",
          timer: 1200,
          showConfirmButton: false
        })
      );
  };

  deleteFavorite = () => {
    const { id: user_id } = this.props;
    const { id: post_id } = this.props.post;
    axios
      .post("/api/favorite", { post_id, user_id })
      .then(res => this.setState({ fav: false }))
      .catch(err =>
        Swal.fire({
          title: err.response.data.message,
          icon: "error",
          timer: 1200,
          showConfirmButton: false
        })
      );
  };

  countComments = () => {
    const { id } = this.props.post;
    axios
      .get(`/api/comment/${id}`)
      .then(res => {
        this.setState({ comments: res.data });
      })
      .catch(err => console.log(err));
  };

  addLike = () => {
    const { id: user_id } = this.props;
    const { id: post_id } = this.props.post;
    axios
      .post(`/api/liked`, { post_id, user_id })
      .then(res => this.setState({ liked: true }))
      .catch(err =>
        Swal.fire({
          title: err.response.data.message,
          icon: "error",
          showConfirmButton: false,
          timer: 1200
        })
      );
  };

  deleteLike = () => {
    const { id: user_id } = this.props;
    const { id: post_id } = this.props.post;
    axios
      .post(`/api/unliked`, { post_id, user_id })
      .then(res => this.setState({ liked: false }))
      .catch(err => console.log(err));
  };

  getLikes = () => {
    axios
      .get(`api/likes/${this.props.post.id}`)
      .then(res => {
        this.setState({
          likes: res.data[0].count
        });
      })
      .catch(err => console.log(err));
  };

  checkLikes = () => {
    if (this.props.id) {
      const { id: user_id } = this.props;
      const { id: post_id } = this.props.post;
      axios
        .post("/api/likes", { user_id, post_id })
        .then(res => this.setState({ liked: res.data }))
        .catch(err => console.log(err));
    }
  };

  word = () => {
    if (+this.state.likes === +1) {
      return "Like";
    } else {
      return "Likes";
    }
  };

  render() {
    const {
      id,
      title,
      img,
      content,
      name,
      profile_pic,
      author_id
    } = this.props.post;
    return (
      <div style={{ background: "#f8f8ff" }} className="post-card">
        <div
          onClick={() => this.props.history.push(`/profile/${author_id}`)}
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
        <div
          className="clickable"
          onClick={() => this.props.history.push(`/post_details/${id}`)}
        >
          <h2 className="users-name">{name}</h2>
          <time className="time">12 hrs</time>
          <h4 className="title">{title}</h4>
          <img
            className="post-picture"
            src={`${img}`}
            alt=""
            style={{ maxWidth: "98%", maxHeight: '200px' }}
          />
          <div className="post-content">
            {parse(content)}
            <div className="post-gradient" />
          </div>
          <div style={{ display: "flex" }}>
            <h5 style={{ marginRight: "7px" }} className="likes">
              {this.state.likes} {this.word()}
            </h5>
            <h5 className="likes"> {this.state.comments} Comments</h5>
          </div>
        </div>
        <div className="icons">
          <div className="icon-box">
            <i
              className={`fas fa-heart ${
                this.state.liked ? "heart-red" : "heart-purple"
              }`}
              onClick={!this.state.liked ? this.addLike : this.deleteLike}
            ></i>
            <MDBIcon
              far
              icon="comment-alt"
              onClick={() => this.props.history.push(`/post_details/${id}`)}
            />
            <MDBIcon icon="share" />
            <i
              style={{ visibility: "hidden" }}
              className="fas fa-ellipsis-h"
            ></i>
          </div>
          <i
            className={`fas fa-star ${
              this.state.fav ? "star-yellow" : "star-black"
            }`}
            onClick={!this.state.fav ? this.addFavorite : this.deleteFavorite}
          ></i>
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
