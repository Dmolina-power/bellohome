import React, { Component } from "react";
import M from "materialize-css";


export default class feature extends Component {
    componentDidMount() {
        document.querySelectorAll('.tap-target');
         M.AutoInit();
         }
         render(){
            return(
                <>
                <a id="menu" class="waves-effect waves-light btn btn-floating" ><i class="material-icons">phone</i></a>
<div class="tap-target" data-target="menu">
    <div class="tap-target-content">
      <h5>Title</h5>
      <p>A bunch of text</p>
    </div>
    </div>
    </>
            )    
} 
}