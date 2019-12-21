import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
  MDBFormInline,
  MDBBtn
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { updateUserInfo } from "../../Reduxs/reducer";

export class Header extends Component {
  state = {
    isOpen: false
  };

  componentDidMount() {
    this.getMe();
  }

  getMe() {
    axios
      .get("/auth/me")
      .then(res => {
        this.props.updateUserInfo(res.data.user);
      })
      .catch(err => console.log(err));
  }

  logout = () => {
    axios
      .delete("/auth/logout")
      .then(res => {
        Swal.fire({
          title: res.data.message,
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch(err => console.log(err));
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <MDBNavbar
          className="position-sticky"
          color="default-color"
          dark
          expand="md"
          style={{ position: "fixed", top: 0, width: "100vw", zIndex: "10" }}
        >
          {/* <MDBNavbar color="grey lighten-5" dark expand="md"> */}
          <MDBNavbarBrand>
            <a href="#/">
              <strong className="white-text" style={{ cursor: "pointer" }}>
                Social Coders
              </strong>
            </a>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBFormInline waves>
                  <div className="md-form my-0">
                    <input
                      className="form-control mr-sm-2"
                      type="text"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </div>
                </MDBFormInline>
              </MDBNavItem>
            </MDBNavbarNav>
            <div className="d-flex justify-content-end">
              <MDBNavbarNav>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <div className="d-none d-md-inline">Channels</div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu right className="dropdown-default">
                      <MDBDropdownItem href="#/javascript">
                        JavaScript
                      </MDBDropdownItem>
                      <MDBDropdownItem href="#/css">CSS</MDBDropdownItem>
                      <MDBDropdownItem href="#/public">Public</MDBDropdownItem>
                      <MDBDropdownItem href="#/meetups">
                        Meetups
                      </MDBDropdownItem>
                      <MDBDropdownItem href="#/startups">
                        Startups
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                {this.props.id ? (
                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>
                        <MDBIcon icon="user" />
                      </MDBDropdownToggle>
                      <MDBDropdownMenu right className="dropdown-default">
                        <MDBDropdownItem href={`#/profile/${this.props.id}`}>
                          Profile
                        </MDBDropdownItem>
                        <MDBDropdownItem href="#/favorites">
                          Favorites
                        </MDBDropdownItem>
                        <MDBDropdownItem onClick={this.logout} href="/">
                          SignOut
                        </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                ) : (
                  <div style={{ display: "flex" }}>
                    <a href="#/register">
                      <MDBBtn color="white" size="sm">
                        SignIn
                      </MDBBtn>
                    </a>
                    <a href="#/login">
                      <MDBBtn color="white" size="sm">
                        SignUp
                      </MDBBtn>
                    </a>
                  </div>
                )}
              </MDBNavbarNav>
            </div>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

function mapStateToProps(reduxState) {
  const { id } = reduxState;
  return { id };
}

const mapDispatchToProps = {
  updateUserInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
