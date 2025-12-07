import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "Programmer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home">
      <div className="home-content">
        <div className="home-text" data-aos="fade-right" data-aos-duration="1200">
          <h3>Hi, My Name is</h3>
          <h1>Jay Modi</h1>
          <h2>
            and I am a <span ref={el} style={{ color: '#007bff' }}></span>
          </h2>
          <div className="social-links">
            <a href="https://github.com/jaymodi993" target="_blank" rel="noreferrer" aria-label="GitHub Profile">Visit Github</a>
            <a href="https://drive.google.com/file/d/1vEZaegPyb2rUV_1pmDj2_KbG1LLEnEmo/view?usp=sharing" target="_blank" rel="noreferrer" aria-label="Download Resume">Download CV</a>
          </div>
        </div>
        <div className="home-img" data-aos="zoom-in" data-aos-duration="1200">
          <img src="/img/my.jpg" alt="Jay Modi" className="floating-img" />
        </div>
      </div>
    </section>
  );
};

export default Home;