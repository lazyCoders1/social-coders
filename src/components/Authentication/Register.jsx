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
          console.log("register res.data", res.data);
          this.props.updateUserInfo(res.data.user);
          Swal.fire(res.data.message);
          this.props.history.push("/login");
        })
        .catch(err => {
          console.log("Err register", err.response.data.message);
        });
    } else {
      Swal.fire(`passwords don't match`);
    }
  };

  //! REACTSTRAP MDB-REACT
  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  //! ******

  render() {
    return (
      <div id="sign-up">
        <MDBView className="Register">
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                {/* SIGN IN HERE SECTION */}
                <MDBCol md="6" md="4" className="mb-4">
                  <MDBAnimation
                    type="fadeInLeft"
                    delay=".3s"
                    // className="signInBtn white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                    className="white-text text-center "
                  >
                    <MDBCard id="sign-up-card">
                      <MDBCardBody className="white-text">
                        <h1 className="h1-responsive font-weight-bold">
                          Already have a Account? Sign In Below
                        </h1>
                        <hr className="hr-light" />
                        <h6 className="mb-4">
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

                {/* REGISTER INPUT FILED */}
                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation
                    type="fadeInRight"
                    // type="fadeInLeft"
                    delay=".3s"
                  >
                    <MDBCard id="sign-up-card">
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
                          {/* <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Your email"
                          
                        /> */}

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
                            color="indigo"
                          >
                            Sign Up
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
                {/* END: REGISTER INPUT FILED */}
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return reduxState;
}

const mapDispatchToProps = {
  updateUserInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
