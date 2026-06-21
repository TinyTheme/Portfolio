import { useEffect, useState } from 'react';
import Logo from './Logo.jsx';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      return savedTheme === 'dark';
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';

    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [isDarkMode]);

  return (
    <header className="navbar">
      <a className="navbar-logo" href="#hero" aria-label="Go to hero section">
        <Logo />
      </a>

      <div className="navbar-right">
        <nav
          className={`navbar-links ${isMenuOpen ? 'is-open' : ''}`}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          <a href="#about" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>
            Skills
          </a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contacts
          </a>
        </nav>

        <button
          className="theme-switch"
          type="button"
          aria-pressed={isDarkMode}
          aria-label="Toggle dark mode"
          onClick={() => setIsDarkMode((currentMode) => !currentMode)}
        >
          <span className="theme-switch-track">
            <span className="theme-switch-thumb" />
          </span>
        </button>

        <button
          className="menu-toggle"
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen((currentState) => !currentState)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
