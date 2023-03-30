import React from "react";
import "../styles/footer.css"

export default function Footer() {
    return (
        <div className="footerSection">
            <img src="./images/full-logo.png" alt="Full Size Logo"/>
            <div className="footerContact">
                <h5>Tess Bantock</h5>
                <h5>Certified Clinical Councellor</h5>
                <a href="mailto:ttwtherapy@gmail.com"><h5>ttwtherapy@gmail.com</h5></a>
            </div>
            <div className="footerQuote">
                <h5>"Vulnerability sounds like truth and feels like courage. Truth and courage aren’t always comfortable, but they are never weakness"</h5>
                <h6>- Brene Brown</h6>
            </div>
        </div>
    );
};