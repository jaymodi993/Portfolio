import React from 'react';

const Experience = () => (
  <section id="experience" data-aos="fade-up">
    <p className="section-title">My Journey</p>
    <h2 className="section-heading">Experience</h2>
    <div className="experience-content">
      
      {/* Role 1: Augmetic Infinite LLP */}
      <div className="experience-item" data-aos="flip-left" data-aos-delay="100">
        <h3>ReactJs Developer</h3>
        <h4>Augmetic Infinite LLP | Jun 2024 - Jul 2024</h4>
        <p className="location">Ahmedabad, Gujarat, India</p>
        <p><strong>Project: Hotel Guest Management System</strong></p>
        <ul>
          <li>Designed a software application to streamline hotel operations, managing guest details, bookings, and check-in/check-out processes.</li>
          <li>Built an admin interface for hotel staff to efficiently manage guest reservations, room assignments, and billing.</li>
          <li>Implemented features like guest profile management, real-time room availability, and integrated payment processing.</li>
        </ul>
        {/* Placeholder for Certificate if needed */}
        {/* <a href="#" className="btn-certificate">View Certificate</a> */}
      </div>

      {/* Role 2: Sapphire Software Solution */}
      <div className="experience-item" data-aos="flip-right" data-aos-delay="300">
        <h3>Software Support Engineer</h3>
        <h4>Sapphire Software Solution | Jul 2025 - Present</h4>
        <p>
          Joined as a Software Support Engineer. Responsible for maintaining software stability, troubleshooting technical issues, and ensuring smooth operation for clients.
        </p>
      </div>

    </div>
  </section>
);

export default Experience;