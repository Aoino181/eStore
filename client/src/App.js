import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./componenst/AppRouter";
import NavBar from "./componenst/NavBar";


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  )
} 

export default App;
