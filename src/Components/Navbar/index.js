import React, { Component } from "react";
import { auth } from "../../fire";
import { Navbar, NavItem } from "react-materialize";
import UserInfo from "../UserInfo/index";
import M from "materialize-css";

import "./style.css";

export default class header extends Component {
  componentDidUpdate() {
    document.querySelectorAll(".sidenav");
    M.AutoInit();
  }
  render() {
    return (
      <>
        <Navbar
          lignLinks="left"
          brand={
            <a className="brand-logo right" href="/">
              Bello Home & Landscaping
            </a>
          }
          id="mobile-nav"
          material-icons={<i>menu</i>}
          options={{
            draggable: true,
            edge: "left",
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true,
          }}
          sidenav={
            <ul>
              <li>
                <a href="/services">Services</a>
              </li>
              ,
              <li>
                <a href="/promotions">Promotions</a>
              </li>
              ,
              <li>
                <a href="/why">Why Choose Us</a>
              </li>
              ,
              <li>
                <a href="/team">Our Team</a>
              </li>
              ,
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              
              <UserInfo />
              <button
                className="exit"
                onClick={() => {
                  auth.signOut();
                }}
              >
                Sign out
              </button>
            </ul>
          }
        >
          <NavItem href="/services">Services</NavItem>
          <NavItem href="/contact">Contact Us</NavItem>
          <NavItem href="/team">Our Team</NavItem>
          <NavItem href="/promotions">Promotions</NavItem>
          <NavItem href="/signIn">Sign In</NavItem>
        </Navbar>
      </>
    );
  }
}
