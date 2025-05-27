
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useIsMobile } from '@/hooks/use-mobile';

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

  const navigationLinks = [
    { name: 'Theater Set Design GPT', href: 'https://chatgpt.com/g/g-67cde1ee39748191b7b3721323131801-theater-set-design-gpt' },
    { name: 'Costume Design GPT', href: 'https://chatgpt.com/g/g-67cde23ac77081918dfbfb17831e408d-costume-design-gpt' },
    { name: 'Choreography GPT', href: 'https://chatgpt.com/g/g-67cde6205164819189f48fefadc02991-choreography-gpt' },
    { name: 'Stage Lighting GPT', href: 'https://chatgpt.com/g/g-67cde71b4f208191836a7db7efb9f1d2-stage-lighting-gpt' },
    { name: 'Playwriter GPT', href: 'https://playwritergpt.lovable.app/' },
    { name: 'Movie Script Writer GPT', href: 'https://moviescriptwritergpt.lovable.app/' },
    { name: 'Movie Scene Maker GPT', href: 'https://moviescenemakergpt.lovable.app/?via=aiwebtools' },
    { name: 'Movie Maker AI Studio', href: 'https://moviemakerstudio.lovable.app/?via=aiwebtools' },
    { name: 'Music Video Maker GPT', href: 'https://musicvideomakergpt.lovable.app/?via=aiwebtools' },
    { name: 'More AI Tools', href: 'https://www.aiwebtools.ai' },
  ];

  // Group navigation links into categories for mobile accordion
  const groupedLinks = [
    {
      category: 'Theater GPTs',
      links: [...navigationLinks.slice(0, 4), navigationLinks[4]], // Include Playwriter GPT
    },
    {
      category: 'Script Writing GPTs',
      links: [navigationLinks[4], navigationLinks[5]], // Include Playwriter GPT here too
    },
    {
      category: 'Visual Creation',
      links: [
        navigationLinks[6], // Movie Scene Maker GPT
        navigationLinks[7], // Movie Maker AI Studio
        navigationLinks[8], // Music Video Maker GPT
      ],
    },
    {
      category: 'More AI Tools',
      links: [], // Empty array since we'll use the category as a direct link
      href: 'https://www.aiwebtools.ai'
    }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3",
        isScrolled ? "bg-stage-dark/80 frost-blur shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4 mx-auto">
        <a href="/" className="flex items-center gap-2 z-50 animate-pulse-glow">
          <div className="relative h-10 w-10 rounded-full bg-gold-gradient flex items-center justify-center animate-rotate-slow shadow-[0_0_15px_rgba(255,215,0,0.7)]">
            <span className="text-stage-dark text-xl font-bold">🎭</span>
            <div className="absolute -inset-1 rounded-full bg-gold-gradient opacity-30 blur-sm"></div>
            <div className="absolute -inset-2 rounded-full bg-gold-gradient opacity-20 blur-md"></div>
          </div>
          <div>
            <h1 className="text-lg font-heading font-bold text-gold-gradient">
              StageMaster AI Suite
            </h1>
            <div className="text-xs text-white/70">
              Presented by <span className="hover:text-white">AiWebTools.Ai</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
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

        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden p-2 text-white/80 hover:text-white z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-stage-dark/95 pt-20 transform transition-transform duration-300 ease-in-out md:hidden backdrop-blur-xl shadow-2xl border-t border-white/10",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-4 overflow-y-auto h-full w-full max-w-full bg-[#0A0A12]">
          {/* Accordion Navigation for Mobile */}
          <Accordion type="single" collapsible className="w-full max-w-full">
            {groupedLinks.map((group, groupIndex) => (
              <AccordionItem key={groupIndex} value={`item-${groupIndex}`} className="border-b border-white/10">
                {group.href ? (
                  <a 
                    href={group.href}
                    className="flex items-center justify-between w-full py-4 text-lg text-white hover:text-white/80 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {group.category}
                  </a>
                ) : (
                  <AccordionTrigger className="py-4 text-lg text-white hover:text-white/80 hover:no-underline">
                    {group.category}
                  </AccordionTrigger>
                )}
                {!group.href && (
                  <AccordionContent className="pb-2">
                    <div className="flex flex-col space-y-2 pl-2 rounded-lg bg-white/5 p-3">
                      {group.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.href}
                          className={cn(
                            "py-3 px-4 rounded-md transition-all break-words text-sm",
                            link.name.includes("Playwriter") 
                              ? "bg-gold-gradient text-stage-dark font-medium hover:shadow-lg hover:shadow-gold/30 shimmer" 
                              : link.name.includes("Movie Script") 
                                ? "bg-green-gradient text-stage-dark font-medium hover:shadow-lg hover:shadow-green-500/30 shimmer"
                                : "text-white/80 hover:text-white hover:bg-white/10"
                          )}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </header>
  );
};

export default Header;
