import React, { Component } from "react";
import { connect } from "react-redux";
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
      toggleTwo: false,
      search: ""
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

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  render() {
    const el = this.state;

    let filterByValue = this.state.posts.filter(o => {
      return Object.keys(o).some(k => {
        return o[k]
          .toString()
          .toLowerCase()
          .includes(this.state.search.toLowerCase());
      });
    });
    const usersPosts = filterByValue.map((post, i) => (
      <Post
        id={this.props.match.params.id}
        post={post}
        profile={this.state}
        key={post.id}
      />
    ));
    return (
      <>
        <input
          className="search"
          placeholder="Search..."
          type="text"
          onChange={this.handleChange}
          value={this.state.search}
        />
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
          <div className="info-container">
            <div className="info">
              <h3>{el.name}</h3>
              <h4>{el.headline}</h4>
              <div className="address">{el.city + ", " + el.state}</div>
            </div>
            <div className="links">
              <MDBIcon
                icon="pen"
                onClick={() => this.toggleTwo()}
                className="edit-pen"
                style={{
                  visibility:
                    this.props.id === this.state.user_id ? "visible" : "hidden"
                }}
              />
              <a className="github" href={`${el.github}`}>
                <MDBIcon fab icon="github" />
              </a>
              <a className="linkedin" href={`${el.linked_in}`}>
                <MDBIcon fab icon="linkedin" />
              </a>
            </div>
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
      </>
    );
  }
}

function mapStateToProps(reduxState) {
  const { id } = reduxState;
  return { id };
}

export default connect(mapStateToProps)(Profile);
