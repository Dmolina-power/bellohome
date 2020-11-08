import React, { Component } from "react";
import "./style.css";

export default class Footer extends Component {
 render(){
    return(
        <>
        <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Payment Options</h5>
                
                <i class="fab fa-cc-apple-pay"></i>
                <i class="fab fa-google-wallet"></i>
                <i class="fab fa-cc-paypal"></i>
                <i class="far fa-credit-card"></i>
                <i class="fas fa-money-bill-alt"></i>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Social Media</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a class="grey-text text-lighten-3" href="#!"><i class="fab fa-twitter"></i></a></li>
                  <li><a class="grey-text text-lighten-3" href="#!"><i class="fab fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2020 Copyright Bello Home & Landscaping
            </div>
          </div>
        </footer>
        </>
    )
    }
}
