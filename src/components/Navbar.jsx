import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        Vaibhav<span>.</span>
      </div>

      {/* Desktop + Mobile Menu */}
      <div className={`nlinks ${menuOpen ? "active" : ""}`}>
        <a href="#hero-section" onClick={() => setMenuOpen(false)}>
          Home
        </a>
        <a href="#about-section" onClick={() => setMenuOpen(false)}>
          About
        </a>
        <a href="#skills-section" onClick={() => setMenuOpen(false)}>
          Skills
        </a>
        <a href="#experience-section" onClick={() => setMenuOpen(false)}>
          Experience
        </a>
        <a href="#projects-section" onClick={() => setMenuOpen(false)}>
          Projects
        </a>
        <a href="#contact-form" onClick={() => setMenuOpen(false)}>
          Contact
        </a>

        <button className="ncta mobile-btn">Hire Me</button>
      </div>

      {/* Desktop Button */}
      <button className="ncta desktop-btn">Hire Me</button>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;