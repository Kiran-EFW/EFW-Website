import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar_component w-nav" role="banner">
      <div className="navbar_container">
        <Link to="/" className="navbar_logo-link w-nav-brand">
          <img
            width="230"
            height="Auto"
            alt="Energy Future World Logo"
            loading="lazy"
            src="/images/Logo-bg-removed.png"
            className="navbar_logo"
          />
        </Link>
        <nav role="navigation" className="navbar_menu is-page-height-tablet w-nav-menu">
          <a href="#How-it-works" className="navbar_link w-nav-link">How it works</a>
          <Link to="/efwt" className="navbar_link w-nav-link">EFWT</Link>
          <Link to="/projects" className="navbar_link w-nav-link">Projects</Link>
          <a href="https://docs.energyfuture.world/" target="_blank" className="navbar_link w-nav-link" rel="noopener">Docs</a>
          <Link to="/faqs" className="navbar_link w-nav-link">FAQs</Link>
          <div className="navbar_menu-buttons">
            <Button className="button is-nav w-button">
              EFWT Presale Live Now
            </Button>
          </div>
        </nav>
        <div className="navbar_menu-button w-nav-button" onClick={toggleMenu}>
          <div className="menu-icon">
            <div className="menu-icon_line-top"></div>
            <div className="menu-icon_line-middle">
              <div className="menu-icon_line-middle-inner"></div>
            </div>
            <div className="menu-icon_line-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
