import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Compass, Map } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar glass-panel">
      <div className="container flex items-center justify-between">
        <Link to="/" className="brand flex items-center gap-2">
          <Map className="text-primary" size={28} />
          <span className="brand-text text-gradient">WanderVerse</span>
        </Link>
        <div className="nav-links flex gap-6">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/discover" className={`nav-link ${location.pathname === '/discover' ? 'active' : ''}`}>
            <Compass size={18} />
            Discover
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
