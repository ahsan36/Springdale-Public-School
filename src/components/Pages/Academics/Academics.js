import React from 'react';
import './Academics.css';

const curriculum = {
  primary: ['English', 'Mathematics', 'Science', 'Social Studies', 'Art', 'Physical Education'],
  secondary: ['English', 'Mathematics', 'Science (Physics, Chemistry, Biology)', 'Social Studies', 'Computer Science', 'Physical Education', 'Art'],
  seniorSecondary: {
    science: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'Computer Science', 'English'],
    commerce: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics', 'English']
  }
};

const teachingMethodologies = "We use a blend of traditional and modern teaching techniques to cater to different learning styles.";

const educationalResources = "Digital classrooms, interactive learning modules, and access to online educational platforms.";

function Academics() {
  return (
    <div className="academics">
      <header className="academics-header">
        <h1>Academics</h1>
        <p>Explore the comprehensive curriculum and innovative teaching methodologies at Springdale Public School.</p>
      </header>

      <section className="curriculum-section">
        <h2>Curriculum</h2>
        
        <div className="curriculum-grid">
          <div className="curriculum-item">
            <h3>Primary (Grades 1-5)</h3>
            
            <ul>
              {curriculum.primary.map((subject, index) => (
                <li key={index}>{subject}</li>
              ))}
            </ul>
          </div>

          <div className="curriculum-item">
            <h3>Secondary (Grades 6-10)</h3>
            <ul>
              {curriculum.secondary.map((subject, index) => (
                <li key={index}>{subject}</li>
              ))}
            </ul>
          </div>
          <div className="curriculum-item">
            <h3>Senior Secondary (Grades 11-12)</h3>
            <h4>Science Stream</h4>
            <ul>
              {curriculum.seniorSecondary.science.map((subject, index) => (
                <li key={index}>{subject}</li>
              ))}
            </ul>
            <h4>Commerce Stream</h4>
            <ul>
              {curriculum.seniorSecondary.commerce.map((subject, index) => (
                <li key={index}>{subject}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="methodologies-section">
        <h2>Teaching Methodologies</h2>
        <p>{teachingMethodologies}</p>
      </section>

      <section className="resources-section">
        <h2>Educational Resources</h2>
        <p>{educationalResources}</p>
      </section>
    </div>
  );
}

export default Academics;
