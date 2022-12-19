import React from "react";
import "./style.css";
// import Logo from "./img/logo.png";

const App = () => {
  return (
    // header section
    <header className="header">
      <div className="logo">
        <img
          src="logo.png"
          alt="logo
        "
        />
        <h1>Facts Sites!</h1>
      </div>

      <button className="btn btn-large btn-open">Share a fact</button>
    </header>
  );
};

export default App;
