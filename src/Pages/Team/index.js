import React from "react";
import Martha from "../../images/Martha.JPG";
import Daniel from "../../images/daniel.jpg";
import Familia from "../../images/familia.jpg";
import Manuel from "../../images/manuel.jpg";
import "./style.css";

function team() {
  return (
    <>
      <div class="jumbotron3 jumbotron-fluid text-center">
        <div class="container">
          <h1 class="display-4">Our Team</h1>
        </div>
      </div>
      <div class="card mb-3">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src={Familia} class="card-img" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Perez-Power Family</h5>
        <p class="card-text">Administrators and Creators</p>
      </div>
    </div>
  </div>
</div>
<div class="card mb-3">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src={Daniel} class="card-img card2" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Daniel Molina-Power</h5>
        <p class="card-text"> Web Developer/App Developer</p>
      </div>
    </div>
  </div>
</div>
<div class="card mb-3">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src={Martha} class="card-img" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Martha</h5>
        <p class="card-text">Customer Service</p>
      </div>
    </div>
  </div>
</div>
<div class="card mb-3">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src={Manuel} class="card-img" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Manuel</h5>
        <p class="card-text">Manager of Operations</p>
      </div>
    </div>
  </div>
</div>
<div class="card mb-3">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="..." class="card-img" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Mower1</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
<div class="card mb-3">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="..." class="card-img" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Mower2</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    </>
  );
}

export default team;
