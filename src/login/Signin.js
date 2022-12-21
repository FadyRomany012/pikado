import React, { useState } from "react";
import pass_icon from "../assets/pwicon.svg";
import mail_icon from "../assets/mail.svg";
import pikado from "../assets/pikao.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Signin = () => {
  const [data, setData] = useState({});

  const updateData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div>
      <div className="login-page ">
        <div className="container">
          {/* <form onSubmit={submit}>
            <input name="email" type="email" onChange={updateData} />
            <input name="password" type="password" onChange={updateData} />
            <button>Submit</button>
          </form> */}
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="bg-white shadow rounded">
                <div className="row">
                  <div className="col-md-5 ps-0 d-none d-md-block">
                    <div className="form-right h-100 bg-primary text-white text-center pt-5">
                      <i className="bi bi-bootstrap"></i>
                      <h2 className="fs-1">Welcome Back pikado</h2>
                      <img className="img-fluid" src={pikado} />
                    </div>
                  </div>

                  <div className="col-md-7 pe-0 login_fields">
                    {" "}
                    <div className="form-left h-100 padding_form">
                      {" "}
                      <h3 className="mb-3 sign_up_title">
                        Sign in to your account
                      </h3>
                      <form action="" className="row g-4" onSubmit={submit}>
                        <div className="col-12 ">
                          <label>
                            Username<span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <div className="input-group-text">
                              <i className="bi bi-person-fill">
                                <img src={mail_icon} />
                              </i>
                            </div>
                            <input
                              name="email"
                              onChange={updateData}
                              type="text"
                              className="form-control"
                              placeholder="Enter Username"
                            />
                          </div>
                        </div>

                        <div className="col-12">
                          <label>
                            Password<span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <div className="input-group-text">
                              <i className="bi bi-person-fill">
                                <img src={pass_icon} />
                              </i>
                            </div>
                            <input
                              name="password"
                              type="password"
                              onChange={updateData}
                              className="form-control"
                              placeholder="Enter Password"
                            />
                          </div>
                        </div>

                        <div className="col-sm-6">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="inlineFormCheck"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inlineFormCheck"
                            >
                              Remember me
                            </label>
                          </div>
                        </div>

                        <div className="col-sm-6">
                          <a href="#" className="float-end text-primary">
                            Forgot Password?
                          </a>
                        </div>

                        <div className="col-12  item_center">
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
                              login
                            </button>
                          </Link>
                        </div>
                      </form>
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

export default Signin;
