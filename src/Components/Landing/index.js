import React from "react";
import { Link } from "@reach/router";
import "./style.css";

const Landing = () => {
    return(
<div class="jumbotron jumbotron-fluid text-white text-center">
  <div class="container">
    <h1 class="display-4">Bello home & Landscaping</h1>
    <p class="lead">Schedule your cut Today!</p>
    <Link  className="signup "to="signup">
            Sign up here
          </Link>{" "}
  </div>
</div>

    )
}

export default Landing;







