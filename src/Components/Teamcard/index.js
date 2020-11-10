import React from "react";
import Martha from "../../images/Martha.JPG";
import Familia from "../../images/familia.jpg";
import Daniel from "../../images/daniel.jpg";
import "./style.css";

const Teamcard = () => {
    return(
        <>
<div class="card medium">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src={Familia}/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Perez-Power Family<i class="material-icons right">more_vert</i></span>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Administrators and Creators<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
  <div class="card medium">
  <div class="card-image waves-effect waves-block waves-light">
    <img class="activator" src={Daniel}/>
  </div>
  <div class="card-content">
    <span class="card-title activator grey-text text-darken-4">Daniel Molina-Power<i class="material-icons right">more_vert</i></span>
    <p><a href="https://danielmolinacodes.com/">www.danielmolinacodes.com</a></p>
  </div>
  <div class="card-reveal">
    <span class="card-title grey-text text-darken-4">Web Developer/App Developer<i class="material-icons right">close</i></span>
    <p>Originally raised in Miami, Growing up surrounded by the pop art culture. I have developed a deep passion for style, however, I construct my art via code. To connect my passion of creating a more beautiful world via design I have completed the Full-Stack development course via the University of Arizona. I am confidently able to create and coordinate dynamic user experiences via front end and back languages like, HTML, CSS, JavaScript, Node, and React.js. Today’s trends go mobile first, so a cohesive and responsive design is always on my mind. I am known for collaborating, working hard and getting things done. Every project is unique and I will craft your site for the target audience.</p>
  </div>
</div>
<div class="card medium">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src={Martha}/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Martha<i class="material-icons right">more_vert</i></span>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
  <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="images/office.jpg"/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Manuel<i class="material-icons right">more_vert</i></span>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
  <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="images/office.jpg"/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
</>
    )
}

export default Teamcard;