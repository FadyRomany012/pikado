import React, { useState, useEffect } from "react";
import Metakesbar from "./Metakesbar";
import Button from "react-bootstrap/Button";
import Record from "../../assets/Record.svg";

const ModelMyMestakes = () => {
  const [activeStep, setactiveStep] = useState("recordingTable");

  return (
    <div>
      {activeStep == "recordingTable" && (
        <div className="row justify-content-center">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 table_recording">
            <h3 className="correct_answer">
              <img src={Record} /> correct answer
            </h3>{" "}
            <table className="table">
              <thead>
                {" "}
                <p className="pronunciation_analysis mx-3">
                  Your pronunciation analysis
                </p>
                <tr>
                  {/* <th>#</th> */}
                  <th>Syllable</th>
                  <th>Phonetics</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* <th scope="row">1</th> */}
                  <td className="Syllable">a</td>
                  <td className="Phonetics_G ">AE</td>
                  <td className="Phonetics_G ">Good</td>
                </tr>
                <tr>
                  {/* <th scope="row">2</th> */}
                  <td className="Syllable">ccur</td>
                  <td>
                    <tr className="Phonetics_G ">K</tr>
                    <tr className="Phonetics_R ">Y</tr>
                    <tr className="Phonetics_R ">ER</tr>
                  </td>
                  <td>
                    <tr className="Phonetics_G ">Good</tr>
                    <tr className="Phonetics_R ">Sound like UH</tr>
                    <tr className="Phonetics_R ">Sound like UH</tr>
                  </td>
                </tr>
                <tr>
                  {/* <th scope="row">3</th> */}
                  <td className="Syllable">a</td>
                  <td className="Phonetics_R ">AH</td>
                  <td className="Phonetics_R ">Sound like D</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="text-container">
              <h3 className="thanks_answer">Thanks for your answer</h3>
              <p className="pragraph_record">
                Hi, <span>my</span> name is Adam and today my father is taking
                me a long with my <span>sister</span> Sara in a visit to the
                <span>aquarium</span> where we can see what life is like under
                the sea.
              </p>
            </div>
          </div>
          <div className="row Rocording_audio"></div>
          <div className="Buttons_Recording">
            <button
              type="button"
              className="btn-record mt-5 btn"
              onClick={() => {
                setactiveStep("myMistakes");
              }}
            >
              <span>get result</span>
            </button>
          </div>
        </div>
      )}
      {activeStep == "myMistakes" && <Metakesbar></Metakesbar>}
    </div>
  );
};

export default ModelMyMestakes;
