import React, { Component } from "react";
import axios from "axios";
import { updateUserInfo } from "../../Reduxs/reducer";
import { connect } from "react-redux";
import Swal from "sweetalert2";

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
      const { name, email, password1: password } = this.state;
      axios
        .post("/auth/register", { name, email, password })
        .then(res => {
          console.log(res.data);
          this.props.updateUserInfo(res.data.user);
        })
        .catch(err => {
          console.log(err.response.data.message);
        });
    } else {
      Swal.fire(`passwords don't match`);
    }
  };

  render() {
    return <div className="register">
      <h1>Register</h1>
    </div>;
  }
}

const mapDispatchToProps = {
  updateUserInfo
};

export default connect(null, mapDispatchToProps)(Register);


//! cody's code
{
  /* <input
          className="input"
          value={this.state.email}
          onChange={e => this.handleChange("email", e.target.value)}
          placeholder="Email"
          type="text"
        />
        <input
          className="input"
          value={this.state.name}
          onChange={e => this.handleChange("name", e.target.value)}
          placeholder="Name"
          type="text"
        />
        <input
          className="input"
          value={this.state.password1}
          onChange={e => this.handleChange("password1", e.target.value)}
          placeholder="Password"
          type="password"
        />
        <input
          className="input"
          value={this.state.password2}
          onChange={e => this.handleChange("password2", e.target.value)}
          placeholder="Retype password"
          type="password"
        />
        <button onClick={() => this.register()}>Register!</button>
        <h4 onClick={() => this.props.toggle()}>
          Already have an account? Login here
        </h4> */
}
