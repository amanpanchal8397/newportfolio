import React from "react";
import { Link } from "react-router-dom";

import "../../styles/About/About.scss";

const About = () => {

  return (
    <>
      <div className="about" id="about">
        <div className="about__container">
          <div className="about__header" id="about__heading">
            <h1 data-aos="fade-down" data-aos-delay="0" data-aos-offset="20">
              <span
                data-aos="fade-down"
                data-aos-delay="0"
                data-aos-offset="200"
              >
                A
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-offset="200"
              >
                B
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-offset="200"
              >
                O
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="600"
                data-aos-offset="200"
              >
                U
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="800"
                data-aos-offset="200"
              >
                T
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="1000"
                data-aos-offset="200"
              >
                .
              </span>
            </h1>
            <p></p>
          </div>

          <div className="about__details-container">
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="0"
              data-aos-delay="0"
              data-aos-once="true"
            >
              <Link to="/about/intro">
                <h1>
                  0<span>1</span>
                </h1>
                <h2>
                  H<span>ello,</span>
                </h2>
                <p>
                  I am <span>AMAN.</span> <br /> SOFTWARE ENGINEER I'm a
                  passionate and responsible software engineer specializing in
                  the MERN stack, with approx 6 months of experience. Skilled in
                  developing highly responsive websites  with
                  elegant and efficient code, I excel in creating seamless user
                  experiences using MongoDB, Express.js, React, and Node.js.
                </p>
              </Link>
            </div>
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="-180"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <Link to="/about/experience">
                <h1>
                  0<span>2</span>
                </h1>
                <h2>
                  E<span>xperience</span>
                </h2>
                <p>
                  <span>6 month of experience.</span>
                  <br />I have over 6 MONTHS of experience in developing highly
                  responsive websites using the MERN stack (MongoDB, Express.js,
                  React.js, and Node.js). My expertise lies in building dynamic
                  and interactive frontends with React.js, alongside a solid
                  understanding of backend development with Node.js and
                  Express.js, and managing databases with MongoDB.
                </p>
              </Link>
            </div>
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="50"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <Link to="/about/internships">
                <h1>
                  0<span>3</span>
                </h1>
                <h2>
                  I<span>nternships</span>
                </h2>
                <p>
                  <span>Interned at -</span> <br />
                </p>
                <ul>
                  <li>
                    <span>HUBX.AI</span> - SDE INTERN{" "}
                  </li>
                </ul>
              </Link>
            </div>
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="-180"
              data-aos-delay="700"
              data-aos-once="true"
            >
              <Link to="/about/graduation">
                <h1>
                  0<span>4</span>
                </h1>
                <h2>
                  E<span>ngineering</span>
                </h2>
                <p>
                  <span>MDU ROHTAK - 2020-2024</span>
                  <br />I pursued a B.Tech degree in Computer Science
                  Engineering from MDU, gaining comprehensive knowledge and
                  practical skills in software development.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
