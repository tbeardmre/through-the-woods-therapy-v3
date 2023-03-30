import React from "react";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="homeSection">
      <div className="homeLogo">
        <img src="./images/logo.png" alt="Through The Woods Therapy Logo" />
      </div>
      <div className="homeContent">
        <h1>healing from the inside out</h1>
        <h2>because you matter</h2>
        <br />
        <br />
        <a href="contact.html">connect</a>
      </div>
    </div>
  );
}
