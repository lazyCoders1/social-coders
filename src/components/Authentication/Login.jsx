import React, { Component } from "react";
import axios from "axios";
import { updateUserInfo } from "../../Reduxs/reducer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Register from "./Register";

import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBAnimation
} from "mdbreact";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      toggle: false
    };
  }

  handleChange = (key, value) => {
    this.setState({ [key]: value });
  };

  login = () => {
    const { email, password } = this.state;
    axios
      .post("/auth/login", { email, password })
      .then(res => {
        this.props.updateUserInfo(res.data.user);
        console.log(res.data.user);
        Swal.fire(res.data.message);
      })
      .catch(err => {
        console.log(err);
        Swal.fire(err.response.data.message);
      });
  };

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    return (
      <div className="login">
        <h1>Login</h1>
        <br/>
        <MDBMask className="d-flex justify-content-center align-items-center gradient">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="6" xl="5" className="mb-4">
                <MDBAnimation
                  // type="fadeInRight"
                  type="fadeInLeft"
                  delay=".3s"
                >
                  <MDBCard id="classic-card">
                    <MDBCardBody className="white-text">
                      <h3 className="text-center">
                        <MDBIcon icon="user" /> Login:
                      </h3>
                      <hr className="hr-light" />
                      <form action="">
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Username"
                          icon="user"
                          onChange={e =>
                            this.handleChange("username", e.target.value)
                          }
                          value={this.state.username}
                        />
                        {/* <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Your email"
                          icon="envelope"
                        /> */}
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Your password"
                          icon="lock"
                          type="password"
                          autoComplete="on"
                          onChange={e =>
                            this.handleChange("password", e.target.value)
                          }
                          value={this.state.password}
                        />
                      </form>
                      <div className="text-center mt-4 black-text">
                        <MDBBtn onClick={this.login} color="indigo">
                          Sign In
                        </MDBBtn>
                        <hr className="hr-light" />
                        <div className="text-center d-flex justify-content-center white-label">
                          <a href="#!" className="p-2 m-2">
                            <MDBIcon
                              fab
                              icon="twitter"
                              className="white-text"
                            />
                          </a>
                          <a href="#!" className="p-2 m-2">
                            <MDBIcon
                              fab
                              icon="linkedin"
                              className="white-text"
                            />
                          </a>
                          <a href="#!" className="p-2 m-2">
                            <MDBIcon
                              fab
                              icon="instagram"
                              className="white-text"
                            />
                          </a>
                        </div>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBAnimation>
              </MDBCol>
              <MDBAnimation
                // type="fadeInLeft"
                type="fadeInRight"
                delay=".3s"
                className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
              >
                <h1 className="h1-responsive font-weight-bold">
                  Don't have an account?
                </h1>
                <hr className="hr-light" />
                <h6 className="mb-4">
                  <p>Beer Quote</p>
                  Beer is proof that God loves us and wants us to be happy. ~
                  Benjamin Franklin
                </h6>
                <Link to="/Register">
                  <MDBBtn outline color="white">
                    Register
                  </MDBBtn>
                </Link>
              </MDBAnimation>
            </MDBRow>
          </MDBContainer>
        </MDBMask>
      </div>
    );
  }
}

const mapDispatchToProps = {
  updateUserInfo
};

export default connect(null, mapDispatchToProps)(Login);

//!cody's code
// <div className="register">
//   {!this.state.toggle ? (
//     <div className="login">
//       <input
//         className="input"
//         onChange={e => this.handleChange("email", e.target.value)}
//         value={this.state.email}
//         placeholder="Email"
//         type="text"
//       />
//       <input
//         className="input"
//         onChange={e => this.handleChange("password", e.target.value)}
//         value={this.state.password}
//         placeholder="Password"
//         type="password"
//       />
//       <button onClick={() => this.login()}>Login!</button>
//       <h4 onClick={() => this.toggle()}>
//         Need an account? Register here!
//       </h4>
//     </div>
//   ) : (
//     <Register toggle={this.toggle} />
//   )}
// </div>
