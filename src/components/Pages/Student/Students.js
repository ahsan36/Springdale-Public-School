import React from 'react';
import './Students.css';

const activities = [
  { name: 'Music', icon: 'https://tinyurl.com/28w8xfra' },
  { name: 'Dance', icon: 'https://tinyurl.com/25z3w7nc' },
  { name: 'Drama', icon: 'https://tinyurl.com/2c6s6e5t' },
  { name: 'Art', icon: 'https://tinyurl.com/2ymvdatq' },
  { name: 'Sports', icon: 'https://tinyurl.com/27pogzdt' },
  { name: 'Robotics', icon: 'https://tinyurl.com/2ygxd6yv' },
  { name: 'Debate Club', icon: 'https://tinyurl.com/23ulqfw5' },
  { name: 'Science Club', icon: 'https://tinyurl.com/27d8u3u9' },
];

const achievements = [
  { name: 'John Smith', description: 'National Level Math Olympiad Winner' },
  { name: 'Sarah Lee', description: 'Gold Medalist in State Swimming Championship' },
  { name: 'Tech Innovators Club', description: 'Winners of Inter-School Robotics Competition' },
];

const studentCouncil = [
  { position: 'President', name: 'Amy Parker', grade: 12 },
  { position: 'Vice President', name: 'Rajiv Mehta', grade: 11 },
  { position: 'Secretary', name: 'Lisa Wong', grade: 10 },
];

function Students() {
  return (
    <div className="students">
      <header className="students-header">
        <h1>Life at Springdale</h1>
        <p>Discover the vibrant student life at Springdale Public School.</p>
      </header>

      <section className="activities-section">
        <h2>Extracurricular Activities</h2>
        <div className="activities-grid">
          {activities.map((activity, index) => (
            <div key={index} className="activity-item">
              <img src={activity.icon} alt={activity.name} />
              <p>{activity.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="achievements-section">
        <h2>Achievements</h2>
        <ul className="achievements-list">
          {achievements.map((achievement, index) => (
            <li key={index} className="achievement-item">
              <strong>{achievement.name}</strong>: {achievement.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="student-council-section">
        <h2>Student Council</h2>
        <div className="council-grid">
          {studentCouncil.map((member, index) => (
            <div key={index} className="council-member">
              <p><strong>{member.position}</strong></p>
              <p>{member.name}</p>
              <p>Grade {member.grade}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Students;
