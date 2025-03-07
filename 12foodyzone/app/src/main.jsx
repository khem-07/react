import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  *{
    box-sizing: border-box;
    margin: 0;
    pad: 0;
  }
  body{
    background-color: #000000;
    color: white;
    min-height: 100vh;
    font-family: cursive;
    cursor: pointer;

  }


`


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
