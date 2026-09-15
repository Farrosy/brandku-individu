import { useState } from 'react';
import { Link } from 'react-router';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md flex items-center justify-between px-6 md:px-16 py-6 shadow-sm">
      <h1 className="text-3xl font-bold text-pink-500">Brandku</h1>

      <button 
        className="md:hidden text-2xl focus:outline-none" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      <nav className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent p-6 md:p-0 shadow-md md:shadow-none gap-6 md:gap-8 font-medium text-slate-600`}>
        <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-pink-500">Beranda</Link>
        <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-pink-500">About</Link>
        <Link to="/pricing" onClick={() => setIsOpen(false)} className="hover:text-pink-500">Pricing</Link>
      </nav>
    </header>
  );
};

export default Header;