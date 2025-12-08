import React from 'react';
// 1. Import the icons you want to use
import { FaCode, FaMobileAlt, FaPalette } from 'react-icons/fa';

const Services = () => {
  // 2. Define your services data here
  const services = [
    {
      id: 1,
      icon: <FaCode />,
      title: "Web Development",
      description: "Building responsive and high-performance websites using modern technologies like React and Tailwind."
    },
    {
      id: 2,
      icon: <FaMobileAlt />,
      title: "App Development",
      description: "Creating functional and user-friendly mobile applications for Android and iOS."
    },
    {
      id: 3,
      icon: <FaPalette />,
      title: "UI/UX Design",
      description: "Designing intuitive user interfaces and seamless user experiences for digital products."
    }
  ];

  return (
    <div className="services-section" id="services">
      <p className="section-title">What I Provide</p>
    <h2 className="section-heading">My Services</h2>
      
      <div className="services-container">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="icon-wrapper">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;