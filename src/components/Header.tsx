
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
          "fixed inset-0 z-40 pt-20 transform transition-transform duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ left: isMobileMenuOpen ? '24px' : undefined }}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-gradient-to-br from-stage-dark/95 via-purple-900/20 to-stage-dark/95 backdrop-blur-xl" />
        
        {/* Menu Content */}
        <div className="relative h-full overflow-y-auto bg-gradient-to-b from-stage-dark/90 to-[#0A0A12]/95 border-l border-white/10 shadow-2xl">
          <div className="p-6">
            {/* Header */}
            <div className="mb-6 pb-4 border-b border-white/10">
              <h2 className="text-xl font-heading font-bold text-white mb-1">Navigation</h2>
              <p className="text-sm text-white/60">Explore our AI creative tools</p>
            </div>

            {/* Accordion Navigation for Mobile */}
            <Accordion type="single" collapsible className="w-full space-y-2">
              {groupedLinks.map((group, groupIndex) => (
                <AccordionItem 
                  key={groupIndex} 
                  value={`item-${groupIndex}`} 
                  className="border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm overflow-hidden"
                >
                  {group.href ? (
                    <a 
                      href={group.href}
                      className="flex items-center justify-between w-full p-4 text-base font-medium text-white hover:text-gold-gradient transition-colors hover:bg-white/10"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>{group.category}</span>
                      <ChevronDown className="h-4 w-4 text-white/60" />
                    </a>
                  ) : (
                    <AccordionTrigger className="p-4 text-base font-medium text-white hover:text-gold-gradient hover:no-underline data-[state=open]:text-gold-gradient">
                      {group.category}
                    </AccordionTrigger>
                  )}
                  {!group.href && (
                    <AccordionContent className="p-0">
                      <div className="bg-black/20 border-t border-white/10">
                        {group.links.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.href}
                            className={cn(
                              "block p-4 transition-all border-b border-white/5 last:border-b-0",
                              link.name.includes("Playwriter") 
                                ? "bg-gradient-to-r from-yellow-500/10 to-orange-500/10 text-yellow-300 hover:from-yellow-500/20 hover:to-orange-500/20 font-medium" 
                                : link.name.includes("Movie Script") 
                                  ? "bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-300 hover:from-green-500/20 hover:to-emerald-500/20 font-medium"
                                  : "text-white/80 hover:text-white hover:bg-white/10"
                            )}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="text-sm font-medium">{link.name}</div>
                          </a>
                        ))}
                      </div>
                    </AccordionContent>
                  )}
                </AccordionItem>
              ))}
            </Accordion>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <p className="text-xs text-white/50">
                Powered by AI • Created with ❤️
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
