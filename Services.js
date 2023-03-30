import React from "react";
import "../styles/services.css";

export default function Services() {
    return (
        <div className="servicesSection">
            <h2>Services</h2>
            <div className="servicesContainer">
                <div className="servicesChild">
                    <h3>Talk Therapy</h3>
                    <h4>60 minutes</h4>
                    <h3>$140</h3>
                </div>
                <div className="servicesChild">
                    <h3>Nature-Based Session</h3>
                    <h4>60 minutes</h4>
                    <h3>$140</h3>
                </div>
                <div className="servicesChild">
                    <h3>EDMR</h3>
                    <h4>90 minutes</h4>
                    <h3>$180</h3>
                </div>
            </div>
        </div>
    );
};