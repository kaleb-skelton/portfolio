import './personal_info.css';
import Resume from '../assets/Resume.pdf';

function personal_info() {
    return (
      
        <section id="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Me</h2>
              <p>Hello, I'm Kaleb Skelton, an enthusiastic junior web developer based in DFW. I have a passion for creating engaging online experiences. When I'm not coding, I cherish life's moments with my wonderful wife, Ella. Together, we share a deep appreciation for technology and exploring the world around us.</p>
              <p>My journey into technology began at the age of 12 when I delved into the world of Arduino projects. This early fascination ignited my passion for all things tech-related and set me on a path towards web development.</p>
              <p>I've dedicated myself to honing my skills in creating responsive and user-friendly websites. I thrive on transforming ideas into reality and take pride in writing efficient code and designing intuitive interfaces.</p>
              <p>Outside of work, you'll often find me embarking on adventures to new destinations with Ella, experimenting with delicious recipes, or casting a line while fishing. I believe in the constant evolution of skills, both personally and professionally.</p>
              <p>I'm currently seeking opportunities to contribute my enthusiasm and knowledge as a junior web developer. If you're looking for a dedicated team member who is eager to learn and grow, please don't hesitate to reach out. Let's create exceptional web experiences together!</p>
            <a href={Resume} download="MyResume" target="_blank">
            <button className="btn-res">Download Resume</button>
            </a>
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