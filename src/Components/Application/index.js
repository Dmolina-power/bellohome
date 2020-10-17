import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "../SignIn/index";
import Signup from "../Signup/index";
import PasswordReset from "../PasswordReset/index";
import { UserContext } from "../../Providers/UserProvider";
import Navbar from "../Navbar"

//Pages
import Home from "../../Pages/Home";
import Schedule from "../../Pages/Schedule";

function Application() {
    const user = useContext(UserContext);
    return ( user ? 
      <>
      <Navbar />
      
      <Router>
      <Home path="/" />
      <Schedule path="/schedule" />
      </Router>
      </>
      : 
      <Router>
        <Signup path="signup" />
        <SignIn path="/" />
        
        <PasswordReset path = "passwordReset" />
      </Router>
    );
  }
  
  export default Application;