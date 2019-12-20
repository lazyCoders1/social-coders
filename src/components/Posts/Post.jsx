import React, { Component } from "react";
import { MDBIcon } from "mdbreact";
import "./post.scss";
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Post extends Component {
    
    addFavorite = () => {
        let {id, title, img, content, author_id, category} = this.props.post
        let {user_id, name, profile_pic} = this.props.profile
        let user = {user_id, name, profile_pic}
        // console.log(user)
        let post = {id, title, img, content, author_id, category}
        let favoritePost = {...user, ...post}
        // console.log(favoritePost)
            axios.post(`/api/favorites/${this.props.post.id}`, favoritePost)
            .then(toast("Post added to favorites!"))
    }
    
  render() {
    const post = this.props.post;
    const user = this.props.profile;
    return (
      <div key={post.id} className="post-card">
        <div
          style={{
            backgroundImage: `url(${user.profile_pic})`,
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
        <h2 className="users-name">{user.name}</h2>
        <h4 className="time">12 hrs</h4>
  <h4 className='title'>{post.title}</h4>
        <div className="post-content">{post.content}</div>
        <img className="post-picture" src={`${post.img}`} alt='' />
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

export default Post;
