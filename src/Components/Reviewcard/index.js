import React from "react";


const Reviewcard = () => {
    return(
<div class="card horizontal">
      <div class="card-image">
        <img src="https://images.unsplash.com/photo-1553524808-eef8eb03cf29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>

    )
}

export default Reviewcard;