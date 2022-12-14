//import logo from './logo.svg';
import "./App.css";

import { Home } from "./Home";
import { UserComponent } from "./Project/User";
import { Navigation } from "./Navigation";
import { SignUpComponent } from "./Project/SignUp";
import { SampleLogin } from "./Project/samplelogin";
import { UserLogin } from "./Project/UserLogin";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        {/* <h3 className="m-3 d-flex justify-content-center">
       React JS Tutorial
     </h3> */}

        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/user" element={<UserComponent />} />
          <Route path="/signUp" element={<SignUpComponent />} />
          {/* <Route exact path="/login" component={Login} /> */}
          <Route path="/login" element={<SampleLogin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
