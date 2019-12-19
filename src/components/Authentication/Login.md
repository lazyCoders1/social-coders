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




<!-- ! ROUNDYS CODE MDB -->




import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  // MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBAnimation
} from "mdbreact";

<div id="classicformpage">
        <h1>Login</h1>
        <br/>
        <MDBMask className="Login d-flex justify-content-center align-items-center gradient">
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








#classicformpage .view {
  // background-image: url("./beerImg/beer6.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}

/* #classicformpage .gradient {
  background: -webkit-linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.7),
    rgba(72, 15, 144, 0.4) 100%
  );
  background: -webkit-gradient(
    linear,
    45deg,
    from(rgba(0, 0, 0, 0.7), rgba(72, 15, 144, 0.4) 100%)
  );
  background: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.7),
    rgba(72, 15, 144, 0.4) 100%
  );
} */

#classic-card {
  background-color: rgba(126, 123, 215, 0.2);
  height: auto;
}

#classicformpage h6 {
  line-height: 1.7;
}

/* #classicformpage .navbar {
  transition: background 0.5s ease-in-out, padding 0.5s ease-in-out;
} */

/* #classicformpage .top-nav-collapse {
  background: #424f95 !important;
} */

/* !KEEP FOR LOG/REG MOBILE */
@media (max-width: 768px) {
  #classicformpage .navbar:not(.top-nav-collapse) {
    /* background: #424f95 !important; */
  }
  h6 {
    display: none;
  }
  hr {
    display: none;
  }
  .h1-responsive {
    display: none;
  }
  .signInBtn {
    position: absolute;
    bottom: 0;
  }
}

#classicformpage label {
  color: #fff !important;
}






<!-- ! M-ui -->





import React, { Component } from "react";
import axios from "axios";
import { updateUserInfo } from "../../Reduxs/reducer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Register from "./Register";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import Link from '@material-ui/core/Link';
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

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


  
  render() {
    const useStyles = makeStyles(theme => ({
      root: {
        height: '100vh',
      },
      image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
          theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
      paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    }));
    const classes = useStyles();
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>{/* <Copyright /> */}</Box>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}

const mapDispatchToProps = {
  updateUserInfo
};

export default connect(null, mapDispatchToProps)(Login);
