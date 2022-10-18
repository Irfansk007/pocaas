import React from "react";
import { Link } from "react-router-dom";
// import Button1 from "../icon,button,header/Button1";

// import { Link } from "react-router-dom";
import Header from "../icon,button,header/Header";
import Icon from "../icon,button,header/Icon";
import Navbar from "../icon,button,header/Navbar";

import "./EditConfigENV.css";

const EditConfigENV = () => {
  return (
    <div className="container-fluid img-fluid d-block">
      <Header text="Back" url="/Homepage" />
      <Icon />
      <Navbar />
      <div className="container box">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-10 ">
            <span
              className="text-white fs-3 b"
              style={{ letterSpacing: "0.19rem" }}
            >
              Edit Configure Environment
            </span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-white text-center align-items-center justify-content-center d-flex">
            <div
              className=" border border-3 rounded-4 m-3"
              style={{ width: "45rem" }}
            >
              <div className="align-items-start justify-content-start d-flex ">
                <div style={{ width: "max-content", display: "flex" }}>
                  <img
                    src="./images/logo2.png"
                    alt=""
                    style={{ height: "4rem", margin: "2rem 6rem 2rem 4rem" }}
                  ></img>
                  <span style={{ margin: "7rem 0 0 -9.5rem" }}>privitar</span>
                </div>
                <div style={{ width: "max-content", display: "flex" }}>
                  <img
                    src="./images/logo3.png"
                    alt=""
                    style={{ height: "4rem", margin: "2rem 6rem 2rem 4rem" }}
                  ></img>
                  <span style={{ margin: "7rem 0 0 -9.5rem" }}>Stratio</span>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <form>
                      <div style={{ paddingTop: "1.5rem" }}>
                        <span
                          className="fw-semibold"
                          style={{
                            letterSpacing: "0.075rem",
                            fontSize: "1.3rem",
                          }}
                        >
                          Select VM size :
                        </span>
                        <span
                          className="form-check-inline fw-semibold"
                          style={{
                            letterSpacing: "0.075rem",
                            fontSize: "1.rem",
                          }}
                        >
                          <label
                            className="form-check-label"
                            style={{ paddingRight: "1rem" }}
                            htmlFor="flexRadioDefault1"
                          >
                            {" "}
                            Small{" "}
                          </label>
                          <input
                            className="form-check-input border border-white"
                            style={{ fontSize: "1.2rem", marginTop: "1px" }}
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </span>
                        <span
                          className="form-check-inline fw-semibold"
                          style={{
                            letterSpacing: "0.075rem",
                            fontSize: "1.rem",
                          }}
                        >
                          <label
                            className="form-check-label"
                            style={{ paddingRight: "1rem" }}
                            htmlFor="flexRadioDefault1"
                          >
                            {" "}
                            Medium{" "}
                          </label>
                          <input
                            className="form-check-input"
                            type="radio"
                            style={{ fontSize: "1.2rem", marginTop: "1px" }}
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </span>
                        <span
                          className="form-check-inline fw-semibold"
                          style={{
                            letterSpacing: "0.075rem",
                            fontSize: "1.rem",
                          }}
                        >
                          <label
                            className="form-check-label"
                            style={{ paddingRight: "1rem" }}
                            htmlFor="flexRadioDefault1"
                          >
                            {" "}
                            Large{" "}
                          </label>
                          <input
                            className="form-check-input"
                            type="radio"
                            style={{ fontSize: "1.2rem", marginTop: "1px" }}
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </span>
                      </div>
                      <div
                        style={{ paddingTop: "1.5rem", marginLeft: "-5.6rem" }}
                        className="justify-content-center align-items-center"
                      >
                        <span
                          className="fw-semibold"
                          style={{
                            letterSpacing: "0.075rem",
                            fontSize: "1.3rem",
                          }}
                        >
                          Select Environment :
                        </span>
                        <span
                          className="form-check-inline fw-semibold"
                          style={{
                            letterSpacing: "0.075rem",
                            fontSize: "1.rem",
                          }}
                        >
                          <label
                            className="form-check-label"
                            style={{ paddingRight: "1rem" }}
                            htmlFor="flexRadioDefault1"
                          >
                            AWS{" "}
                          </label>
                          <input
                            className="form-check-input border border-white"
                            style={{ fontSize: "1.2rem", marginTop: "1px" }}
                            type="radio"
                            name="flexRadioDefault2"
                            id="flexRadioDefault1"
                          />
                        </span>
                        <span
                          className="form-check-inline fw-semibold"
                          style={{
                            letterSpacing: "0.075rem",
                            fontSize: "1.rem",
                          }}
                        >
                          <label
                            className="form-check-label"
                            style={{ paddingRight: "1rem" }}
                            htmlFor="flexRadioDefault1"
                          >
                            {" "}
                            Azure{" "}
                          </label>
                          <input
                            className="form-check-input"
                            type="radio"
                            style={{ fontSize: "1.2rem", marginTop: "1px" }}
                            name="flexRadioDefault2"
                            id="flexRadioDefault1"
                          />
                        </span>
                        <span
                          className="form-check-inline fw-semibold"
                          style={{
                            letterSpacing: "0.075rem",
                            fontSize: "1.rem",
                          }}
                        >
                          <label
                            className="form-check-label"
                            style={{ paddingRight: "1rem" }}
                            htmlFor="flexRadioDefault1"
                          >
                            GCP
                          </label>
                          <input
                            className="form-check-input"
                            type="radio"
                            style={{ fontSize: "1.2rem", marginTop: "1px" }}
                            name="flexRadioDefault2"
                            id="flexRadioDefault1"
                          />
                        </span>
                      </div>

                      <div
                        style={{
                          paddingTop: "1.5rem",
                          marginBottom: "4rem",
                          marginLeft: "2.5rem",
                        }}
                      >
                        <span
                          className="fw-semibold"
                          style={{
                            letterSpacing: "0.075rem",
                            fontSize: "1.3rem",
                          }}
                        >
                          Data Link :
                        </span>
                        <input
                          type="url"
                          style={{
                            backgroundColor: "transparent",
                            border: "2px solid white",
                            marginLeft: "2rem",
                            width: "20rem",
                            color: "White",
                            borderRadius: "5px",
                          }}
                        ></input>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container text-center align-items-center justify-content-center d-flex"
        style={{ marginTop: "2rem" }}
      >
      <div
          style={{ width: "max-content",marginRight:'12rem' }}
          className="text-center align-items-center justify-content-center"
        >
          <Link to={"/"}>
            <button className="bt">Cancel</button>
          </Link>
        </div>
        <div
          style={{ width: "max-content" }}
          className="text-center align-items-center justify-content-center"
        >
          <Link to={"/#"}><button className="btn2">Launch</button></Link>
        </div>
      </div>
    </div>
  );
};

export default EditConfigENV;

//  <label className="form-check-label" htmlFor="flexRadioDefault1"> Small </label>
//  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
//  <label className="form-check-label" htmlFor="flexRadioDefault1"> Medium </label>
//  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
//  <label className="form-check-label" htmlFor="flexRadioDefault1">large</label>
//  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
