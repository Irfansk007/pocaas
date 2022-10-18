import Header from "../icon,button,header/Header";
import Icon from "../icon,button,header/Icon";
import Navbar from "../icon,button,header/Navbar";
import "./SelectTools3.css";
// import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './ManagePOC.css';

import React,{useState} from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Button from 'react-bootstrap/Button';
// import { Link } from "react-router-dom";



import { Link } from "react-router-dom";




const ManagePOC = () => {
  // @ts-ignore
  // @ts-ignore
  // const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
  

  //  deletemodal
  const [Change, setChange] = useState(false);

  const handleChangeClose = () => setChange(false);
  const handleChangeShow = () => setChange(true);

  return (
    <div className="container-fluid img-fluid d-block">
      <Header text="Back" url="/Manage" />
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
              Manage POC
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
    <tr className="" style={{backgroundColor:'#C4C4C4'}}>
      <th scope="col">S.no</th>
      <th scope="col"> POC Name</th>
      
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody className="border table-bordered border-dark border-1">
    <tr className="m-3">
      <th scope="row">1</th>
      <td>Data Reporting and visualization</td>
      
      <td className="align-items-center justify-content-center text-center d-flex">
     
      <Link to={"/Editpoc"}><button className="btn text-dark fw-bolder rounded-4 m-4" style={{backgroundColor:'#11A2D0',padding:'5px 1.5rem 5px 1.5rem'}} >Edit
      
      </button></Link>
      
      <button className="btn text-dark fw-bolder rounded-4 m-4" style={{backgroundColor:'#F41313',padding:'5px 1.5rem 5px 1.5rem'}} onClick={handleChangeShow}>Delete</button>
  
    {/* <Button variant="primary" >
        jackonClick={handleShow}
      </Button> */}
      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Edit Users</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             
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
      </Modal> */}

        {/* <button className="btn text-dark fw-bolder rounded-4 m-4" style={{backgroundColor:'#11A2D0',padding:'5px 1.5rem 5px 1.5rem'}} onClick={handleShow}>Edit
      
        </button> */}
        <Modal show={Change} onHide={handleChangeClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-modal">Do You want to Delete this User?</Modal.Body>
        <Modal.Footer>
          <button  onClick={handleChangeClose} className="button30">
            Cancel
          </button>
          <button  onClick={handleChangeClose} className="button31">
            ok
          </button>
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


export default ManagePOC;