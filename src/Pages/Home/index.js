import React from "react";
import Footer from "../../Components/Footer";
import Feature from "../../Components/Feature";
import Homecard from "../../Components/Homecard";
import Reviewcard from "../../Components/Reviewcard";
import "./style.css";

function home() {
  return (
    <>
      <div className="row">
        <div className="col s12 m4"></div>
        <div className="col s12 m4">
          <Homecard />
          <div className="col s12 m4"></div>
        </div>
      </div>
      <div className="col s12">
        <nav className="spacer">
          <a class="brand-logo center">Reviews</a>
        </nav>
      </div>
      <div className="row">
      <div className="col s12 m4">
        <Reviewcard />
        </div>
        <div className="col s12 m4">
          <Reviewcard />
        </div>
        <div className="col s12 m4">
          <Reviewcard />
        </div>
      
      </div>

      
      <Footer />
    </>
  );
}
export default home;
