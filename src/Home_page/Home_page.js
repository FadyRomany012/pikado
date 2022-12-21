import React, { useState } from "react";
import startbutton from "../assets/startbutton.svg";
import microfon from "../assets/microfon.svg";
import watch from "../assets/watch.svg";
import icon_top from "../assets/icon_top.svg";
// import Modal from "react-bootstrap/Modal";
import data from "../data";
import Button from "react-bootstrap/Button";
import "../Home_page/Home_page.scss";
import Model_data from "../Recroding_Test/Model";
import Moment from "react-moment";

const Home_page = () => {
  const dateToFormat = "1976-04-19T12:59-0500";

  const [model, setModel] = useState(false);
  const [tempdata, setTempdata] = useState([]);
  const getData = (img, title, desc) => {
    let tempData = [img, title, desc];
    setTempdata((item) => [1, ...tempData]);
    return setModel(true);
  };
  let modelStyle = {
    display: "block",
  };
  const calendarStrings = {
    lastDay: "[Yesterday at] LT",
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    lastWeek: "[last] dddd [at] LT",
    nextWeek: "dddd [at] LT",
    sameElse: "L",
  };
  return (
    <div>
      {/* {console.log(data.recordData)} */}
      <div className="container">
        <div className="row header-top">
          <div className="col-6">
            <h3 className="header-top-date">
              <Moment format="D MMM YYYY" withTitle calendar={calendarStrings}>
                {/* 1976-04-19T12:59-0500 */}
              </Moment>
            </h3>
          </div>
          <div className="col-6 text-right">
            <img src={icon_top} />
          </div>
        </div>
      </div>
      <div id="cards_landscape_wrap-2">
        <div className="container">
          <div className="row">
            {data.recordData.map((item, index) => {
              return (
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  {item.type === "Record" ? (
                    <div className="" key={index}>
                      <div className="card-flyer">
                        <div className="text-box">
                          <div className="image-box">
                            <img
                              className="img-fluid"
                              src={item.imagSrc}
                              alt=""
                            />
                            <img
                              className="img-fluid startbutton"
                              src={startbutton}
                            />
                          </div>
                          <div className="text-container">
                            <h6>{item.title}</h6>
                            <p>How was the zoo (summary)</p>
                            <Button
                              type="button"
                              className="  btn-record"
                              data-toggle="modal"
                              data-target=".bd-example-modal-lg"
                              onClick={() =>
                                getData(item.imagSrc, item.title, item.desc)
                              }
                            >
                              <img src={microfon} alt="" />
                              <span> Record Answer</span>
                            </Button>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="">
                      <a href="">
                        <div className="card-flyer">
                          <div className="text-box">
                            <div className="image-box">
                              <img src={item.imagSrc} alt="" />
                            </div>
                            <div className="text-container">
                              <h6>{item.title}</h6>
                              <p>
                                We will ask you some questions after that
                                (subTitle)
                              </p>
                              <button variant="" className="btn-watch">
                                <img src={watch} alt="" />
                                <span> watch</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="modal fade bd-example-modal-sm"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="mySmallModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm">
            <div className="modal-content">...</div>
          </div>
        </div>
        {/*  */}
      </div>
      {model === true ? (
        <div
          className="modal fade bd-example-modal-lg"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <Model_data
              aria-hidden="true"
              img={tempdata[1]}
              title={tempdata[2]}
              desc={tempdata[3]}
              hide={() => setModel(false)}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home_page;
