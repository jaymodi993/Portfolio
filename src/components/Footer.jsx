const Footer = () => (
  <footer>
    <div className="footer-container">
      
      {/* Logo Section */}
      <div className="footer-logo">
        <a href="#home" aria-label="Back to Top">
          <img src="/img/Jay's Portfolio_transparent.png" alt="Logo" loading="lazy" />
        </a>
      </div>

      {/* Social Icons Section (Links Removed) */}
      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/jay-modi-60965519a/" target="_blank" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
        <a href="https://twitter.com/jaymodi993" target="_blank" aria-label="Twitter"><i className="fa-brands fa-x-twitter"></i></a>
        <a href="https://github.com/jaymodi993" target="_blank" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
        <a href="https://www.instagram.com/jaymodi993/" target="_blank" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
        <a href="https://wa.me/+918490093530" target="_blank" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
      </div>

    </div>

    {/* Copyright Line */}
    <div className="copyright-text">
      <p>copyright © jaymodi-portfolio.netlify.app | All rights reserved</p>
    </div>
  </footer>
);

export default Footer;