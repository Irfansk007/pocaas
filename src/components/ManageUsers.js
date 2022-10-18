import Header from "../icon,button,header/Header";
import Icon from "../icon,button,header/Icon";
import Navbar from "../icon,button,header/Navbar";
import "./SelectTools3.css";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ManageUsers = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //  deletemodal
  const [Change, setChange] = useState(false);

  const handleChangeClose = () => setChange(false);
  const handleChangeShow = () => setChange(true);

  return (
    <div className="container-fluid img-fluid d-block">
      <Header text="Back" url="/Homepage" />
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
              Manage Users
            </span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-10 border border-white rounded-2 border-2 bg-white ">
            <div className="table-responsive">
              <table className="table align-middle">
                <thead className="">
                  <tr className="" style={{ backgroundColor: "#C4C4C4" }}>
                    <th scope="col">S.no</th>
                    <th scope="col">Name</th>
                    <th scope="col">Login_id</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody className="border table-bordered border-dark border-1">
                  <tr className="m-3">
                    <th scope="row">1</th>
                    <td>peter griffin</td>     
                    <td>peter@123</td>
                    <td className="align-items-center justify-content-center text-center d-flex">
                      <Dropdown style={{}}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          Permission
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item>
                            <Link
                              to={"/Editpoc"}
                              style={{ textDecoration: "None", color: "black" }}
                            >
                              Edit
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link
                              to={"/#"}
                              style={{ textDecoration: "None", color: "black" }}
                            >
                              View
                            </Link>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                        <button
                          className="btn text-dark fw-bolder rounded-4 m-4"
                          style={{
                            backgroundColor: "#11A2D0",
                            padding: "5px 1.5rem 5px 1.5rem",
                          }}
                          onClick={handleShow}
                        >
                          Edit
                        </button>

                        <button
                          className="btn text-dark fw-bolder rounded-4 m-4"
                          style={{
                            backgroundColor: "#F41313",
                            padding: "5px 1.5rem 5px 1.5rem",
                          }}
                          onClick={handleChangeShow}
                        >
                          Delete
                        </button>
                      </Dropdown>
                      {/* <Button variant="primary" >
        jackonClick={handleShow}
      </Button> */}
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title className="text-center">
                            Edit Users
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Form>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Control
                                type="text"
                                placeholder="First Name"
                                autoFocus
                                className="m-2"
                              />
                              <Form.Control
                                type="text"
                                placeholder="Last Name"
                                autoFocus
                                className="m-2"
                              />
                              <Form.Control
                                type="Email"
                                placeholder="Email ID"
                                autoFocus
                                className="m-2"
                              />
                              <Form.Control
                                type="text"
                                placeholder="Phone No"
                                autoFocus
                                className="m-2"
                              />
                              <Form.Control
                                type="text"
                                placeholder="Gender"
                                autoFocus
                                className="m-2"
                              />
                            </Form.Group>
                          </Form>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Update
                          </Button>
                        </Modal.Footer>
                      </Modal>

                      {/* <button className="btn text-dark fw-bolder rounded-4 m-4" style={{backgroundColor:'#11A2D0',padding:'5px 1.5rem 5px 1.5rem'}} onClick={handleShow}>Edit
      
        </button> */}
                      <Modal show={Change} onHide={handleChangeClose}>
                        <Modal.Header closeButton>
                          <Modal.Title></Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="text-center">
                          Do You want to Delete this User?
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="secondary"
                            onClick={handleChangeClose}
                            className="text-center"
                          >
                            Cancel
                          </Button>
                          <Button
                            variant="primary"
                            onClick={handleChangeClose}
                            className="text-center"
                          >
                            ok
                          </Button>
                        </Modal.Footer>
                      </Modal>
                      {/*          
        <button className="btn text-dark fw-bolder rounded-4 m-2" style={{backgroundColor:'#F41313',padding:'5px 1.5rem 5px 1.5rem'}} onClick={handleChangeShow}>Delete</button> */}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
