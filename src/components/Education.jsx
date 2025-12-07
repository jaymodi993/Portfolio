const Education = () => (
  <section id="education" data-aos="fade-up">
    <p className="section-title">What I Study</p>
    <h2 className="section-heading">Education</h2>
    <div className="education-content">
      <div className="education-item" data-aos="flip-left" data-aos-delay="100">
        <img src="/img/t.jpeg" alt="Polytechnic" loading="lazy" />
        <h3>Diploma in Engineering (2019-2022)</h3>
        <p>Diploma in Computer Engineering at Tolani F. G. Polytechnic Adipur</p>
      </div>
      <div className="education-item" data-aos="flip-right" data-aos-delay="300">
        <img src="/img/sr.jpg" alt="College" loading="lazy" />
        <h3>Bachelor of Engineering (2022-2025)</h3>
        <p>Bachelor of Computer Engineering at Smt. S. R. Patel Engineering College Unjha</p>
      </div>
    </div>
  </section>
);
export default Education;