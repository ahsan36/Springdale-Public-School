import React from 'react';
import './Faculty.css';

const facultyMembers = [
  { name: 'John Doe', position: 'Principal', qualification: 'M.Ed', experience: '20 years', image: 'https://tinyurl.com/23b63jqx' },
  { name: 'Jane Smith', position: 'Vice Principal', qualification: 'M.Sc. in Physics', experience: '15 years', image: 'https://tinyurl.com/2caxdqkj' },
  { name: 'Emily Johnson', position: 'English Teacher', qualification: 'M.A. in English', experience: '10 years', image: 'https://tinyurl.com/288y8lca' },
  { name: 'Michael Brown', position: 'Mathematics Teacher', qualification: 'M.Sc. in Mathematics', experience: '8 years', image: 'https://tinyurl.com/25nw9a9c' },
  { name: 'Sophia Davis', position: 'Science Teacher', qualification: 'M.Sc. in Chemistry', experience: '12 years', image: 'https://tinyurl.com/2cwm784f' },
];

function Faculty() {
  return (
    <div className="faculty">
      <header className="faculty-header">
        <h1>Meet Our Faculty</h1>
        <p>Our dedicated team of educators is committed to providing the best learning experience for our students.</p>
      </header>

      <section className="faculty-section">
        <div className="faculty-grid">
          {facultyMembers.map((member, index) => (
            <div key={index} className="faculty-item">
              <img src={member.image} alt={member.name} className="faculty-image" />
              <div className="faculty-info">
                <h3>{member.name}</h3>
                <p><strong>{member.position}</strong></p>
                <p><em>{member.qualification}</em></p>
                <p>{member.experience} of experience</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Faculty;
