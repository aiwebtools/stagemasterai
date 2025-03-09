
import React, { useEffect, useRef } from 'react';
import { ArrowRight, PenTool, ExternalLink } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  // Generate stars
  useEffect(() => {
    if (!starsRef.current) return;
    
    const starfield = starsRef.current;
    starfield.innerHTML = '';
    
    const numStars = 100;
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      starfield.appendChild(star);
    }
  }, []);

  // Spotlight effect
  useEffect(() => {
    if (!containerRef.current || !spotlightRef.current) return;
    
    const container = containerRef.current;
    const spotlight = spotlightRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      spotlight.style.opacity = '1';
      spotlight.style.left = `${x}px`;
      spotlight.style.top = `${y}px`;
      spotlight.classList.add('spotlight-active');
    };
    
    const handleMouseLeave = () => {
      spotlight.style.opacity = '0';
      spotlight.classList.remove('spotlight-active');
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-hero-pattern flex items-center justify-center py-20 overflow-hidden"
    >
      <div ref={starsRef} className="star-field"></div>
      <div ref={spotlightRef} className="spotlight"></div>
      
      {/* Floating glow elements */}
      <div 
        className="stage-glow animate-pulse-glow" 
        style={{ 
          '--color': '#FFD700', 
          width: '400px', 
          height: '400px', 
          top: '20%', 
          left: '15%'
        } as React.CSSProperties}
      ></div>
      <div 
        className="stage-glow animate-pulse-glow" 
        style={{ 
          '--color': '#8B5CF6', 
          width: '350px', 
          height: '350px', 
          bottom: '15%', 
          right: '10%',
          animationDelay: '1s'
        } as React.CSSProperties}
      ></div>
      <div 
        className="stage-glow animate-pulse-glow" 
        style={{ 
          '--color': '#0EA5E9', 
          width: '300px', 
          height: '300px', 
          top: '60%', 
          left: '5%',
          animationDelay: '2s'
        } as React.CSSProperties}
      ></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block mb-4">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white backdrop-blur-sm">
              Complete AI Creative Suite for Stage & Screen
            </span>
          </div>
          
          <h1 className="headline text-4xl md:text-6xl lg:text-7xl mb-6 max-w-4xl leading-tight">
            <span className="text-gold-gradient">Transform</span> Your Creative Vision with <span className="text-gold-gradient">AI</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed">
            A comprehensive suite of AI tools for the entire creative process - from scriptwriting and set design to costumes, choreography, and lighting.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="#tools" 
              className="interactive-button bg-gold-gradient"
            >
              <span className="text-stage-dark font-semibold">Explore All Creative AI Tools</span>
            </a>
            <a 
              href="#how-it-works" 
              className="interactive-button"
            >
              <span className="text-white flex items-center gap-2">
                How It Works <ArrowRight size={16} />
              </span>
            </a>
          </div>
          
          <div className="glass-card p-6 max-w-4xl shadow-2xl">
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://playwritergpt.lovable.app/"
                target="_blank" 
                rel="noopener noreferrer"
                className="interactive-button bg-gold-gradient"
              >
                <span className="text-stage-dark flex items-center gap-2 font-semibold">
                  <PenTool size={18} /> Try PlayWriter GPT <ExternalLink size={16} />
                </span>
              </a>
              <a 
                href="https://moviescriptwritergpt.lovable.app/"
                target="_blank" 
                rel="noopener noreferrer"
                className="interactive-button bg-green-gradient"
              >
                <span className="text-stage-dark flex items-center gap-2 font-semibold">
                  <Film size={18} className="text-stage-dark" /> Try Movie Script Writer <ExternalLink size={16} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
