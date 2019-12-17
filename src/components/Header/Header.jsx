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
  MDBFormInline
} from "mdbreact";

import { BrowserRouter as Router } from "react-router-dom";

export class Header extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <MDBNavbar color="default-color" dark expand="md">
          {/* <MDBNavbar color="grey lighten-5" dark expand="md"> */}
          <MDBNavbarBrand>
            <strong className="white-text">Social Coders</strong>
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
                      <MDBDropdownItem href="#!">JavaScript</MDBDropdownItem>
                      <MDBDropdownItem href="#!">CSS</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Public</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Meetups</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Startups</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <MDBIcon icon="user" />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu right className="dropdown-default">
                      <MDBDropdownItem href="#!">Profile</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Favorites</MDBDropdownItem>
                      <MDBDropdownItem href="#!">SginOut</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            </div>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default Header;
