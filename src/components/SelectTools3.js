import Button1 from "../icon,button,header/Button1";
import React from "react";
import Header from "../icon,button,header/Header";
import Icon from "../icon,button,header/Icon";
import Navbar from "../icon,button,header/Navbar";
import "./SelectTools3.css";
import { Link } from "react-router-dom";

const SelectTools3 = () => {
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
                src="./images/logo7.png"
                alt=""
                style={{
                  marginTop: "1rem",
                  height: "5rem",
                  position: "static",
                }}
              ></img>
              <div className="" style={{ marginTop: "0.5rem" }}>
                Looker
              </div>
              <div
                style={{
                  letterSpacing: "0.09rem",
                  marginTop: "2rem",
                  marginBottom: "1rem",
                }}
                className="fw-light"
              >
              
Looker is a powerful business intelligence (BI) tool that can help a business develop insightful visualizations. It offers a user-friendly workflow, is completely browser-based (eliminating the need for desktop software), and facilitates dashboard collaboration.
              </div>
              <span className="align-items-center justify-content-center" style={{position:'static'}}>
                <Button1 buttonname="select" />
              </span>
            </div>
          </div>
          <div className="col-4  align-items-center justify-content-center text-center">
            <div
              className="box1 m-0 border border-white rounded-2 text-white"
              style={{ height: "28rem" }}
            >
              <img
                src="./images/logo8.png"
                alt=""
                style={{ marginTop: "1rem", height: "5rem" }}
              ></img>
              <div className="" style={{ marginTop: "0.5rem" }}>
                Tableau
              </div>
              <div
                style={{
                  letterSpacing: "0.09rem",
                  marginTop: "2rem",
                  marginBottom: "4rem",
                }}
                className="fw-light"
              >
              
Business intelligence (BI) combines business analytics, data mining, data visualization, data tools and infrastructure, and best practices to help organizations to make more data-driven decisions.
              </div>
              <span className="align-items-center justify-content-center ">
                <Button1 buttonname="select" />
              </span>
            </div>
          </div>
          <div className="col-4  align-items-center justify-content-center text-center">
            <div
              className="box1 m-0 border border-white rounded-2 text-white"
              style={{ height: "28rem" }}
            >
              <img
                src="./images/logo9.png"
                alt=""
                style={{ marginTop: "1rem", height: "5rem" }}
              ></img>
              <div className="" style={{ marginTop: "0.5rem" }}>
                Qilksense
              </div>
              <div
                style={{
                  letterSpacing: "0.09rem",
                  marginTop: "2rem",
                  marginBottom: "5.4rem",
                }}
                className="fw-light"
              >
              Qlik Sense Desktop is a Windows application that allows users to create visualizations, charts, interactive dashboards and analytics apps for local and offline usage.
              </div>
              <span className="align-items-center justify-content-center ">
                <Button1 buttonname="select" />
              </span>
            </div>
          </div>
        </div>
      
      </div>
      <Link className="align-items-center justify-content-center text-center m-4" to={"/"}>
      <Button1 buttonname="Next" />
      </Link>
    </div>
  );
};

export default SelectTools3;
