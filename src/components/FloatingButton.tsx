
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down a bit
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <a
      href="https://www.aiwebtools.ai"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50 rounded-full shadow-lg transform transition-all duration-500",
        "bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500",
        "flex items-center gap-2 px-4 py-3 font-medium text-white",
        "hover:shadow-xl hover:shadow-purple-500/20 active:scale-95",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0",
        "group"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-hidden={!isVisible}
    >
      <span className="relative">
        <span className={cn(
          "absolute inset-0 rounded-full animate-pulse-slow",
          "bg-gradient-to-r from-purple-400/30 via-indigo-400/30 to-blue-400/30",
          "blur-md -z-10"
        )} />
        More AI Web Tools
      </span>
      <ExternalLink 
        size={16} 
        className={cn(
          "transition-transform duration-300",
          isHovered ? "translate-x-1" : ""
        )} 
      />
    </a>
  );
};

export default FloatingButton;
