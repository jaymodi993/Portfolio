import { useEffect, useRef } from 'react';

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBars = entry.target.querySelectorAll(".skill-fill");
          progressBars.forEach(bar => {
            const value = bar.getAttribute('data-width');
            bar.style.width = value;
            bar.style.opacity = 1;
          });
        }
      });
    }, { threshold: 0.2 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="skill" data-aos="fade-up" ref={sectionRef}>
      <p className="section-title">What I Know</p>
      <h2 className="section-heading">My Skill</h2>
      <div className="skill-content">
        <div className="skill-bar">
          <span>HTML</span>
          <div className="bar">
            <div className="skill-fill" data-width="70%" style={{ width: 0, opacity: 0 }}>70%</div>
          </div>
        </div>
        <div className="skill-bar">
          <span>CSS</span>
          <div className="bar">
            <div className="skill-fill" data-width="50%" style={{ width: 0, opacity: 0 }}>50%</div>
          </div>
        </div>
        <div className="skill-bar">
          <span>JavaScript</span>
          <div className="bar">
            <div className="skill-fill" data-width="30%" style={{ width: 0, opacity: 0 }}>30%</div>
          </div>
        </div>
        <div className="skill-bar">
          <span>Bootstrap</span>
          <div className="bar">
            <div className="skill-fill" data-width="60%" style={{ width: 0, opacity: 0 }}>60%</div>
          </div>
        </div>
        <div className="skill-bar">
          <span>SQL</span>
          <div className="bar">
            <div className="skill-fill" data-width="70%" style={{ width: 0, opacity: 0 }}>70%</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;