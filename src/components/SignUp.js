import React from "react";
import { Link } from "react-router-dom";
import Header from "../icon,button,header/Header";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="container-fluid2 img-fluid d-block">
      <Header text="Login" url="/Login" />
      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <div className="row justify-content-center align-item-center text-center">
              <div className="col-4 text-white border border-white border-5 rounded-4 h-100 d-inline-block mt-3">
                <span className="text-white h2 fw-semibold  line">Sign UP</span>
                <div className="row mt-5">
                  <div className="col-12 border border-primary rounded-4 border-5">
                    <form>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control mt-3 mb-3"
                          id="exampleInputEmail1"
                          placeholder="Enter Your User Name"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter your Password"
                        />
                        <input
                          type="text"
                          className="form-control mt-3 mb-3"
                          placeholder="Enter your Email ID"
                        />
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your age"
                        />
                        <input
                          type="text"
                          className="form-control mt-3 mb-3"
                          placeholder="Enter your Gender"
                        />
                        <input
                          type="text"
                          className="form-control mb-0"
                          placeholder="Enter your Number"
                        />
                      </div>
                      <div className="form-check"></div>
                      <Link to={"/Homepage"}>
                        <button
                          type="submit"
                          className="btn btn-success border border-white border-1 width-5 mt-2 rounded-4 "
                        >
                          Sign UP
                        </button>
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
