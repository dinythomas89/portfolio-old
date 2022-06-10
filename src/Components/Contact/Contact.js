import React from "react";
import "./Contact.css";
import { FiMail } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { TiArrowUpThick } from "react-icons/ti";

function Contact() {
  return (
    <div className="contact-container" id="contact">
      <h2>Contact Me</h2>
      <p className="contact-desc">
        I will love to hear from you, whether it's a project, job opportunity or
        just a chat.
        <br /> Feel free to contact me.
      </p>
      <div className="contact-info">
        <a
          href="mailto:dinythomas89@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FiMail style={{ color: "white" }} />
          <p>Mail me</p>
        </a>
        <a
          href="https://www.linkedin.com/in/diny-thomas-a148b716b/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin style={{ color: "white" }} />
          <p>Linkedin</p>
        </a>
      </div>
      <div className="back-to-top">
        <a href="#header">Back to top</a>
        <TiArrowUpThick />
      </div>
    </div>
  );
}

export default Contact;
