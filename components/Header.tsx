import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Logo, ChevronDown, navigationLinks, HamburgerIcon, CloseIcon } from '../constants';
import { useAnimation } from '../hooks/useAnimation';

const Header: React.FC = () => {
  const [isDesktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileInnovationsOpen, setMobileInnovationsOpen] = useState(false);

  const dropdownRef = useRef<HTMLLIElement>(null);
  const location = useLocation();

  const { shouldRender: shouldRenderMobileMenu, animationClass: mobileMenuAnimationClass } = useAnimation({
    isMounted: isMobileMenuOpen,
    animationIn: 'animate-modal-in',
    animationOut: 'animate-modal-out',
    unmountDelay: 500,
  });

  // Close menus on click outside for desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDesktopDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  // Close all menus on route change
  useEffect(() => {
    setDesktopDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/50 backdrop-blur-md">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <Logo className="w-8 h-8 text-brand-cyan" aria-hidden="true" />
            <div className="relative">
              <span className="font-orbitron text-xl font-bold tracking-wider relative z-10 animate-glitch">SKY BLIX</span>
              <span aria-hidden="true" className="font-orbitron text-xl font-bold tracking-wider absolute top-0 left-0 text-cyan-400 opacity-80 animate-glitch-top">SKY BLIX</span>
              <span aria-hidden="true" className="font-orbitron text-xl font-bold tracking-wider absolute top-0 left-0 text-pink-500 opacity-80 animate-glitch-bottom">SKY BLIX</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8 text-lg">
              {navigationLinks.map((link) =>
                link.sublinks ? (
                  <li key={link.name} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setDesktopDropdownOpen(!isDesktopDropdownOpen)}
                      className="flex items-center gap-2 hover:text-brand-cyan transition-colors"
                      aria-haspopup="true"
                      aria-expanded={isDesktopDropdownOpen}
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isDesktopDropdownOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                    </button>
                    {isDesktopDropdownOpen && (
                      <ul className="absolute top-full left-0 mt-2 w-56 bg-brand-blue/90 backdrop-blur-lg border border-cyan-400/20 rounded-lg shadow-lg shadow-cyan-500/10">
                        {link.sublinks.map((sublink) => (
                          <li key={sublink.name}>
                            <NavLink
                              to={sublink.path}
                              className={({ isActive }) =>
                                `block px-4 py-3 text-sm hover:bg-cyan-400/10 transition-colors ${isActive ? 'text-brand-cyan' : ''}`
                              }
                            >
                              {sublink.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={link.name}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) => `hover:text-brand-cyan transition-colors ${isActive ? 'text-brand-cyan' : ''}`}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
            <Link
              to="/contact"
              className="px-6 py-2 border border-brand-cyan rounded-md text-brand-cyan font-bold hover:bg-brand-cyan/10 hover:shadow-[0_0_15px_theme(colors.brand-cyan)] transition-all"
            >
              Join Waitlist
            </Link>
          </div>
          
          {/* Mobile Navigation Trigger */}
          <button className="md:hidden text-brand-light" onClick={() => setMobileMenuOpen(true)} aria-label="Open menu">
            <HamburgerIcon className="w-6 h-6" aria-hidden="true" />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Panel */}
      {shouldRenderMobileMenu && (
        <div 
          className="fixed inset-0 z-[100] md:hidden" 
          role="dialog" 
          aria-modal="true"
        >
          {/* Overlay */}
          <div 
            className={`absolute inset-0 bg-brand-dark/80 backdrop-blur-md transition-opacity duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => setMobileMenuOpen(false)} 
            aria-hidden="true"
          ></div>

          {/* Menu Content */}
          <div className={`relative z-10 w-4/5 max-w-sm h-full bg-brand-blue/95 border-r border-cyan-400/20 p-6 flex flex-col ${mobileMenuAnimationClass}`}>
              <div className="flex justify-between items-center mb-10">
                  <Link to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                      <Logo className="w-7 h-7 text-brand-cyan" aria-hidden="true" />
                      <div className="relative">
                        <span className="font-orbitron text-lg font-bold relative z-10 animate-glitch">SKY BLIX</span>
                        <span aria-hidden="true" className="font-orbitron text-lg font-bold absolute top-0 left-0 text-cyan-400 opacity-80 animate-glitch-top">SKY BLIX</span>
                        <span aria-hidden="true" className="font-orbitron text-lg font-bold absolute top-0 left-0 text-pink-500 opacity-80 animate-glitch-bottom">SKY BLIX</span>
                      </div>
                  </Link>
                  <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                      <CloseIcon className="w-7 h-7" aria-hidden="true" />
                  </button>
              </div>

              <nav className="flex-grow">
                  <ul className="flex flex-col gap-1 text-xl">
                      {navigationLinks.map((link, index) => (
                          <li 
                              key={link.name}
                              className={`transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                              style={{ transitionDelay: `${150 + index * 75}ms` }}
                          >
                              {link.sublinks ? (
                                  <>
                                      <button
                                          onClick={() => setMobileInnovationsOpen(!isMobileInnovationsOpen)}
                                          className="w-full flex justify-between items-center py-3 hover:text-brand-cyan transition-colors"
                                          aria-expanded={isMobileInnovationsOpen}
                                      >
                                          <span>{link.name}</span>
                                          <ChevronDown className={`w-5 h-5 transition-transform ${isMobileInnovationsOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                                      </button>
                                      {isMobileInnovationsOpen && (
                                          <ul className="pl-4 pt-2 space-y-2 pb-2">
                                              {link.sublinks.map((sublink) => (
                                                  <li key={sublink.name}>
                                                      <NavLink to={sublink.path} onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `block text-lg hover:text-brand-cyan transition-colors ${isActive ? 'text-brand-cyan' : 'text-gray-300'}`}>
                                                          {sublink.name}
                                                      </NavLink>
                                                  </li>
                                              ))}
                                          </ul>
                                      )}
                                  </>
                              ) : (
                                  <NavLink to={link.path} onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `block py-3 hover:text-brand-cyan transition-colors ${isActive ? 'text-brand-cyan' : ''}`}>
                                      {link.name}
                                  </NavLink>
                              )}
                          </li>
                      ))}
                  </ul>
              </nav>

              <div 
                  className={`mt-8 transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${150 + navigationLinks.length * 75}ms` }}
              >
                  <Link
                      to="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full text-center block px-6 py-3 border border-brand-cyan rounded-md text-brand-cyan font-bold hover:bg-brand-cyan/10 transition-all"
                  >
                      Join Waitlist
                  </Link>
              </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;