// import Button1 from "../icon,button,header/Button1";
import React from "react";
import Header from "../icon,button,header/Header";
import Icon from "../icon,button,header/Icon";
import Navbar from "../icon,button,header/Navbar";
import './SelectTools1.css';
import { useLocation, useNavigate } from "react-router-dom";

const SelectTools1 = () => {
  const location = useLocation();
  
   const vmName = location.state.vm_name;
   const desc = location.state.desc;
   const navigate2 = useNavigate();
    const clickChange =() =>{
      
      navigate2('/Configenv',{state:{vmname:`${vmName}`,Sname:'Jupyter',Desc:`${desc}`}})
      // console.log({vmname:`${vmName}`,Sname:'Jupyter',Desc:`${desc}`});
    }

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
              style={{ height: "25rem" }}
            >
              <img
                src="./images/logo1.png"
                alt=""
                style={{
                  marginTop: "1rem",
                  height: "5rem",
                  position: "static",
                }}
              ></img>
              <div className="" style={{ marginTop: "0.5rem" }}>
                Okera
              </div>
              <div
                style={{
                  letterSpacing: "0.09rem",
                  marginTop: "2rem",
                  marginBottom: "4rem",
                }}
                className="fw-light"
              >
                Okera universal data authorization platform enables accelerated
                innovation and prevents inappropriate access to sensitive,
                regulated data.
              </div>
              <span className="align-items-center justify-content-center ">
              <button className="btn1">Select</button>
              </span>
            </div>
          </div>
          <div className="col-4  align-items-center justify-content-center text-center">
            <div
              className="box1 m-0 border border-white rounded-2 text-white"
              style={{ height: "25rem" }}
            >
              <img
                src="./images/jupyter.png"
                alt=""
                style={{ marginTop: "1rem", height: "5rem" }}
              ></img>
              <div className="" style={{ marginTop: "0.5rem" }}>
                Jupyter
              </div>
              <div
                style={{
                  letterSpacing: "0.09rem",
                  marginTop: "2rem",
                  marginBottom: "3.9rem",
                }}
                className="fw-light"
              >
                The Jupyter Notebook is an open-source web application that allows you to create and share documents that contain live code, equations, visualizations, and narrative text. 
              </div>
              <span className="align-items-center justify-content-center ">
              <button className="btn1">Select</button>
              </span>
            </div>
          </div>
          <div className="col-4  align-items-center justify-content-center text-center">
            <div
              className="box1 m-0 border border-white rounded-2 text-white"
              style={{ height: "25rem" }}
            >
              <img
                src="./images/logo3.png"
                alt=""
                style={{ marginTop: "1rem", height: "5rem" }}
              ></img>
              <div className="" style={{ marginTop: "0.5rem" }}>
                Stratio
              </div>
              <div
                style={{
                  letterSpacing: "0.09rem",
                  marginTop: "2rem",
                  marginBottom: "1rem",
                }}
                className="fw-light"
              >
                Stratio Augmented Data Fabric covers the whole lifecycle of data
                management: Auto-discovering the data, virtualizing it,
                providing it with metadata and intelligently giving it semantic
                meaning and, finally, mining it with MLOps.
              </div>
              <span className="align-items-center justify-content-center ">
                <button className="btn1">Select</button>
              </span>
            </div>
          </div>
        </div>
      
      </div>
      <div className="align-items-center justify-content-center text-center d-flex m-4">
      <div style={{width:'max-content'}} className="text-center align-items-center justify-content-center">
                          <button className="btn2" onClick={clickChange}>Next</button>
       </div>
      
      </div>
    </div>
  );
};

export default SelectTools1;
