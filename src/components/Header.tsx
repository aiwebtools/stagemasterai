
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileHeader from './header/MobileHeader';
import DesktopHeader from './header/DesktopHeader';
import MobileMenu from './header/MobileMenu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-stage-dark/80 frost-blur shadow-lg" : "bg-transparent",
        isMobile ? "py-2" : "py-3"
      )}
    >
      <div className="container mx-auto px-4">
        <MobileHeader 
          isMobileMenuOpen={isMobileMenuOpen}
          onToggleMenu={toggleMobileMenu}
        />
        <DesktopHeader />
      </div>

      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
      />
    </header>
  );
};

export default Header;
