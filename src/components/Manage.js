import React from "react";
import { Link } from "react-router-dom";
import Header from "../icon,button,header/Header";
import Icon from "../icon,button,header/Icon";
import Navbar from "../icon,button,header/Navbar";

import "./Manage.css";

const Manage = () => {
  return (
    <div className="container-fluid img-fluid d-block">
      <Header text="Back" url="/Homepage" />
      <Icon />
      <Navbar />
      <div className="container box">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-10 ">
            <span className="text-white fs-1 b">Manage</span>
          </div>
        </div>
      </div>
      <div className="container  box1">
        <div className="row align-items-center  justify-content-center text-center">
          <div className="col-3 align-items-center pull justify-content-center text-light">
            <div className="circle1 ">
              <Link to="/Manageusers">
                <img src="./images/logo.png" alt="example" />
              </Link>
            </div>
            <span className="text1 fs-4">Manage User</span>
          </div>
          <div className="col-3 align-items-center push justify-content-center text-light">
            <div className="circle">
            <div className="box4">
              <Link to="/Managepoc">
                <img src="./images/vector2.png" alt="example" />
              </Link>
              </div>
            </div>
            <span className="text fs-5">Manage POC</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manage;
