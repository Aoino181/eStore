import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./componenst/AppRouter";

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
} 

export default App;
