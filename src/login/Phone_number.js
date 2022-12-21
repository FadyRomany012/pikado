import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const Phone_number = () => {
  const [value, setValue] = useState();

  return (
    <>
      <PhoneInput
        placeholder="Enter phone number"
        className="form-control"
        value={value}
        onChange={setValue}
      />
    </>
  );
};

export default Phone_number;
