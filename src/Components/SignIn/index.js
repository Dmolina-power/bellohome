import React, {useState} from "react";
import { Link } from "@reach/router";
import { signInWithGoogle } from "../../fire";
import { auth } from "../../fire";


import "./style.css"

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const signInWithEmailAndPasswordHandler = (event,email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch(error => {
        setError("Error signing in with password and email!");
          console.error("Error signing in with password and email", error);
        });
      };
      
      const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;
        
          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
      };
   

  return (
    <>
  <div class="card">
  <img src="https://images.unsplash.com/photo-1543459176-4426b37223ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" class="card-img-top" alt="plant"/>
  <div class="card-img-overlay">
  <h1 class="display-4 text-white">Bello home & Landscaping</h1>
  <p class="lead text-white text-center">Schedule your cut Today!</p>
  </div>
  <div class="card-body">
    <h1 class="card-title text-center">Sign In</h1>
    <button class="btn facebook-btn social-btn btn-block text-white" type="button"><span><i class="fab fa-facebook-f"></i> Sign in with Facebook</span> </button>
          <button class="btn google-btn social-btn btn-block text-white" type="button"onClick={() => {
              signInWithGoogle();
            }}><span><i class="fab fa-google-plus-g"></i> Sign in with Google+</span> </button>
          <p className="or">or</p>
          <label htmlFor="userEmail" className="block">
            Email:
          </label>
          <input
            type="email"
            name="userEmail"
            value = {email}
            placeholder=" Your Email"
            id="userEmail"
            onChange = {(event) => onChangeHandler(event)}
          />
          <label htmlFor="userPassword" className="block">
            Password:
          </label>
          <input
            type="password"
            name="userPassword"
            value = {password}
            placeholder="Your Password"
            id="userPassword"
            onChange = {(event) => onChangeHandler(event)}
          />
          <button class="btn btn-success btn-block" type="submit"><i class="fas fa-sign-in-alt"onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}></i> Sign in</button>
        <p className="or">
          Don't have an account?{" "}
          <Link className="or" to="signup">
            Sign up here
          </Link>{" "}
          <br />{" "}
          <Link className="or" to="passwordReset" >
            Forgot Password?
          </Link>
        </p>

  </div>
</div>
    
    
          
      
          
  
    </>
   )
  
};

export default SignIn;