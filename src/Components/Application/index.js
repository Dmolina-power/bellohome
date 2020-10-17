import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "../SignIn/index";
import Signup from "../Signup/index";
import PasswordReset from "../PasswordReset/index";
import { UserContext } from "../../Providers/UserProvider";
import Navbar from "../Navbar"
import Landing from "../Landing"
//Pages
import Home from "../../Pages/Home";

function Application() {
    const user = useContext(UserContext);
    return ( user ? 
      <>
      <Navbar />
      
      <Router>
      <Home path="/home" />
      
      </Router>
      </>
      : 
      <Router>
        <Signup path="signup" />
        <Landing path="/" />
        <PasswordReset path = "passwordReset" />
      </Router>
    );
  }
  
  export default Application;