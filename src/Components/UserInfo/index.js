import React, { useContext } from "react";
import { UserContext } from "../../Providers/UserProvider";
import "./style.css";

const UserInfo = () => {
  const user = useContext(UserContext);
  const { photoURL, displayName, email } = user;
  console.log(user);

  return (
    <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row valign-wrapper">
            <div class="col s4">
              <img src={photoURL} alt="" class="circle responsive-img"/> 
            </div>
            <div class="col s8">
              <span class="black-text">
              {displayName}
              {email}
              </span>
            </div>
          </div>
        </div>
    
  );
};

export default UserInfo;