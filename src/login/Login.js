import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import Signin from "./Signin";
import Signup from "./Signup";
import "./login.scss";
const Login = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="container">
      {/* <countryList></countryList> */}
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Sign Up" value="1" />
              <Tab label="Sign In" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Signup></Signup>
          </TabPanel>
          <TabPanel value="2">
            <Signin></Signin>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default Login;
