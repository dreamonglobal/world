import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';

export const Navigation = () => {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return `${isActive ? 'text-red-500' : 'text-white'} hover:text-gray-200 transition`;
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-10 py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-6">
          <Link to="/" className={getLinkClass('/')}>Home</Link>
          <Link to="/blog" className={getLinkClass('/blog')}>Blog</Link>
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
      </div>
    </nav>
  );
};