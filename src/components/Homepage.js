import React from "react";
import { Link } from "react-router-dom";
import Header from "../icon,button,header/Header";
import Icon from "../icon,button,header/Icon";
import Navbar from "../icon,button,header/Navbar";

import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="container-fluid img-fluid d-block">
      <Header text="Back" url="/Login" />
      <Icon />
      <Navbar />
      <div className="container box">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-10 ">
            <span className="text-white fs-1 b">Home Page</span>
          </div>
        </div>
      </div>
      <div className="container  box1">
        <div className="row align-items-center  justify-content-center text-center">
          <div className="col-3 align-items-center pull justify-content-center text-light">
            <div className="circle1 ">
              <Link to="/Viewexistingpoc">
                <img src="./images/vector.png" alt="example" />
              </Link>
            </div>
            <span className="text1 fs-4">View Existing POC </span>
          </div>
          <div className="col-3 align-items-center push justify-content-center text-light">
            <div className="circle">
              <Link to="/Createpoc">
                <img src="./images/plus.png" alt="example" />
              </Link>
            </div>
            <span className="text fs-5">Create POC</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
