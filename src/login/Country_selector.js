import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

const Country_selector = () => {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };
  return (
    <>
      <Select
        className="form-control"
        options={options}
        value={value}
        onChange={changeHandler}
      />
    </>
  );
};

export default Country_selector;
