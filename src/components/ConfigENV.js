import axios from "axios";
import React, { useState } from "react";
import {  useLocation,useNavigate } from "react-router-dom";
// import Button1 from "../icon,button,header/Button1";

// import { Link } from "react-router-dom";
import Header from "../icon,button,header/Header";
import Icon from "../icon,button,header/Icon";
import Navbar from "../icon,button,header/Navbar";

import "./ConfigENV.css";

const ConfigENV = () => {
  const navigate = useNavigate();
  const location =useLocation();
  const vm_name =location.state.vmname; //vm ka naam yaha se aaya
  const Sname =location.state.Sname;  // vm ke software ka naam jupyter
  const Description =location.state.Desc;


  const [vm_size,setVm_size]=useState();
  const [link,setLink] = useState();

  const small =event=>{
    setVm_size(event.target.value)
  }
  const medium =event=>{
    setVm_size(event.target.value)
  }
  const large =event=>{
    setVm_size(event.target.value)
  }
  const datalink =event =>{
    setLink(event.target.value)
  }

 
   const sendData =()=>{
     const url = "http://35.194.61.7/v1/poc/software"
     let Data={
      "vm": {
        "vm_name": `${vm_name}`,
        "vm_size": `${vm_size}`
      },
      "software": [
        {
          "name": `${Sname}`
        },
        {
          "link": `${link}`
        }
      ]
    }
     fetch(url,{
      method: 'POST',
      headers:{
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body:JSON.stringify(Data)
     })
     .then(response=> {
      console.log("response",response)
     })
     .catch(e=>{
      console.log("e",e)
     })
  //  }
  // axios.post(url,Data)
  // .then((response) => {
  //   console.log("complete");
  // }, (error) => {
  //   console.log(error);
  // })


  navigate('/Viewexistingpoc',{state:{vmname:`${vm_name}`,Sname:'Jupyter',Desc:`${Description}`,vm_size:`${vm_size}`,link:`${link}`}})
}







  return (
    <div className="container-fluid img-fluid d-block">
      <Header text="Back" url="/selecttools1" />
      <Icon />
      <Navbar />
      <div className="container box">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-10 ">
            <span className="text-white fs-3 b" style={{letterSpacing:'0.19rem'}}>Configure Environment</span>
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
                {/* <div style={{ width: "max-content", display: "flex" }}>
                  <img
                    src="./images/logo2.png"
                    alt=""
                    style={{ height: "4rem", margin: "2rem 6rem 2rem 4rem" }}
                  ></img>
                  <span style={{ margin: "7rem 0 0 -9.5rem" }}>privitar</span>
                </div> */}
                <div style={{ width: "max-content", display: "flex" }}>
                  <img
                    src="./images/jupyter.png"
                    alt=""
                    style={{ height: "4rem", margin: "2rem 6rem 2rem 4rem" }}
                  ></img>
                  <span style={{ margin: "7rem 0 0 -9.5rem" }}>Jupyter</span>
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
                            name="vm_size"
                            value="Small"
                            id="flexRadioDefault1"
                            onChange={small}
                           
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
                            name="vm_size"
                            value="Medium"
                            id="flexRadioDefault1"
                            onChange={medium}
                            
                            
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
                            name="vm_size"
                            value="Large"
                            id="flexRadioDefault1"
                            onChange={large}
                            
                          
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
                            disabled={true}
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
                            disabled={true}
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
                            value="" defaultChecked
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
                          type="URL"
                          style={{
                            backgroundColor: "transparent",
                            border: "2px solid white",
                            marginLeft: "2rem",
                            width: "20rem",
                            color: "White",
                            borderRadius: "5px",
                          }}
                          onChange={datalink}
                        >
                        </input>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center align-items-center justify-content-center d-flex" style={{ marginTop: "2rem" }}>
       <div style={{width:'max-content'}} className="text-center align-items-center justify-content-center">
       <button className="btn2" onClick={sendData}>Launch</button>
       </div>
      </div>
    </div>
  );
};

export default ConfigENV;

