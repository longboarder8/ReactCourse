// uses React features
import React from "react";
// renders React into browser
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import Bootstrap's CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);