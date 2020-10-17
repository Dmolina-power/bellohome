import React, { useContext } from "react";
import Application from "./Components/Application/index";
import UserProvider from "./Providers/UserProvider";

function App() {
  
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}

export default App;