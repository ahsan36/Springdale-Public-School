import React from 'react';
import './Admissions.css';
import AdmissionsForm from './AdmissionForm';

function Admissions() {
  return (
    <div className="admissions">
      <header className="admissions-header">
        <h1>Admissions</h1>
        <p>Welcome to the Admissions section of Springdale Public School. Here you will find all the information you need to enroll your child at our school.</p>
      </header>

      <section className="admissions-process">
        <h2>Admission Process</h2>
        <p>Our admission process is designed to ensure a smooth and transparent experience for parents and students. Follow the steps below to apply for admission:</p>
        <ol>
          <li>Fill the admission from the below.</li>
          <li>Fill out the form with the required information.</li>
          <li>Submit the completed form along with the required documents at the school office.</li>
        </ol>
      </section>
      
        <AdmissionsForm />

      <section className="admissions-criteria">
        <h2>Admission Criteria</h2>
        <p>Admission is based on merit and the availability of seats. Entrance tests may be conducted for certain grades. Please ensure you meet the following criteria:</p>
        <ul>
          <li>Completed admission form</li>
          <li>Birth certificate or proof of age</li>
          <li>Previous school records (if applicable)</li>
          <li>Proof of residence</li>
        </ul>
      </section>

      <section className="important-dates">
        <h2>Important Dates</h2>
        <ul>
          <li><strong>Admission Form Availability:</strong> March 1st</li>
          <li><strong>Last Date for Submission:</strong> March 31st</li>
          <li><strong>Entrance Test:</strong> April 15th</li>
          <li><strong>Announcement of Results:</strong> April 30th</li>
        </ul>
      </section>

      <section className="contact-info">
        <h2>Need Help?</h2>
        <p>If you have any questions or need assistance with the admission process, please contact us:</p>
        <p><strong>Phone:</strong> +91 (123) 456-7890</p>
        <p><strong>Email:</strong> admissions@springdale.edu</p>
      </section>
    </div>
  );
}

export default Admissions;
