import Button1 from "../icon,button,header/Button1";
import React from "react";
import Header from "../icon,button,header/Header";
import Icon from "../icon,button,header/Icon";
import Navbar from "../icon,button,header/Navbar";
import "./SelectTools2.css";
import { Link } from "react-router-dom";

const SelectTools2 = () => {
  return (
    <div className="container-fluid img-fluid d-block">
      <Header text="Back" url="/Createpoc" />
      <Icon />
      <Navbar />
      <div
        className="container  box"
        style={{ marginTop: "1rem", marginBottom: "1rem" }}
      >
        <div className="row align-items-center  justify-content-center text-center ">
          <div className="col-10 ">
            <span
              className="text-white fs-2 b"
              style={{ letterSpacing: "0.19rem" }}
            >
              Select Tools
            </span>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row  align-items-center justify-content-center ">
          <div className="col-4  align-items-center justify-content-center text-center">
            <div
              className="box1 m-0 border border-white rounded-2 text-white  position-static"
              style={{ height: "28rem" }}
            >
              <img
                src="./images/13.png"
                alt=""
                style={{
                  marginTop: "1rem",
                  height: "5rem",
                  position: "static",
                }}
              ></img>
              <div className="" style={{ marginTop: "0.5rem" }}>
                Abbyy
              </div>
              <div
                style={{
                  letterSpacing: "0.09rem",
                  marginTop: "2rem",
                  marginBottom: "7rem",
                }}
                className="fw-light"
              >
                 ABBYY FineReader PDF is an optical character recognition (OCR) application developed by ABBYY, with support for PDF file editing since v15
              </div>
              <span className="align-items-center justify-content-center" style={{position:'static'}}>
              <button className="btn1" >Select</button>
              </span>
            </div>
          </div>
          <div className="col-4  align-items-center justify-content-center text-center">
            <div
              className="box1 m-0 border border-white rounded-2 text-white"
              style={{ height: "28rem" }}
            >
              <img
                src="./images/logo5.png"
                alt=""
                style={{ marginTop: "1rem", height: "5rem" }}
              ></img>
              <div className="" style={{ marginTop: "0.5rem" }}>
                Celonis
              </div>
              <div
                style={{
                  letterSpacing: "0.09rem",
                  marginTop: "2rem",
                  marginBottom: "4rem",
                }}
                className="fw-light"
              >
                Celonis is the global leader in execution management. The Celonis Execution Management System provides companies a modern way to run their business processes entirely on data and intelligence.
              </div>
              <span className="align-items-center justify-content-center ">
              <button className="btn1" >Select</button>
              </span>
            </div>
          </div>
          <div className="col-4  align-items-center justify-content-center text-center">
            <div
              className="box1 m-0 border border-white rounded-2 text-white"
              style={{ height: "28rem" }}
            >
              <img
                src="./images/logo6.png"
                alt=""
                style={{ marginTop: "1rem", height: "5rem" }}
              ></img>
              <div className="" style={{ marginTop: "0.5rem" }}>
                Sorocco
              </div>
              <div
                style={{
                  letterSpacing: "0.09rem",
                  marginTop: "2rem",
                  marginBottom: "0.9rem",
                }}
                className="fw-light"
              >
                Soroco is on a mission to discover how the world works to help teams be their best. To do this we are evangelizing and commercializing a new technology category called Work Graph, which is a structured view of how teams get work done across people, process, technology, and documents.
              </div>
              <span className="align-items-center justify-content-center ">
              <button className="btn1" >Select</button>
              </span>
            </div>
          </div>
        </div>
      
      </div>
      <Link className="align-items-center justify-content-center text-center m-4 d-flex" to={""}>
      <button className="btn2" >Next</button>
      </Link>
    </div>
  );
};

export default SelectTools2;
