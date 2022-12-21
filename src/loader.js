import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { ClassNames } from "@emotion/react";
const loader = () => {
  return (
    <div className="loader_page">
      <div className="loader_box">
        <CircularProgress className="m-auto" />
        <br></br> <h3 className="m-auto loader_title">Uploading your answer</h3>
        <p className="loader_desc">
          Please relax and wait until we review your answers and show you the
          results.
        </p>
      </div>
    </div>
  );
};

export default loader;
