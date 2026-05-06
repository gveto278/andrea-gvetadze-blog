import { useState, useCallback, memo } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import type { NavLink as NavLinkType } from '../types';

interface HeaderProps {
  links: NavLinkType[];
}

const Header = memo(function Header({ links }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <header className="bg-white/95 dark:bg-slate-900/95 shadow-sm sticky top-0 z-50 border-b border-gray-200/50 dark:border-gray-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-indigo-600 dark:bg-indigo-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-200 dark:shadow-none group-hover:scale-105 transition-transform">
                AG
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
                AG
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent hover:underline transition-colors px-3 py-2 rounded-md font-medium"
              >
                {link.label}
              </Link>
            ))}
            <button onClick={toggleTheme} aria-label="თემის შეცვლა" className="p-2 ml-4 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-300 transition-colors focus:outline-none">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button onClick={toggleTheme} aria-label="თემის შეცვლა" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-300 transition-colors">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-600 dark:text-gray-300 hover:text-accent focus:outline-none p-2 transition-colors"
              aria-label="მენიუს გახსნა/დახურვა"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay & Drawer */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-[60] md:hidden"
            onClick={closeMenu}
          />
          <div 
            className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-slate-900 shadow-2xl z-[70] md:hidden flex flex-col"
          >
            <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center h-16">
              <span className="text-xl font-bold text-primary dark:text-indigo-400">მენიუ</span>
              <button onClick={closeMenu} aria-label="მენიუს დახურვა" className="text-gray-500 dark:text-gray-400 hover:text-red-500 focus:outline-none p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-4 py-6 flex flex-col gap-4 overflow-y-auto">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className="block px-4 py-3 rounded-xl text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-gray-100 dark:hover:border-gray-800"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </header>
  );
});

export default Header;
