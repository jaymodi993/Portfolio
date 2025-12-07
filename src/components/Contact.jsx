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
        <div className="contact-info">
          <p><strong>Name:</strong> Jay Modi</p>
          <p><strong>Email:</strong> <a href="mailto:jaymodi993@gmail.com">jaymodi993@gmail.com</a></p>
          <p><strong>Address:</strong> Mundra, Gujarat, India</p>
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