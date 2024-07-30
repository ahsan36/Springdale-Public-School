import React from 'react';
import './ContactUs.css';
import ContactForm from './ContactForm';

function ContactUs() {
  return (
    <div className="contact-us">
      <header className="contact-us-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Reach out to us using the form below or through our contact information.</p>
      </header>

      <section className="contact-details">
        <h2>Our Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0860578910275!2d-122.47111448469264!3d37.77397227975833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858187c3a2ffed%3A0x31496f7cdb2b69e0!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1621083984673!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="School Location"
        ></iframe>

        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Address:</strong> Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
          <p><strong>Phone:</strong> +91 (123) 456-7890</p>
          <p><strong>Email:</strong> info@springdale.edu</p>
        </div>
      </section>

      <section className="contact-form-section">
        <ContactForm />
      </section>
    </div>
  );
}

export default ContactUs;
