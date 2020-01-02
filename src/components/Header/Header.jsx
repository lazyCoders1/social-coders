import React, { Component } from 'react'
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
} from 'mdbreact'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import Swal from 'sweetalert2'
import { updateUserInfo } from '../../Reduxs/reducer'

export class Header extends Component {
  state = {
    isOpen: false
  }

  componentDidMount() {
    this.getMe()
  }

  getMe() {
    axios
      .get('/auth/me')
      .then(res => {
        this.props.updateUserInfo(res.data.user)
      })
      .catch(err => console.log(err))
  }

  logout = () => {
    axios
      .delete('/auth/logout')
      .then(res => {
        Swal.fire({
          title: res.data.message,
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch(err => console.log(err))
  }

  toggleCollapse = () => {
<<<<<<< HEAD
    this.setState({ isOpen: !this.state.isOpen });
  };
=======
    this.setState({ isOpen: !this.state.isOpen })
  }
>>>>>>> b07d93fbfd11b011c8d8757cd3d0c74400019a1e

  render() {
    return (
      <Router>
        <MDBNavbar
          dark
          expand="md"
          style={{
<<<<<<< HEAD
            backgroundColor: "#80deea",
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex: "10"
=======
            backgroundColor: '#80deea',
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: '10'
>>>>>>> b07d93fbfd11b011c8d8757cd3d0c74400019a1e
          }}
        >
          <MDBNavbarBrand>
            <a href="#/">
              <strong className="white-text" style={{ cursor: 'pointer' }}>
                Social Coders
              </strong>
            </a>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBFormInline waves></MDBFormInline>
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
                      <MDBDropdownItem href="#/other">Other</MDBDropdownItem>
                      <MDBDropdownItem href="#/meetups">
                        Meetups
                      </MDBDropdownItem>

                      <MDBDropdownItem href="#/aboutus">
                        About Us
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
                  <div style={{ display: 'flex' }}>
                    <a href="#/login">
                      <MDBBtn color="white" size="sm">
                        SignIn
                      </MDBBtn>
                    </a>
                    <a href="#/register">
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
    )
  }
}

function mapStateToProps(reduxState) {
  const { id, posts } = reduxState
  return { id, posts }
}

const mapDispatchToProps = {
  updateUserInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
