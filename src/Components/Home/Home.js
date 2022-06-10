/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Home.css";
import myPicture from "../../Images/my-picture.png";

function Home() {
  return (
    <div className="home-container" id="home">
      <ul className="circles">
        {[...Array(10)].map((el, index) => (
          <li key={index}></li>
        ))}
      </ul>
      <div className="home-content">
        <img
          className="my-picture"
          src={myPicture}
          alt="a black and white picture of me"
          width="100"
          height="100"
        />
        <div>
          <p className="my-name">
            Hey! <br />
            My name is <span>Diny Thomas</span>.
          </p>
          <p className="my-desc">
            I'm Copenhagen based <span>Front-End Developer</span> <br />
            focusing on creating interactive and user friendly websites.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
