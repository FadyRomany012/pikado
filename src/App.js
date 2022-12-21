import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Recording from "./Recroding_Test/Recording";
import { StyledEngineProvider } from "@mui/material/styles";
import Home_page from "./Home_page/Home_page";
import LinaerStepper from "./LinaerStepper";
import Steps from "./Steper/Steps";
import Signin from "./login/Signin";
import Signup from "./login/Signup";
import Login from "./login/Login";
import "./Responsive.scss";
// or less ideally
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>} />
          <Route path="/home" element={<Home_page />} />
          <Route path="/Steps" element={<Steps />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
