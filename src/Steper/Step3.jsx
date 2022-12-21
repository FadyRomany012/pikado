import React from "react";

const Step3 = () => {
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
              <div>
                <div className="row justify-content-center">
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 table_recording">
                    <h3>Corect answer</h3>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Syllable</th>
                          <th>Phonetics</th>
                          <th>Score</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="Syllable">a</td>
                          <td className="Phonetics_G ">AE</td>
                          <td className="Phonetics_G ">Good</td>
                        </tr>
                        <tr>
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
                          <td className="Syllable">a</td>
                          <td className="Phonetics_R ">AH</td>
                          <td className="Phonetics_R ">Sound like D</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <div className="text-container">
                      <h3>Thanks for your answer</h3>
                      <p className="pragraph_record">
                        Hi, <span>my</span> name is Adam and today my father is
                        taking me a long with my <span>sister</span> Sara in a
                        visit to the <span>aquarium</span> where we can see what
                        life is like under the sea.
                      </p>
                    </div>
                  </div>
                  <div className="row Rocording_audio"></div>
                  <div className="Buttons_Recording">
                    <button type="button" className="btn-record mt-5 btn">
                      <span>git result</span>
                    </button>
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

export default Step3;
