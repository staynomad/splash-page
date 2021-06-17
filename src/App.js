import React, { useEffect, useState } from "react";
import "./app.css";

const App = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setInterval(countdown, 1000);
    return () => {
      clearInterval(countdown);
    };
  }, []);

  const countdown = () => {
    //Get date info
    const sep1 = new Date("September 01, 2021 00:00:00").getTime();
    const currentDate = new Date().getTime();
    const gap = sep1 - currentDate;

    //Calculations
    const s = 1000;
    const m = s * 60;
    const h = m * 60;
    const d = h * 24;

    //setState
    setDays(Math.floor(gap / d));
    setHours(Math.floor((gap % d) / h));
    setMinutes(Math.floor((gap % h) / m));
    setSeconds(Math.floor((gap % m) / s));
  };

  const handleOpenSocial = (href) => {
    window.open(href, "_blank");
  };

  const handleMailTo = () => {
    window.location.href = "mailto:contact@visitnomad.com";
  };

  return (
    <div className="screen">
      <div className="header">
        <div className="logo-container">
          <img className="logo" src="/images/logo.svg" alt="nomad-logo" />
          <img
            className="logo-shadow"
            src="/images/logo.svg"
            alt="nomad-logo"
          />
        </div>
        <div className="socials-container">
          <div
            onClick={() =>
              handleOpenSocial("https://www.linkedin.com/company/vhomesgroup")
            }
            className="social-container"
          >
            <img src="/images/linkedin.svg" alt="linkedin" />
            <div className="social-shadow"></div>
          </div>
          <div
            onClick={() =>
              handleOpenSocial("https://www.instagram.com/nomadrenters/")
            }
            className="social-container"
          >
            <img src="/images/instagram.svg" alt="instagram" />
            <div className="social-shadow"></div>
          </div>
          <div
            onClick={() =>
              handleOpenSocial("https://www.facebook.com/nomadrenters/")
            }
            className="social-container"
          >
            <img
              className="facebook"
              src="/images/facebook.svg"
              alt="facebook"
            />
            <div className="social-shadow"></div>
          </div>
        </div>
      </div>
      <div className="content">
        <h1 className="title">
          Big News Coming September <p className="one">1</p>st
        </h1>
        <h2 className="subtitle">The future of flexible rentals</h2>
        <div className="timer-container">
          <div className="timer-number">
            <h3 className="timer">{days}</h3>
            <div className="timer-label">
              <h5>Days</h5>
            </div>
          </div>
          <h4 className="timer">:</h4>
          <div className="timer-number">
            <h3 className="timer">{hours}</h3>
            <div className="timer-label">
              <h5>Hours</h5>
            </div>
          </div>
          <h4 className="timer">:</h4>
          <div className="timer-number">
            <h3 className="timer">{minutes}</h3>
            <div className="timer-label">
              <h5>Minutes</h5>
            </div>
          </div>
          <h4 className="timer">:</h4>
          <div className="timer-number">
            <h3 className="timer">{seconds}</h3>
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
      <img
        className="illustration"
        src="/images/illustration.svg"
        alt="illustration"
      />
      <h6 className="legal">© 2021 NomΛd - All Rights Reserved.</h6>
    </div>
  );
};

export default App;
