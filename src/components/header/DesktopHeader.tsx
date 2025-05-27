
import React from 'react';
import Logo from './Logo';
import { navigationLinks } from './navigationData';

const DesktopHeader = () => {
  return (
    <div className="hidden md:flex items-center justify-between">
      <Logo />

      {/* Desktop Navigation */}
      <nav className="flex items-center gap-6">
        {navigationLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-sm text-white/70 hover:text-white transition-colors relative group"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-stage-gold transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default DesktopHeader;
