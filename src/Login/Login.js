import React from "react";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import "./Login.css";
import login from "../img/blue-logo.png";
import fb from "../img/fb-login .png";
import google from "../img/google-login.png";
const Login = () => {
  return (
    <div className="login-info">
      <Container>
        <Row>
          <Col md={8} sx={12}>
            <div className="left-site">
              <div className="login-img">
                <img src="../img/login.png" alt="" className="img-fluid" />
              </div>
            </div>
          </Col>
          <Col md={4} sx={12}>
            <div className="right-site rounded w-100 bg-white shadow py-5 px-3">
              <div className="logo">
                <img src={login} alt="" className="img-fluid" />
              </div>
              <div className="mb-4">
                <p className="explore">Explore The Best Tours... Hurry up!!</p>
              </div>
              <form action="" className="login-form">
                <div className="mb-3 w-75">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email Address"
                  />
                </div>
                <div className="mb-3 w-75">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                  />
                  <NavLink className="text-danger fw-normal">
                    <p className="forget">Forget Password?</p>
                  </NavLink>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary submit_btn w-75 mb-4"
                >
                  Login
                </button>
              </form>
              <div className="underline d-flex justify-content-center my-4">
                <div className="alternate"></div>
                <div className="divider mx-3">or</div>
                <div className="alternate"></div>
              </div>
              <div className="alter-login d-flex justify-content-center">
                <div className="fb">
                  <NavLink>
                    <img src={fb} alt="" />
                  </NavLink>
                </div>
                <div className="google">
                  <NavLink>
                    <img src={google} alt="" />
                  </NavLink>
                </div>
              </div>
              <div className="signup">
                <p>
                  Don't have an account? <NavLink>Sign Up</NavLink>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
