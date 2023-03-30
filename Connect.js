import React from "react";
import { Form } from "./Form";
import "../styles/connect.css";

export default function Connect() {
  return (
    <div className="connectSection">
      <div className="connectContent">
        <h2>Get Connected</h2>
        <p>Please provide your name, email, and a short message</p>
        <br/><br/>
        <h3>Resources</h3>
        <div className="resourceContainer">
          <div class="resourceLinkContainer">
            <div class="resource">
              <a href="http://crisiscentre.bc.ca/">Crisis Centre BC</a>
              <a href="tel:18666613311">1 (866) 661-3311</a>
            </div>
            <br/>
            <div class="resource">
              <a href="http://interiorcrisisline.com/">Interior Crisis Line</a>
              <a href="tel:18883532273">1 (888) 353-CARE</a>
            </div>
            <br/>
            <div class="resource">
              <a href="https://kidshelpphone.ca/">Kids Help Phone</a>
              <a href="tel:18006686868">1 (800) 668-6868</a>
            </div>
          </div>
          <div class="resourceLinkContainer">
            <a href="https://crisiscentrechat.ca/">Crisis Centre Online Chat</a>
            <br/>
            <a href="https://www2.gov.bc.ca/gov/content/justice/criminal-justice/victims-of-crime/victimlinkbc">
              Victim Link
            </a>
            <br/>
            <a href="https://www.heretohelp.bc.ca/">
              Here to Help (Mental Health Resources in BC)
            </a>
            <br/>
            <a href="https://www.kamloopsy.org/vawiss.htm">
              Kamloops Womens Shelter
            </a>
          </div>
        </div>
      </div>
      <Form />
    </div>
  );
}
