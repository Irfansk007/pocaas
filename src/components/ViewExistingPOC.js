// import { Link } from "react-router-dom";
import Header from "../icon,button,header/Header";
import Icon from "../icon,button,header/Icon";
import Navbar from "../icon,button,header/Navbar";
import React, { useState } from "react";
// import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import "./ViewExistingPOC.css";
import { useLocation } from "react-router-dom";

const ViewExistingPOC = () => {
  const location =useLocation();

  const vm_name =location.state.vmname; //vm ka naam yaha se aaya
  const Sname =location.state.Sname;  // vm ke software ka naam jupyter
  const Desc =location.state.Desc;
  const vm_size =location.state.vm_size;
  const link =location.state.link;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container-fluid3 img-fluid d-block">
      <Header text="Back" url="/Homepage" />
      <Icon />
      <Navbar />
      <div className="container box">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-10 ">
            <span className="text-white fs-3 b">View POC</span>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "2rem" }}>
        <div className="row">
          <div className="col-12 d-block fw-semibold align-items-center justify-content-center text-center">
            <div className="container" style={{ marginBottom: "1.5rem" }}>
              <div
                className="fs-5 text-white"
                style={{
                  letterSpacing: "0.12rem",
                  marginLeft: "8rem",
                  width: "max-content",
                }}
              >
                POC name : <span>{vm_name}</span>
              </div>
            </div>
            <div className="container" style={{ marginBottom: "1.5rem" }}>
              <div
                className="fs-5  text-white"
                style={{
                  letterSpacing: "0.12rem",
                  marginLeft: "8rem",
                  width: "max-content",
                  fontFamily: "Inter",
                }}
              >
                Description of POC :{" "}
                <span className="fw-light">
                  {Desc}
                </span>
                <span
                  className="material-symbols-outlined"
                  onClick={handleShow}
                >
                  more_vert
                </span>
                <Modal
                  show={show}
                  onHide={handleClose}
                  className="text-center"
                  style={{ fontFamily: "Inter" }}
                >
                  <Modal.Header closeButton className="text-center">
                    <Modal.Title style={{ marginLeft: "10rem" }}>
                      Settings<i className="fa fa-gear"></i>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Select
                          aria-label="Default select example"
                          className="form1"
                        >
                          <option className="select">Select Your VM</option>
                          <option value="1">Small</option>
                          <option value="2">Medium</option>
                          <option value="3">Large</option>
                        </Form.Select>
                        <Form.Select
                          aria-label="Default select example"
                          className="form2"
                        >
                          <option className="select">Select your Data</option>
                          <option value="1">Customer Data</option>
                          <option value="2">Market Data</option>
                        </Form.Select>
                      </Form.Group>
                      <button className="button25">Apply</button>
                      <button className="button26">Delete POC</button>
                    </Form>
                  </Modal.Body>
                </Modal>
              </div>
            </div>
            <div className="container" style={{ marginBottom: "1.5rem" }}>
              <div
                className="fs-5 text-white"
                style={{
                  letterSpacing: "0.12rem",
                  marginLeft: "8rem",
                  width: "max-content",
                  fontFamily: "Inter",
                }}
              >
                Capability :{" "}
                <span className="fw-light">Visualisation Tools</span>
              </div>
            </div>
            <div className="container" style={{ marginBottom: "1.5rem" }}>
              <div
                className="fs-5 text-white"
                style={{
                  letterSpacing: "0.12rem",
                  marginLeft: "8rem",
                  width: "max-content",
                  fontFamily: "Inter",
                }}
              >
                Tools : <span className="fw-light">{Sname}</span>
                <img src="./images/jupyter.png" alt="" className="img25"></img>
                {/* <img src="./images/logo8.png" alt="" className="img26"></img>
                <img src="./images/logo9.png" alt="" className="img26"></img> */}
              </div>
            </div>
            <div className="container" style={{ marginBottom: "1.5rem" }}>
              <div
                className="fs-5 text-white"
                style={{
                  letterSpacing: "0.12rem",
                  marginLeft: "8rem",
                  width: "max-content",
                  fontFamily: "Inter",
                }}
              >
                VM Config : <span className="fw-light">{vm_size}</span>
              </div>
            </div>
            <div className="container" style={{ marginBottom: "1.5rem" }}>
              <div
                className="fs-5 text-white"
                style={{
                  letterSpacing: "0.12rem",
                  marginLeft: "8rem",
                  width: "max-content",
                  fontFamily: "Inter",
                }}
              >
                Environment: : <span className="fw-light">GCP</span>
              </div>
            </div>
            <div className="container" style={{ marginBottom: "1.5rem" }}>
              <div
                className="fs-5 text-white"
                style={{
                  letterSpacing: "0.12rem",
                  marginLeft: "8rem",
                  width: "max-content",
                  fontFamily: "Inter",
                }}
              >
                Data Links : <span className="fw-light">{link}</span>
              </div>
            </div>
            <div>
                <button className="btn27">
                    Open
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewExistingPOC;
