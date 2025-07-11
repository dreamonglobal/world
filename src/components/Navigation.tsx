import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return `${isActive ? 'text-red-500' : 'text-white'} hover:text-gray-200 transition`;
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-10 py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Logo />
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className={`${getLinkClass('/')} hidden md:inline`}
          >
            Home
          </Link>
          <Link to="/blog" className={getLinkClass('/blog')}>Blog</Link>
          <Link to="/campaigns" className={getLinkClass('/campaigns')}>Campaigns</Link>
          <div className="flex items-center gap-4">
            <Link 
              to="/donate"
              className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-red-600 hover:to-pink-600 transition shadow-lg"
            >
              Donate
            </Link>
            <Link 
              to="/contact"
              className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-900 shadow-lg py-6 z-20 animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col gap-6">
            <Link to="/" className={getLinkClass('/')} onClick={() => setMobileOpen(false)}>Home</Link>
            <Link to="/blog" className={getLinkClass('/blog')} onClick={() => setMobileOpen(false)}>Blog</Link>
            <Link to="/campaigns" className={getLinkClass('/campaigns')} onClick={() => setMobileOpen(false)}>Campaigns</Link>
            <Link to="/donate" className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-red-600 hover:to-pink-600 transition shadow-lg" onClick={() => setMobileOpen(false)}>Donate</Link>
            <Link to="/contact" className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition" onClick={() => setMobileOpen(false)}>Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};