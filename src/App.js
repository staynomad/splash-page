import React from "react";
import "./app.css";

const App = () => {
  const handleMailTo = () => {
    window.location.href = "mailto:contact@visitnomad.com";
  };

  return (
    <div className="screen">
      <div className="content">
        <h1 className="title">
          Big News Coming September <p className="one">1</p>st
        </h1>
        <h2 className="subtitle">The future of flexible rentals</h2>
        <div className="timer-container">
          <div className="timer-number">
            <h3 className="timer">00</h3>
            <div className="timer-label">
              <h5>Days</h5>
            </div>
          </div>
          <h4 className="timer">:</h4>
          <div className="timer-number">
            <h3 className="timer">00</h3>
            <div className="timer-label">
              <h5>Hours</h5>
            </div>
          </div>
          <h4 className="timer">:</h4>
          <div className="timer-number">
            <h3 className="timer">00</h3>
            <div className="timer-label">
              <h5>Minutes</h5>
            </div>
          </div>
          <h4 className="timer">:</h4>
          <div className="timer-number">
            <h3 className="timer">00</h3>
            <div className="timer-label">
              <h5>Seconds</h5>
            </div>
          </div>
        </div>
        <div onClick={handleMailTo} className="contact-btn">
          <div className="contact-btn-shadow"></div>
          <h6>Contact Us</h6>
        </div>
      </div>
    </div>
  );
};

export default App;
