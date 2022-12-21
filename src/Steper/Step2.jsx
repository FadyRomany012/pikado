import React from "react";
import Recording from "../Recroding_Test/Recording";

const Step2 = () => {
  return (
    <div>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="myModalLabel">
              <h6> Watch and listen carefully (Title) </h6>
            </h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="card-flyer">
              <div className="text-box">
                <div className="row justify-content-center">
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <div className="image-box">
                      <img
                        className="img-fluid img_course_model"
                        src="https://picsum.photos/200/100"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <div className="text-container">
                      <p className="pragraph_record">
                        Hi, my name is Adam and today my father is taking me a
                        long with my sister Sara in a visit to the aquarium
                        where we can see what life is like under the sea.
                      </p>
                    </div>
                  </div>
                  <div className="row Rocording_audio">
                    <Recording></Recording>
                  </div>
                </div>
                <div className="Buttons_Recording">
                  <button type="button" className="btn-record mt-5 btn">
                    <img
                      src="/static/media/microfon.e571d80ea531f0efc1ca7189bf9ea867.svg"
                      alt=""
                    />
                    <span> Send Recordeing</span>
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

export default Step2;
