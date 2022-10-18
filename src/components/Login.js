import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Header from "../icon,button,header/Header";
const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid2 img-fluid d-block">
      <Header text="Back" url="/" />
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="row justify-content-center align-item-center text-center">
              <div className="col-4 text-white border border-white border-5 rounded-4 h-100 d-inline-block mt-3">
                <span className="text-white h2 fw-semibold  line"> LOGIN</span>
                <div className="row mt-5">
                  <div className="col-12 border border-primary rounded-4 border-5">
                    <form>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control mt-4 mb-4"
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
                      </div>
                      <div className="form-check"></div>
                      <button
                        type="submit"
                        className="btn btn-dark border border-white border-1 width-5 mt-3 rounded-4"
                        onClick={() => navigate("/Homepage")}
                      >
                        Login
                      </button>
                    </form>
                    <span className="fs-6 pt-2">Forgot Your Password?</span>
                    <div className="inline mt-4 mb-6 pb-5">
                      <span className="text-start">
                       
                        Don't have an account?
                      </span>
                      <button
                        className="
                        btn btn-success ml-2 rounded-5"
                        onClick={() => navigate("/Signup")}
                      >
                        Sign Up
                      </button>
                    </div>
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

export default Login;
