import React, { Component } from "react";
import axios from "axios";
import "./profile.scss";
import EditProfile from "./EditProfile";
import { MDBIcon } from "mdbreact";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        profile_pic: '', 
        cover_photo: '', 
        headline: '',
        city: '',
        state: '', 
        linked_in: '', 
        github: '', 
        posts: [],
        toggle: false
    };
  }

  componentDidMount = () => {
    this.getUsersPosts();
    this.getProfile();
  };

  getProfile = async () => {
    const res = await axios.get(`/api/profile/${this.props.match.params.id}`);
    // console.log(res.data[0].name)
    this.setState({
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

  getUsersPosts = async () => {
    const res = await axios.get(`/api/user/posts/${this.props.match.params.id}`);
    // console.log(res.data);
    this.setState({
      posts: res.data
    });
  };

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  render() {
    const el = this.state
    const usersPosts = this.state.posts.map((el, i) => {
      return (
        <div className="user-post-container" key={el.id}>
          <h1 className="h1">{el.title}</h1>
          <img className="img" src={el.img} alt="article image" />
          <p className="p">{el.content}</p>
        </div>
      );
    });
    return (
      <div>
        <div className="top-padding" />
            <div key={el.id} className="user-profile-container">
            <div className="cover-photo">{el.cover_photo}</div>
            <div className="profile-pic">
              <img src={el.profile_pic} alt="robot" />
            </div>
            <div className="header-container">
              <div className="name-container">
                <h3>{el.name}</h3>
                <h4>{el.headline}</h4>
              </div>
              <div className="about-container">
                <div className="address">{el.city}</div>
                <div className="address">{el.state}</div>
              </div>
                <div className="about">
                  {el.linked_in}
                </div>
                <div className="about">
                  {el.github}
                </div>
            </div>
            <div className="edit">
              <MDBIcon
                icon="pen"
                onClick={() => this.toggle()}
                className="edit-pen"
              />
            </div>
          </div>;
        {usersPosts}
        {this.state.toggle ? <EditProfile key={this.props.location.key} toggle={this.toggle} /> : null}
      </div>
    );
  }
}

export default Profile;
