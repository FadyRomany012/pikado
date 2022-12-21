import React, { useState, useRef } from "react";
import AudioReactRecorder, { RecordState } from "audio-react-recorder";
import { Button } from "react-bootstrap";
import AudioPlayer from "react-h5-audio-player";
import microfon from "../assets/microfon.svg";
import "./Recordeing.scss";

import Icon, { AudioTwoTone, CaretRightOutlined } from "@ant-design/icons";
import "react-h5-audio-player/lib/styles.css";
import styled from "styled-components";
function Recording() {
  const Container = styled.div`
    position: relative;
    background: white;

    box-shadow: -1px 1px 8px 1px rgba(0, 0, 0, 0.35);
    -webkit-box-shadow: -1px 1px 8px 1px rgba(0, 0, 0, 0.35);
    -moz-box-shadow: -1px 1px 8px 1px rgba(0, 0, 0, 0.35);
  `;

  const stopsvg = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 0H5C3.67392 0 2.40215 0.526784 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5V15C0 16.3261 0.526784 17.5979 1.46447 18.5355C2.40215 19.4732 3.67392 20 5 20H15C16.3261 20 17.5979 19.4732 18.5355 18.5355C19.4732 17.5979 20 16.3261 20 15V5C20 3.67392 19.4732 2.40215 18.5355 1.46447C17.5979 0.526784 16.3261 0 15 0ZM18 15C18 15.7956 17.6839 16.5587 17.1213 17.1213C16.5587 17.6839 15.7956 18 15 18H5C4.20435 18 3.44129 17.6839 2.87868 17.1213C2.31607 16.5587 2 15.7956 2 15V5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2H15C15.7956 2 16.5587 2.31607 17.1213 2.87868C17.6839 3.44129 18 4.20435 18 5V15Z"
        fill="white"
      />
    </svg>
  );

  const StopIcon = (props) => <Icon component={stopsvg} {...props} />;
  const recordsvg = () => (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6" cy="6" r="6" fill="#FF0606" />
    </svg>
  );
  const RecordIcon = (props) => <Icon component={recordsvg} {...props} />;

  const formatTime = (timer) => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);

    return `${getMinutes}:${getSeconds}`;
  };
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isStop, setIsStop] = useState(false);
  const countRef = useRef(null);
  const [recordstate, setrecordstate] = useState("none");
  const [blobURL, setblobURL] = useState("");
  const [condition, setcondition] = useState("true");
  const [download, setdownload] = useState([]);

  const start = () => {
    setIsActive(true);
    setIsStop(false);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    console.log(recordstate);
    console.log("start");
    setrecordstate(RecordState.START);
    setcondition("false");
    setblobURL("");
  };

  const stop = () => {
    clearInterval(countRef.current);
    console.log("stop");
    setrecordstate(RecordState.STOP);
    setcondition("true");
    setIsActive(false);
    setIsStop(true);
    setTimer(0);
  };

  const onStop = (audioData) => {
    // debugger;
    console.log(audioData);
    setdownload({ ...download, audioData });
    setblobURL(audioData.url);
  };

  return (
    <div>
      <AudioReactRecorder
        canvasWidth="0"
        canvasHeight="0"
        backgroundColor={false}
        foregroundColor={false}
        state={recordstate}
        autoPlay
        onStop={onStop}
      />

      <Container className="recorder_contianer">
        {condition === "true" ? (
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Button
              onClick={start}
              type="primary"
              shape="circle"
              icon={<AudioTwoTone twoToneColor="white" />}
              size={"large"}
            >
              <img src={microfon} />
            </Button>
            <h1>|</h1>

            <p
              style={{
                fontWeight: "450",
                fontSize: "24px",
                paddingLeft: "24px",
              }}
            >
              record audio
            </p>
          </div>
        ) : (
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <Button
                onClick={stop}
                type="primary"
                shape="circle"
                icon={<StopIcon twoToneColor="white" />}
                size={"large"}
                style={{ backgroundColor: "tomato", borderColor: "tomato" }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 0H5C3.67392 0 2.40215 0.526784 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5V15C0 16.3261 0.526784 17.5979 1.46447 18.5355C2.40215 19.4732 3.67392 20 5 20H15C16.3261 20 17.5979 19.4732 18.5355 18.5355C19.4732 17.5979 20 16.3261 20 15V5C20 3.67392 19.4732 2.40215 18.5355 1.46447C17.5979 0.526784 16.3261 0 15 0ZM18 15C18 15.7956 17.6839 16.5587 17.1213 17.1213C16.5587 17.6839 15.7956 18 15 18H5C4.20435 18 3.44129 17.6839 2.87868 17.1213C2.31607 16.5587 2 15.7956 2 15V5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2H15C15.7956 2 16.5587 2.31607 17.1213 2.87868C17.6839 3.44129 18 4.20435 18 5V15Z"
                    fill="white"
                  ></path>
                </svg>
              </Button>
              <h1>|</h1>
              <div
                style={{
                  display: "flex",
                }}
              >
                <RecordIcon
                  style={{
                    width: "16.5px",
                    height: "16px",
                    border: "2px solid #f50202",
                    borderRadius: "50%",
                    marginTop: "10px",
                  }}
                />

                <p
                  style={{
                    fontWeight: "bold",
                    paddingLeft: "5px",
                    marginTop: "8px",
                  }}
                >
                  {formatTime(timer)}
                </p>
              </div>
              <p
                style={{
                  fontWeight: "450",
                  fontSize: "24px",
                  paddingLeft: "24px",
                }}
              >
                Listening...
              </p>
            </div>
          </div>
        )}
        {isStop === true ? (
          <div>
            <AudioPlayer
              className="AudioPlayer_rec"
              layout="horizontal-reverse"
              customVolumeControls={[]}
              showJumpControls={false}
              autoPlay={false}
              src={blobURL}
              style={{
                position: "absolute",
                zIndex: "1",
                borderStyle: "none",
                borderBottomLeftRadius: "24px",
                borderBottomRightRadius: "24px",
                boxShadow: "-1px 6px 8px 1px rgba(0,0,0,0.35)",
              }}
              customAdditionalControls={[]}
              autoPlayAfterSrcChange={false}
              onPlay={(e) => console.log("onPlay")}
              defaultCurrentTime=" "
              defaultDuration=" "
              customIcons={{
                play: <CaretRightOutlined />,
              }}
              controls
            />
          </div>
        ) : null}
      </Container>
    </div>
  );
}
export default Recording;
