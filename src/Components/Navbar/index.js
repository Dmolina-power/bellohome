import React from "react";
import { auth } from "../../fire";
import UserInfo from "../UserInfo/index";
import logo from "../../images/theme2.jpg";
import "./style.css";


const Navbar = ({ handleLogout }) => {
  

  return (
    <section className="home">
      <nav class="navbar navbar-expand-lg navbar-light bg-light position-sticky">
        <a class="navbar-brand" href="/home">
        <img src={logo} width="160" height="60" alt="" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/services">
                Services<span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/payment">
                Payment Options
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/promotions">
                Promotions
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/why">
               Why Choose Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/team">
               Our Team
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">
               Contact Us
              </a>
            </li>
          </ul>
          
          <UserInfo />

        <button className="exit"
          onClick={() => {
              auth.signOut();
            }}
            >
          Sign out
        </button>
            </div>
      </nav>
    </section>
  );
};

export default Navbar;
