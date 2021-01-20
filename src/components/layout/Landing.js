import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Landing.css';

class Landing extends Component {
  render() {

    return (
      <div className="container valign-wrapper outer-div">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b className="welcome linkh1 glitch">WELCOME</b>
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Be the eyes, be one of us
            </p>
            <br />
            <div className="col s6">
              <Link
                className="btn btn-large waves-effect waves-light hoverable blue accent-3 white-text reg-btn"
                to="/register"
                >Join</Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                className="btn btn-large btn-flat waves-effect white black-text reg-btn"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;