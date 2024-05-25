import React from 'react'

import '../../../styles/About/Route/Intro.scss'
const Intro = () => {
    return (
      <>
        <div className="about-intro">
          <div className="about-intro__container">
            <div className="about-intro__header">
              <h2 className="about-intro__number">
                0<span>1</span>
              </h2>
              <h1 data-aos="fade-down" data-aos-offset="0">
                H<span>ello</span>.
              </h1>
            </div>
            <div className="about-intro__description">
              I'm a passionate and responsible software engineer specializing in
              the <span>MERN stack</span>, with approx 6 months of experience.
              Skilled in developing highly responsive websites with elegant and
              efficient code, I excel in creating seamless user experiences
              using MongoDB, Express.js, React, and Node.js. In the online MERN
              stack, I harness the power of MongoDB for robust database
              management, Express.js for streamlined server-side development,
              React for dynamic and interactive user interfaces, and Node.js for
              scalable and efficient backend operations. With this comprehensive
              skill set, I deliver modern, feature-rich online platforms that
              meet the demands of today's digital landscape.
              <div className="about-intro__emoji">:&nbsp;)</div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Intro
