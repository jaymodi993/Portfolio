const Footer = () => (
  <footer>
    <div className="footer-container">
      <div className="footer-logo">
        <a href="#home" aria-label="Back to Top">
          <img src="/img/Jay's Portfolio_transparent.png" alt="Logo" loading="lazy" />
        </a>
      </div>
      <div className="footer-links-wrapper">
        <ul className="footer-list">
          <li><a href="#home"><i className="fa-solid fa-house"></i> Home</a></li>
          <li><a href="#aboutme"><i className="fa-solid fa-user"></i> About</a></li>
          <li><a href="#service"><i className="fa-solid fa-briefcase"></i> Services</a></li>
          <li><a href="#project"><i className="fa-solid fa-code"></i> Projects</a></li>
        </ul>
        <ul className="footer-list">
          <li><a href="https://www.linkedin.com/in/jay-modi-60965519a/" target="_blank"><i className="fa-brands fa-linkedin"></i> Linkedin</a></li>
          <li><a href="https://twitter.com/jaymodi993" target="_blank"><i className="fa-brands fa-x-twitter"></i> Twitter</a></li>
          <li><a href="https://github.com/jaymodi993" target="_blank"><i className="fa-brands fa-github"></i> Github</a></li>
          <li><a href="https://wa.me/+918490093530" target="_blank"><i className="fa-brands fa-whatsapp"></i> Whatsapp</a></li>
          <li><a href="https://www.instagram.com/jaymodi993/" target="_blank"><i className="fa-brands fa-instagram"></i> Instagram</a></li>
        </ul>
      </div>
    </div>
    <div className="copyright-text">
      <p>copyright © jaymodi-portfolio.netlify.app | All right reserved</p>
    </div>
  </footer>
);
export default Footer;