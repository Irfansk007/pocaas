import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

function Main() {
  return (
    <div className="container-fluid4 img-fluid d-block">
      <div className="row">
        <div
          className="col-12 align-items-center justify-content-center d-flex "
          style={{ marginTop: "23rem" }}
        >
          <img src="./images/hsbc.png" alt="" style={{ height: "45px" }}></img>
          <h1 className="hsbc">HSBC</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 align-items-center justify-content-center d-flex">
            <Link to={"/Login"}><div className="circle9">
                        <img src="./images/4.png" alt="" className="red"></img>
            </div></Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
