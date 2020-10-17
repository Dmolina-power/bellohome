import React, {useState} from "react";
import { Link } from "@reach/router";
import { signInWithGoogle } from "../../fire";
import { auth } from "../../fire";
import Landing from "../../Components/Landing"

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
  <div class="jumbotron jumbotron-fluid text-white text-center">
  <div class="container">
    <h1 class="display-4">Bello home & Landscaping</h1>
    <p class="lead">Schedule your cut Today!</p>
    
    <section className="login">
      { <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8  md:px-8">
        {error !== null && <div className = "py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>} 
        <div className="loginContainer">
      <h1 className="signin">Sign In</h1>
          <label htmlFor="userEmail" className="block">
            Email:
          </label>
          <input
            type="email"
            name="userEmail"
            value = {email}
            placeholder="E.g: faruq123@gmail.com"
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
          <button  onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
            Sign in
          </button>
        <p className="or">or</p>
        <button className="googlebutton"
          onClick={() => {
            signInWithGoogle();
          }}
        >
          Sign in with Google
        </button>
        <p className="or">
          Don't have an account?{" "}
          <Link to="signup">
            Sign up here
          </Link>{" "}
          <br />{" "}
          <Link to="passwordReset" >
            Forgot Password?
          </Link>
        </p>
      </div>
        </div>
   }
    </section>
  </div>
</div>
    </>
   )
  
};

export default SignIn;