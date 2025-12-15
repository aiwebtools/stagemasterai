
import React from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface MobileHeaderProps {
  isMobileMenuOpen: boolean;
  onToggleMenu: () => void;
}

const MobileHeader = ({ isMobileMenuOpen, onToggleMenu }: MobileHeaderProps) => {
  return (
    <div className="md:hidden flex items-center justify-between w-full">
      {/* Logo */}
      <Logo />

      {/* Hamburger Menu Button */}
      <button 
        className="p-2 text-white/80 hover:text-white transition-colors flex-shrink-0"
        onClick={onToggleMenu}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  );
};

export default MobileHeader;
