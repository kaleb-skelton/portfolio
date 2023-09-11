import React from 'react';
import './personal_info.css';

function personal_info() {
    return (
        <section id="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Me</h2>
              <p>Hello, I'm Kaleb Skelton, a passionate junior web developer based in DFW. I have a strong enthusiasm for creating engaging and user-friendly websites that combine both form and function. My journey in the world of web development began with a fascination for turning ideas into digital realities.</p>
              <p>My skills range from front-end development using HTML, CSS, and JavaScript to back-end development with technologies like Node.js and Express. I'm also experienced in database management, with proficiency in SQL and NoSQL databases.</p>
              <p>Throughout my learning journey, I've had the opportunity to work on a variety of exciting projects, each challenging me to learn and grow. I'm a firm believer in continuous learning, and I'm always eager to explore the latest trends and technologies in the web development landscape.</p>
              <p>When I'm not coding, you can probably find me underneath my truck, fixing something that probably wasn't broke to begin with, or at a lake fishing.</p>
            </div>
            <div className="about-image">
              <img src="./images/profile.jpg" alt="Your Name"></img>
            </div>
          </div>
        </div>
      </section>
      
    );
}

export default personal_info;