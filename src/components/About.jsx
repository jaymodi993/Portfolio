import { useState } from 'react';

const About = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <section id="aboutme" data-aos="fade-up">
      <p className="section-title">Who Am I</p>
      <h2 className="section-heading">About Me</h2>
      <div className="about-content">
        <p>
          Hello! I'm <strong>Jay Modi</strong>, a passionate Web Developer and Software Support Engineer based in Gujarat, India. 
          My journey in the tech world is driven by a curiosity to understand how things work and a desire to build 
          solutions that make a real difference. With a fresh perspective and a hunger to learn, I am always eager 
          to contribute my skills to innovative projects.
        </p>
        <br />
        <p>
          My fascination with development began during my college days when I built a 
          <strong> Hospital Management System</strong>. That project sparked a fire in me to master the web. 
          Since then, I have honed my skills in <strong>HTML, CSS, JavaScript, and React.js</strong>, 
          constantly pushing myself to learn new frameworks and best practices.
        </p>

        {/* The "Read More" Content Section */}
        {readMore && (
          <>
            <br />
            <p className="fade-in">
              I hold a <strong>Diploma in Computer Engineering</strong> from Tolani F. G. Polytechnic and am currently 
              pursuing my <strong>Bachelor of Engineering</strong> at Smt. S. R. Patel Engineering College. 
              Beyond my studies, I have gained practical industry experience working as a <strong>ReactJs Developer</strong> 
              at <em>Augmetic Infinite LLP</em>, where I developed complex admin interfaces, and currently, I serve as a 
              <strong> Software Support Engineer</strong> at <em>Sapphire Software Solutions</em>.
            </p>
            <br />
            <p className="fade-in">
              What truly drives me is the opportunity to solve complex problems and create seamless user experiences. 
              I thrive in collaborative environments where I can brainstorm ideas and turn them into tangible, 
              high-quality software. Thank you for visiting my portfolio—I look forward to connecting with you!
            </p>
          </>
        )}

        <br />
        
        {/* Toggle Button */}
        <button 
          onClick={() => setReadMore(!readMore)} 
          className="read-more-btn"
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '10px',
            fontSize: '1rem',
            transition: 'background-color 0.3s'
          }}
        >
          {readMore ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </section>
  );
};

export default About;