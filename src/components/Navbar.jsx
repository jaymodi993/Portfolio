import { useState, useEffect } from 'react';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [theme, setTheme] = useState('light');

  // Handle Theme Toggle on Load
  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      document.body.setAttribute('data-theme', currentTheme);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTheme(currentTheme);
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      document.body.removeAttribute('data-theme');
      localStorage.removeItem('theme');
      setTheme('light');
    } else {
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <a href="#home">
            <img src="/img/Jay's Portfolio_transparent.png" alt="Logo" loading="lazy" />
          </a>
        </div>
        <ul className={`nav-links ${active ? 'active' : ''}`}>
  <li><a href="#home" onClick={() => setActive(false)}>Home</a></li>
  <li><a href="#aboutme" onClick={() => setActive(false)}>About</a></li>
  <li><a href="#education" onClick={() => setActive(false)}>Education</a></li> {/* Optional: Add Education link if missing */}
  <li><a href="#experience" onClick={() => setActive(false)}>Experience</a></li> {/* <-- Add this line */}
  <li><a href="#service" onClick={() => setActive(false)}>Services</a></li>
  <li><a href="#project" onClick={() => setActive(false)}>Projects</a></li>
  <li><a href="#contact" onClick={() => setActive(false)}>Contact-Me</a></li>
</ul>
        <button
          className="theme-toggle-btn"
          id="theme-toggle"
          aria-label="Toggle Dark Mode"
          onClick={toggleTheme}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <div 
          className={`menu-btn ${active ? 'active' : ''}`} 
          role="button" 
          aria-label="Open Menu"
          onClick={() => setActive(!active)}
        >
          &#9776;
        </div>
      </nav>
    </header>
  );
};

export default Navbar;