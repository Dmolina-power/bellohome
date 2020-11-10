import React, { Component } from "react";
import M from "materialize-css";
import "./style.css";

export default class Homecard extends Component {
  componentDidMount() {
    document.querySelectorAll('.tap-target');
     M.AutoInit();
     }
     render(){
  return(
        <>
<div class="card large">
        <div class="card-image">
          <img src="https://images.unsplash.com/photo-1567459169668-95d355371bda?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
          <span class="card-title">Schedule your Cut Today!</span>
        </div>
        <div class="card-tabs">
      <ul class="tabs tabs-fixed-width">
        <li class="tab"><a class="active" href="#test4">Why</a></li>
        <li class="tab"><a  href="#test5">Choose</a></li>
        <li class="tab"><a href="#test6">Us</a></li>
      </ul>
    </div>
    <div class="card-content grey lighten-4">
      <div id="test4"><p>In a changing world, where technology has become a must, the majority of Landscapings companies have not seen the necessity to evolve. Bello homes & Landscaping believes that giving our clients smart features that make their lives better, is not a want, but our mission. </p></div>
      <div id="test5"><p>We have created an unique system that allows you to have full access over not only the schedule of your Landscaping care, but also give you a range of payments options: Cash and checks will still be available as a form of payment.</p></div>
      <div id="test6"><p>Credit/Debit,Paypal,Applepay and Google Wallet will also be available at no additional charge.Furthermore, our professional Team, wil do a quality job with affordables prices, and many discounts/promotions, that will tell you how much we value our customers.</p>
      </div>
    </div>
        <div class="card-action center">
          <a href="/schedule">SCHEDULE NOW</a>
        </div>
      </div>
    
  
  
  </>
    )
}
}
