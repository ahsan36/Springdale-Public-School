import React from 'react';
import './AboutUs.css';
import principal from'../../../images/principal.jpeg'

function AboutUs() {
  return (
    <div className="about-us">
      <header className="about-us-header">
        <h1>About Springdale Public School</h1>
        <p>Learn more about our history, vision, mission, and values.</p>
      </header>

      <section className="about-section">
        <h2>Our History</h2>
        <p>Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.</p>
      </section>

      <section className="about-section">
        <h2>Vision & Mission</h2>
        <p><strong>Vision:</strong> To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
        <p><strong>Mission:</strong> To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
      </section>

      <section className="about-section principal-message">
        <h2>Message from the Principal</h2>
        <img src={principal} alt="Principal" className="principal-img" />
        <p>At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.</p>
      </section>

      <section className="about-section">
        <h2>Infrastructure and Facilities</h2>
        <ul>
          <li>State-of-the-art science and computer labs</li>
          <li>Spacious and well-equipped classrooms</li>
          <li>Library with a vast collection of books and digital resources</li>
          <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
        </ul>
      </section>
    </div>
  );
}

export default AboutUs;
