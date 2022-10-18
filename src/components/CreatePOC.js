// import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Header from "../icon,button,header/Header";
import Icon from "../icon,button,header/Icon";
import Navbar from "../icon,button,header/Navbar";

import "./Homepage.css";

const CreatePOC = () => {
  const navigate = useNavigate();
  const [vm_name,setVm_Name] = useState("");
  const [desc,setDesc] =useState("");

  const handleChange = event => {
    setVm_Name(event.target.value);
    
  }
   const handleClick = () =>{
        navigate('/selecttools1',{state:{vm_name,desc}});
   }

  const changedesc = event =>{
        setDesc(event.target.value);
  }
  return (
    <div className="container-fluid img-fluid d-block">
      <Header text="Back" url="/Homepage" />
      <Icon />
      <Navbar />
      <div className="container mt-0 mb-2 box">
        <div className="row align-items-center  justify-content-center text-center ">
          <div className="col-10 ">
            <span className="text-white fs-2 b">Create POC</span>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row align-items-center  justify-content-center text-center">
          <div className="col-10 justify-content-center">
            <label
              className="text-white px-5 tg"
              style={{ letterSpacing: "0.12rem" }}
            >
              Enter Your POC Name :
            </label>
            <input
              typeof="text"
              className="bg-transparent w-50 pl-6 border border-white border-2 rounded-3 p-2 m-2 text-light h-1"
              value={vm_name}
              name="vm_name"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="container d-block mt-4">
        <div className="row align-items-center justify-content-center ">
          <div className="col-10 justify-content-center">
            <label
              className="text-white px-5"
              style={{ letterSpacing: "0.12rem",marginLeft:'6rem',bottom:'-3rem'}}
            >
              Description of POC :
            </label>
            <input
              typeof="TextBox"
              className="bg-transparent w-50 px-2 border border-white border-2 rounded-3 p-2 m-2 text-light h-1 box1"
              style={{ left: "23rem", width: "3rem",height:'5rem' }}
              onChange={changedesc}
            />
          </div>
        </div>
      </div>
      <div className="container-flex ml-2 text-center text-white m-2">
        <span
          className="text2 position-relative end-25  "
          style={{ left: "-19rem", letterSpacing: "0.12rem" }}
        >
          Select Atlest one capability :
        </span>
      </div>
      <div className="container">
        <div className="row  align-items-center justify-content-center text-center">
          <div className="col-12">
            <Link to={"#"}>
              <button
                
                className="btn text-wrap bg-transparent border-white border-2 rounded-3 text-light m-3"
                style={{
                  padding: "0px 0.5rem 0px 0.5rem",
                  width: "18rem",
                  fontSize: "15px",
                } }
              >
                Entitlement
              </button>
            </Link>
            <Link to={"#"}>
              <button
                
                className="btn text-wrap bg-transparent border-white border-2 rounded-3 text-light m-3"
                style={{
                  padding: "0px 0.5rem 0px 0.5rem",
                  width: "18rem",
                  fontSize: "15px",
                }}
              >
                Data Quality and Governance
              </button> 
            </Link>
            <Link to={"#"}>
              <button
                
                className="btn text-wrap bg-transparent border-white border-2 rounded-3 text-light m-3"
                style={{
                  padding: "0px 0.5rem 0px 0.5rem",
                  width: "18rem",
                  fontSize: "15px",
                }}
              >
                MDM & Data Fabric
              </button>
            </Link>
            <Link to={"#"}>
              <button
                
                className="btn text-wrap bg-transparent border-white border-2 rounded-3 text-light m-3"
                style={{
                  padding: "0px 0.5rem 0px 0.5rem",
                  width: "18rem",
                  fontSize: "15px",
                }}
              >
                {" "}
                Graph Networks & ID Resolution
              </button>
            </Link>
            <Link to={"#"}>
              <button
                
                className="btn text-wrap bg-transparent border-white border-2 rounded-3 text-light m-3"
                style={{
                  padding: "0px 0.5rem 0px 0.5rem",
                  fontSize: "15px",
                  width: "18rem",
                }}
              >
                OCR/Intelligent Document Processing
              </button>
            </Link>
            <Link to={"#"}>
              <button
                
                className="btn text-wrap bg-transparent border-white border-2 rounded-3 text-light m-3"
                style={{
                  padding: "0px 0.5rem 0px 0.5rem",
                  width: "18rem",
                  fontSize: "15px",
                }}
              >
                Data Reporting and Visualisation
              </button>
            </Link>
            <Link to={"#"}>
              <button
                
                className="btn text-wrap bg-transparent border-white border-2 rounded-3 text-light m-3"
                style={{
                  padding: "0px 0.5rem 0px 0.5rem",
                  width: "18rem",
                  fontSize: "15px",
                }}
              >
                Automated AI/ML
              </button>
            </Link>
            <Link to={"#"}>
              <button
                
                className="btn text-wrap bg-transparent border-white border-2 rounded-3 text-light m-3"
                style={{
                  padding: "0px 0.5rem 0px 0.5rem",
                  width: "18rem",
                  fontSize: "15px",
                }}
              >
                Data Stores, Virtualisation & Mesh
              </button>
            </Link>
            
              <button
                type="submit"
                className="btn text-wrap bg-transparent border-white border-2 rounded-3 text-light m-3"
                style={{
                  padding: "0px 2rem 0px 2rem",
                  width: "18rem",
                  fontSize: "15px",
                }}
                onClick={handleClick}
              >
                Analytics & Data Science
              </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePOC;
