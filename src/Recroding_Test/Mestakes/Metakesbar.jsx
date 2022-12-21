import React from "react";
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import boy from "../../assets/boy.svg";
import "./mestaks.scss";
const Metakesbar = () => {
  const value = 0.66;
  const percentage = 40;

  return (
    <div>
      <div className="row justify-content-center progbar">
        <h3>Progress</h3>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 ">
          <h3 className="bar_text_right">
            ProYour pronunciation comparing with the native American
            accent.gress
          </h3>

          <div style={{ width: 200, height: 200 }}>
            <CircularProgressbarWithChildren value={66}>
              {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}

              <div style={{ fontSize: 12, marginTop: -5 }}>
                <span className="persent_bar">75%</span> <br></br>
                <span className="persent_text">Native American Accent</span>
              </div>
            </CircularProgressbarWithChildren>
            ;
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 ">
          <h3 className="bar_text_right">The last 20 recording results</h3>
          {/* <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">Hello</div>            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">Hello</div>
          </div> */}
          <div className="percentage_div">
            <div className="percentage_bar">
              <span className="persent_bar">60%</span>
            </div>
            <div className="percentage_text">
              <p>
                22.07.2021 <br></br>14:13
              </p>
            </div>
          </div>
          <div className="percentage_div">
            <div className="percentage_bar">
              <span className="persent_bar">60%</span>
            </div>
            <div className="percentage_text">
              <p>
                22.07.2021 <br></br>14:13
              </p>
            </div>
          </div>
          <div className="percentage_div">
            <div className="percentage_bar">
              <span className="persent_bar">60%</span>
            </div>
            <div className="percentage_text">
              <p>
                22.07.2021 <br></br>14:13
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <button
        type="button"
        className="btn-record mt-5  close"
        aria-label="Close"
        data-dismiss="modal"
      >
        <span> close</span>
      </button>className= */}
      <div className=" mt-5 " data-dismiss="modal" aria-label="Close">
        <img src={boy} />{" "}
      </div>
    </div>
  );
};

export default Metakesbar;
