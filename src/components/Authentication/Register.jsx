import React, { Component } from "react";
import axios from "axios";
import { updateUserInfo } from "../../Reduxs/reducer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
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
import "./Register.scss";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      name: "",
      password1: "",
      password2: ""
    };
  }

  handleChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  register = () => {
    if (this.state.password1 === this.state.password2) {
      const { email, name, password1: password } = this.state;
      axios
        .post("/auth/register", { name, email, password })
        .then(res => {
          this.props.updateUserInfo(res.data.user);
          Swal.fire({
            title: res.data.message,
            icon: 'success',
            timer: 1200,
            showConfirmButton: false
          });
          this.props.history.push("/login");
        })
        .catch(err => Swal.fire({
          title: err.response.data.message,
          icon: 'error'
        }));
    } else {
      Swal.fire({
        title: 'Passwords do not match.',
        icon: 'error',
      });
    }
  };

  render() {
    return (
      <div id="sign-up">
        <MDBView className="Register">
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                {/* SIGN IN HERE SECTION */}
                <MDBCol md="6" className="mb-4">
                  <MDBAnimation
                    type="fadeInLeft"
                    delay=".3s"
                    className="white-text text-center "
                  >
                    <MDBCard className="sign-up-card-btn">
                      <MDBCardBody className="white-text">
                        <h1 className="h1-responsive font-weight-bold">
                          Already have a Account? Sign In Below
                        </h1>
                        <hr className="hr-light" />
                        <h6 className="h6 mb-4">
                          <p>Quote</p>
                          “I choose a lazy person to do a hard job. Because a
                          lazy person will find an easy way to do it.” ~ Bill
                          Gates
                        </h6>
                        <Link to="/login">
                          <MDBBtn outline color="white">
                            Sign In
                          </MDBBtn>
                        </Link>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
                {/* ------------END: SIGN IN HERE SECTION */}

                {/* REGISTER INPUT FIELD */}
                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard className="sign-up-card">
                      <MDBCardBody className="white-text">
                        <h3 className="text-center">
                          <MDBIcon icon="user" /> Sign Up:
                        </h3>
                        <hr className="hr-light" />
                        <form action="">
                          <MDBInput
                            className="white-text"
                            iconClass="white-text"
                            label="Email"
                            outline
                            icon="envelope"
                            value={this.state.email}
                            onChange={e =>
                              this.handleChange("email", e.target.value)
                            }
                            type="text"
                          />
                          <MDBInput
                            className="white-text"
                            iconClass="white-text"
                            label="Name"
                            outline
                            icon="user"
                            value={this.state.name}
                            onChange={e =>
                              this.handleChange("name", e.target.value)
                            }
                            type="text"
                          />
                          <MDBInput
                            className="white-text"
                            iconClass="white-text"
                            label="Password"
                            outline
                            icon="lock"
                            type="password"
                            autoComplete="off"
                            value={this.state.password1}
                            onChange={e =>
                              this.handleChange("password1", e.target.value)
                            }
                          />
                          <MDBInput
                            className="white-text"
                            iconClass="white-text"
                            label="Repeat password"
                            outline
                            icon="lock"
                            type="password"
                            autoComplete="off"
                            value={this.state.password2}
                            onChange={e =>
                              this.handleChange("password2", e.target.value)
                            }
                          />
                        </form>
                        <div className="text-center mt-4 black-text">
                          <MDBBtn
                            onClick={() => this.register()}
                            color="default"
                          >
                            Sign Up
                          </MDBBtn>
                          <hr className="hr-light" />
                          <div className="text-center d-flex justify-content-center white-label">
                            <a href="#!" className="p-2 m-2">
                              <MDBIcon
                                size="lg"
                                fab
                                icon="google"
                                className="white-text"
                              />
                            </a>
                            <a href="#!" className="p-2 m-2">
                              <MDBIcon
                                size="lg"
                                fab
                                icon="linkedin"
                                className="white-text"
                              />
                            </a>
                            <a href="#!" className="p-2 m-2">
                              <MDBIcon
                                size="lg"
                                fab
                                icon="github"
                                className="white-text"
                              />
                            </a>
                          </div>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
                {/* END: REGISTER INPUT FILED */}
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

const mapDispatchToProps = {
  updateUserInfo
};

export default connect(null, mapDispatchToProps)(Register);
