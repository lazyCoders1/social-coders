import React, { Component } from "react";
import axios from "axios";
import "./profile.scss";
import EditProfile from "./EditProfile";
import { MDBIcon } from "mdbreact";
import Post from "../Posts/Post";
import Create from "./../Posts/CreatePost";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: 0,
      name: "",
      profile_pic: "",
      cover_photo: "",
      headline: "",
      city: "",
      state: "",
      linked_in: "",
      github: "",
      posts: [],
      toggle: false,
      toggleTwo: false
    };
  }

  componentDidMount = () => {
    this.getPosts();
    this.getProfile();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.posts.length !== this.state.posts.length) {
      this.getPosts();
    }
  }

  getProfile = async () => {
    const res = await axios.get(`/api/profile/${this.props.match.params.id}`);
    // console.log(res.data[0].name)
    this.setState({
      user_id: res.data[0].id,
      name: res.data[0].name,
      profile_pic: res.data[0].profile_pic,
      cover_photo: res.data[0].cover_photo,
      headline: res.data[0].headline,
      city: res.data[0].city,
      state: res.data[0].state,
      linked_in: res.data[0].linked_in,
      github: res.data[0].github
    });
  };

  getPosts = () => {
    axios.get(`/api/user/posts/${this.props.match.params.id}`).then(res => {
      this.setState({
        posts: res.data
      });
      // this.getUsersPosts()
    });
  };

  toggleTwo = () => {
    this.setState({
      toggleTwo: !this.state.toggleTwo
    });
  };

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  render() {
    const el = this.state;
    const usersPosts = this.state.posts.map((post, i) => {
      return (
        <div key={post.id}>
          <Post
            id={this.props.match.params.id}
            post={post}
            profile={this.state}
          />
        </div>
      );
    });
    return (
      <div>
        <div className="top-padding" />
        <div key={el.id} className="user-profile-container">
          <div
            style={{
              backgroundImage: `url('${el.cover_photo}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "250px",
              position: "relative"
            }}
          />
          <div className="profile-pic">
            <div
              style={{
                backgroundImage: `url('${el.profile_pic}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                height: "145px",
                width: "145px",
                borderRadius: "50%",
                margin: "0 auto"
              }}
            />
          </div>
          <div className="edit">
            <MDBIcon
              icon="pen"
              onClick={() => this.toggleTwo()}
              className="edit-pen"
            />
          </div>

          <div className="header-container">
            <div className="name-container">
              <h3>{el.name}</h3>
            </div>
            <div className="about-container">
              <div className="address">{el.city}</div>
            </div>
            <a className="connect" href={`${el.linked_in}`}>
              <MDBIcon fab icon="linkedin" />
            </a>
          </div>

          <div className="header-container">
            <div className="name-container">
              <h4>{el.headline}</h4>
            </div>
            <div className="about-container">
              <div className="address">{el.state}</div>
            </div>
            <a className="connect" href={`${el.github}`}>
              <MDBIcon fab icon="github" />
            </a>
          </div>
        </div>
        {this.state.toggle ? (
          <Create toggle={this.toggle} getPosts={this.getPosts} />
        ) : null}
        <div className="input" onClick={this.toggle}>
          Create post...
        </div>
        {usersPosts}
        {this.state.toggleTwo ? (
          <EditProfile
            key={this.props.location.key}
            id={this.props.match.params.id}
            toggleTwo={this.toggleTwo}
            getProfile={this.getProfile}
            profile={this.state}
          />
        ) : null}
      </div>
    );
  }
}

export default Profile;
