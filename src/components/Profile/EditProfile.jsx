import React, { Component } from "react";
import { MDBInput, MDBAnimation, MDBBtn } from "mdbreact";
import "./editProfile.scss";
import axios from "axios";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      profile_pic: "",
      cover_photo: "",
      headline: "",
      city: "",
      state: "",
      linked_in: "",
      github: ""
    };
  }

  componentDidMount = () => {
    const profile = this.props.profile;
    this.setState({
      name: profile.name,
      profile_pic: profile.profile_pic,
      cover_photo: profile.cover_photo,
      headline: profile.headline,
      city: profile.city,
      state: profile.state,
      linked_in: profile.linked_in,
      github: profile.github
    });
  };

  handleChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  handleEdit = () => {
    let {
      name,
      profile_pic,
      cover_photo,
      headline,
      city,
      state,
      linked_in,
      github
    } = this.state;
    if (name) {
      let profile = {
        name,
        profile_pic,
        cover_photo,
        headline,
        city,
        state,
        linked_in,
        github
      };
      axios
        .put(`/api/profile/${this.props.id}`, profile)
        .then(this.props.getProfile(), this.props.toggleTwo());
    } else {
      alert("The name input needs a value");
    }
  };

  render() {
    return (
      <div
        className="profile-form-container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center"
        }}
      >
        <MDBAnimation
          type="fadeIn"
          style={{
            zIndex: "40"
          }}
        >
          <div
            className="overlay1"
            style={{
              height: "100vh",
              width: "100vw",
              background: "rgba(29,29,29, 0.426)",
              position: "fixed",
              top: "0",
              left: "0",
              zIndex: "10"
            }}
          ></div>

          <div className="profile-form">
            <div onClick={() => this.props.toggleTwo()} className="back">
              X
            </div>
            <MDBInput
              className="MDBInput"
              value={this.state.cover_photo}
              onChange={e => this.handleChange("cover_photo", e.target.value)}
              label="Cover Photo URL"
              icon="image"
              style={{
                margin: "10px auto",
                padding: "2px",
                border: ".5px solid grey",
                borderRadius: "5px"
              }}
            />
            <MDBInput
              className="MDBInput"
              value={this.state.profile_pic}
              onChange={e => this.handleChange("profile_pic", e.target.value)}
              label="Profile Image URL"
              icon="image"
              style={{
                margin: "10px auto",
                padding: "2px",
                border: ".5px solid grey",
                borderRadius: "5px"
              }}
            />
            <MDBInput
              className="MDBInput"
              value={this.state.name}
              onChange={e => this.handleChange("name", e.target.value)}
              label="Name"
              icon="user"
              style={{
                margin: "10px auto",
                padding: "2px",
                border: ".5px solid grey",
                borderRadius: "5px"
              }}
            />
            <MDBInput
              className="MDBInput"
              value={this.state.headline}
              onChange={e => this.handleChange("headline", e.target.value)}
              label="Headline"
              icon="heading"
              style={{
                margin: "10px auto",
                padding: "2px",
                border: ".5px solid grey",
                borderRadius: "5px"
              }}
            />
            <div
              className="location"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <MDBInput
                className="MDBInput"
                value={this.state.city}
                onChange={e => this.handleChange("city", e.target.value)}
                label="City"
                style={{
                  width: "100px",
                  border: ".5px solid grey",
                  borderRadius: "5px"
                }}
              />
              <MDBInput
                className="MDBInput"
                value={this.state.state}
                onChange={e => this.handleChange("state", e.target.value)}
                label="State"
                style={{
                  width: "100px",
                  border: ".5px solid grey",
                  borderRadius: "5px"
                }}
              />
            </div>

            <MDBInput
              className="MDBInput"
              value={this.state.linked_in}
              onChange={e => this.handleChange("linked_in", e.target.value)}
              label="LinkedIn"
              icon="link"
              style={{
                margin: "10px auto",
                padding: "2px",
                border: ".5px solid grey",
                borderRadius: "5px"
              }}
            />
            <MDBInput
              className="MDBInput"
              value={this.state.github}
              onChange={e => this.handleChange("github", e.target.value)}
              label="GitHub"
              icon="code-branch"
              style={{
                margin: "10px auto",
                padding: "2px",
                border: ".5px solid grey",
                borderRadius: "5px"
              }}
            />
            <div className="button">
              <MDBBtn
                onClick={() => this.handleEdit()}
                color="default"
                size="sm"
                fontsize=".9rem"
              >
                Submit
              </MDBBtn>
            </div>
          </div>
        </MDBAnimation>
      </div>
    );
  }
}

export default EditProfile;
