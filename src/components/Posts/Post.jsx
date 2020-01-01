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
      liked: false
    };
  }

  componentDidMount = () => {
    this.getLikes();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.liked !== this.state.liked) {
      console.log(this.state.likes);
      this.getLikes();
      // console.log(this.state.posts)
    }
  };

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

  addLike = () => {
    const { id: user_id } = this.props;
    const { id: post_id } = this.props.post;
    axios
      .post(`/api/liked`, { post_id, user_id })
      .then(this.setState({ liked: !this.state.liked }));
  };

  deleteLike = () => {
    const { id: user_id } = this.props;
    const { id: post_id } = this.props.post;
    axios
      .post(`/api/unlike`, { post_id, user_id })
      .then(this.setState({ liked: !this.state.liked }));
  };
  

  getLikes = () => {
    axios.get(`api/likes/${this.props.post.id}`).then(res => {
      // console.log(res.data[0].count)
      this.setState({
        likes: res.data[0].count
      });
    });
  };

  deletePost = () => {
    const { id } = this.props.post;
    axios
      .delete(`/api/posts/${id}`)
      .then(res => document.location.reload())
      .catch(err => console.log(err));
  };

  word = ()=> {
    if(+this.state.likes === +1){
      return 'like'
    } else {
      return 'likes'
    }
  }

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
          <h4 className="time">12 hrs</h4>
          <h4 className="title">{title}</h4>
          <img className="post-picture" src={`${img}`} alt="" />
          <div className="post-content">{parse(content)}
          <div className="post-gradient"/>
          </div>
          <h5 className="likes">{this.state.likes} {this.word()}</h5>
        
        </div>
        <div className="icons">
          <div className="icon-box">
            <i
              className={`fas fa-heart ${this.state.liked ? "heart-red" : "heart-purple"}`}
              onClick={!this.state.liked ? this.addLike : this.deleteLike}
            ></i>
            
            <MDBIcon
              far
              icon="comment-alt"
              onClick={() => this.props.history.push(`/post_details/${id}`)}
            />
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
