import React, { Component } from "react";
import axios from "axios";
import { updateUserInfo } from "../../Reduxs/reducer";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import Register from './Register'

class Login extends Component {
  state = {
    email: "",
    password: "",
    toggle: false
  };

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
      })
  }

  render() {
    return (
      <div className="register">
        {!this.state.toggle ? (
          <div className="login">
            <input
              className="input"
              onChange={e => this.handleChange("email", e.target.value)}
              value={this.state.email}
              placeholder="Email"
              type="text"
            />
            <input
              className="input"
              onChange={e => this.handleChange("password", e.target.value)}
              value={this.state.password}
              placeholder="Password"
              type="password"
            />
            <button onClick={this.login}>Login!</button>
            <h4 onClick={this.toggle}>Need an account? Register here!</h4>
          </div>
        ) : (
          <Register toggle={this.toggle} />
        )}
      </div>
    );
  }
}

export default connect(null, { updateUserInfo })(Login);
