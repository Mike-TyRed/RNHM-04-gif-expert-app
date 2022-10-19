import React from "react";
import ReactDOM from "react-dom/client";
import { GifExpertApp } from "./GifExpertApp";
import './styles.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  //Ayuda a identificar problemas en el código
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);
