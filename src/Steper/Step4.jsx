import React from "react";
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// import "./mestaks.scss";
const Step4 = () => {
  return (
    <div>
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">
              <h6> Watch and listen carefully (Title) </h6>
            </h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="card-flyer">
              <div>
                <div>
                  <div class="row justify-content-center progbar">
                    <h3>Progress</h3>
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 ">
                      <h3 class="bar_text_right">
                        ProYour pronunciation comparing with the native American
                        accent.gress
                      </h3>
                      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 ">
                        <h3 className="bar_text_right">
                          ProYour pronunciation comparing with the native
                          American accent.gress
                        </h3>
                        <div style={{ width: 200, height: 200 }}>
                          <CircularProgressbarWithChildren value={66}>
                            {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}

                            <div style={{ fontSize: 12, marginTop: -5 }}>
                              <span className="persent_bar">75%</span> <br></br>
                              <span className="persent_text">
                                Native American Accent
                              </span>
                            </div>
                          </CircularProgressbarWithChildren>
                          ;
                        </div>
                      </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 ">
                      <h3 class="bar_text_right">
                        The last 20 recording results
                      </h3>
                      <div class="percentage_div">
                        <div class="percentage_bar">
                          <span class="persent_bar">60%</span>
                        </div>
                        <div class="percentage_text">
                          <p>
                            22.07.2021 <br />
                            14:13
                          </p>
                        </div>
                      </div>
                      <div class="percentage_div">
                        <div class="percentage_bar">
                          <span class="persent_bar">60%</span>
                        </div>
                        <div class="percentage_text">
                          <p>
                            22.07.2021 <br />
                            14:13
                          </p>
                        </div>
                      </div>
                      <div class="percentage_div">
                        <div class="percentage_bar">
                          <span class="persent_bar">60%</span>
                        </div>
                        <div class="percentage_text">
                          <p>
                            22.07.2021 <br />
                            14:13
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    class="btn-record mt-5 btn"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span> close </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4;
