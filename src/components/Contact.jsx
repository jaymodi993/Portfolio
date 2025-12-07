import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (window.Email) {
      window.Email.send({
        Host: "smtp.elasticemail.com",
        Username: "lovercomic7@gmail.com",
        Password: "6473DDD9A90E5AB3ACE74B0AB490A75125CE",
        To: "webdev.jaymodi@gmail.com",
        From: formData.email,
        Subject: formData.subject,
        Body: formData.message,
      }).then((message) => alert(message));
    } else {
      alert("SMTP Service not connected.");
    }
  };

  return (
    <section id="contact" data-aos="fade-up">
      <p className="section-title">Get In Touch</p>
      <h2 className="section-heading">Contact</h2>
      <div className="contact-content">
        
        {/* Updated Contact Info Section with Map */}
        <div className="contact-info">
          <p><strong>Name:</strong> Jay Modi</p>
          <p><strong>Email:</strong> <a href="mailto:jaymodi993@gmail.com">jaymodi993@gmail.com</a></p>
          <p><strong>Address:</strong> Mundra, Gujarat, India</p>

          <div className="map-container">
            <iframe
              title="Mundra Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58889.37703350133!2d69.68962635696547!3d22.836171924976735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39511e405d491191%3A0x62660d2d31b262a6!2sMundra%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sus!4v1709827364512!5m2!1sen!2sus"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <form className="contact-form" onSubmit={sendEmail}>
          <h4>Message</h4>
          <input type="text" id="name" placeholder="Name" required onChange={handleChange} />
          <input type="email" id="email" placeholder="Email" required onChange={handleChange} />
          <input type="text" id="subject" placeholder="Subject" onChange={handleChange} />
          <textarea id="message" placeholder="Message" onChange={handleChange}></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;