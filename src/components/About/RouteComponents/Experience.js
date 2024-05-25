import React from 'react'

import '../../../styles/About/Route/Experience.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const Experience = () => {
    return (
      <>
        <div className="experience">
          <div className="experience__container">
            <div className="experience__header">
              <h2 className="experience__number">
                0<span>2</span>
              </h2>
              <h1 data-aos="fade-down" data-aos-offset="0">
                E<span>xperience</span>.
              </h1>
            </div>
            <div className="experience__description">
              <div className="experience__main-box">
                <div className="experience__box">
                  <h2>MARN STACK DEVELOPER</h2>
                  <h3>
                    <FontAwesomeIcon
                      icon={faCalendarDays}
                      className="experience__calendar"
                    />
                    &nbsp; &nbsp;03/2024 - 05/2024
                  </h3>
                  <ul>
                    <p>Responsible for -</p>
                    <li data-aos="fade-right" data-aos-delay="200">
                      <span>
                        Developing multiple highly responsive and adaptive
                        website using React and Vue
                      </span>
                    </li>
                    <li data-aos="fade-right" data-aos-delay="400">
                      <span>
                        Pioneered 100% of the development for robust web
                        applications using the MERN stack (MongoDB, Express.js,
                        React, and Node.js), ensuring seamless functionality.
                      </span>
                    </li>
                    <li data-aos="fade-right" data-aos-delay="600">
                      <span>Building reusable code</span>
                    </li>
                  </ul>
                </div>

                {/* You can put this repeated code as a child component similar to internship.js  */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Experience