import React from "react";
import pass_icon from "../assets/pwicon.svg";
import mail_icon from "../assets/mail.svg";
import Country_selector from "./Country_selector";
import Phone_number from "./Phone_number";
import pikado from "../assets/pikao.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home_page from "../Home_page/Home_page";
import accesssvg from "../assets/access.svg";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import Signin from "./Signin";
const Signup = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div className="login-page ">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="bg-white shadow rounded">
                <div className="row">
                  <div className="col-md-7 pe-0 login_fields">
                    <div className="form-left h-100 padding_form">
                      <form action="" className="row g-4">
                        <div className="col-12 ">
                          <h3 className="mb-3 sign_up_title">
                            Sign up to create a new account
                          </h3>
                          <div className="col-sm-6">
                            <div className="form-check">
                              <img className="img-fluid" src={accesssvg} />
                              <label
                                className="form-check-label"
                                htmlFor="inlineFormCheck"
                              >
                                To access multiple devices
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-check">
                              <img className="img-fluid" src={accesssvg} />

                              <label
                                className="form-check-label"
                                htmlFor="inlineFormCheck"
                              >
                                To save learning progress
                              </label>
                            </div>
                          </div>
                          <label>
                            Your email<span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Username"
                            />{" "}
                            <div className="input-group-text">
                              <i className="bi bi-person-fill">
                                <img src={mail_icon} />
                              </i>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <label>
                            Your new password
                            <span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Password"
                            />{" "}
                            <div className="input-group-text">
                              <i className="bi bi-person-fill">
                                <img src={pass_icon} />
                              </i>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 ">
                          <label>
                            Your country<span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            {/* <div className="input-group-text">
                              <i className="bi bi-person-fill">
                                <img src={mail_icon} />
                              </i>
                            </div> */}
                            <Country_selector></Country_selector>
                          </div>
                        </div>
                        <div className="col-12 ">
                          <label>
                            Your Whatsapp<span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <Phone_number></Phone_number>
                          </div>
                        </div>
                        <div className="col-12 m-auto item_center">
                          {" "}
                          <p className="text-end text-secondary mt-3 Termsancond">
                            By clicking the sign up button, you accept the
                            <span> Terms & Conditions </span>and the
                            <span> Privacy Policy</span>.
                          </p>
                          <Link to="/home">
                            <button
                              type="submit"
                              className="btn  px-4  mt-4 bg_button"
                            >
                              Sign up
                            </button>
                          </Link>
                        </div>
                        <Link className="Decoration_none" to="/Signin">
                          <h4 className="haveanaccount">
                            I already have an account,<span> Sign in</span>
                          </h4>
                        </Link>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-5 ps-0 d-none d-md-block">
                    <div className="form-right h-100 bg-primary text-white text-center pt-5">
                      <i className="bi bi-bootstrap"></i>
                      <h2 className="fs-1">Welcome Back pikado</h2>
                      <img className="img-fluid" src={pikado} />
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

export default Signup;
