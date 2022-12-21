import React, { useState, useEffect } from "react";
import { render } from "@testing-library/react";
import Button from "react-bootstrap/Button";
import "../public.scss";
import imagee from "../assets/image1.png";
import microfon from "../assets/microfon.svg";
import "../Home_page/Home_page.scss";
import Modal from "react-bootstrap/Modal";
import Recording from "./Recording";
import "./Recordeing.scss";
import Loader from "../loader";
import ModelMyMestakes from "./Mestakes/ModelMyMestakes";

// export default class Model extends Component {

// }
const displayimg = false;
const Model = (props) => {
  const [startRecording, setstartRecording] = useState(true);

  const [isLoading, setisLoading] = useState(false);
  const [isRecording, setisRecording] = useState(false);
  const [sendRecord, setsendRecording] = useState(false);

  const [activeStep, setactiveStep] = useState("recording");
  // recording , myMistakes

  let audio_record;
  let send_record;
  let start_Recording;
  if (startRecording) {
    start_Recording = (
      <Button
        onClick={() =>
          setisRecording(true) &
          setsendRecording(true) &
          setstartRecording(!startRecording)
        }
        variant=""
        className="btn-record mt-5"
      >
        <span> Start Recording</span>
      </Button>
    );
  }
  if (isRecording) {
    audio_record = <Recording></Recording>;
    send_record = (
      <Button
        onClick={() => {
          setisRecording(true);
          setisLoading(true);
          setTimeout(() => {
            setisLoading(false);
            setactiveStep("myMistakes");
          }, 3000);
        }}
        variant=""
        className="btn-record mt-5"
      >
        <img src={microfon} alt="" />
        <span> Send Recordeing</span>
      </Button>
    );
  }

  return (
    <>
      {isLoading && <Loader></Loader>}

      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title" id="myModalLabel">
            <h6>{props.title}</h6>
          </h4>
          <button
            onClick={props.hide}
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="card-flyer">
            {activeStep == "recording" && (
              <div className="text-box">
                <div className="row justify-content-center">
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 ">
                    <div className="image-box">
                      <img
                        className="img-fluid img_course_model"
                        src={props.img}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 Text_center_vertical">
                    <div className="text-container">
                      <p className="pragraph_record">{props.desc}</p>
                    </div>
                  </div>
                  <div className="row Rocording_audio">{audio_record}</div>
                  <div className="Buttons_Recording">
                    {start_Recording}
                    {send_record}
                  </div>
                </div>
              </div>
            )}
            {activeStep == "myMistakes" && <ModelMyMestakes></ModelMyMestakes>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
