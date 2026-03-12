
import React from 'react';
import { ExternalLink, Phone, Mail, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer = () => {
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
    { name: 'Commercial Scene Maker GPT', href: 'https://chatgpt.com/g/g-681a201fe69c8191b99e1636be90139e-commercial-scene-maker-gpt' },
  ];

  const resourceLinks = [
    { name: 'FAQ', href: '#faq' },
    { name: 'Read Disclaimer', href: '#disclaimer', icon: AlertTriangle },
  ];

  return (
    <footer className="bg-stage-dark/80 backdrop-blur-md border-t border-white/10 pb-8 pt-12 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-10 gap-10">
          {/* Brand Information */}
          <div className="flex flex-col max-w-sm">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="relative h-10 w-10 rounded-full bg-gold-gradient flex items-center justify-center">
                <span className="text-stage-dark text-xl font-bold">🎭</span>
              </div>
              <div>
                <h1 className="text-lg font-heading font-bold text-gold-gradient">
                  StageMaster AI Suite
                </h1>
                <div className="text-xs text-white/70">
                  By <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="hover:text-white">AiWebTools.Ai</a>
                </div>
              </div>
            </a>
            <p className="text-white/60 text-sm mb-4">
              Professional AI tools for theater production, designed to enhance set design, costume creation, choreography planning, and lighting design.
            </p>
            <div className="flex items-center space-x-6 text-white/60 text-sm">
              <a 
                href="tel:+14758008096" 
                className="hover:text-white flex items-center gap-2 transition-colors"
              >
                <Phone size={16} className="text-gold-gradient" />
                <span>(475) 800-8096</span>
              </a>
              <a 
                href="mailto:Contact@ai-webtools.com" 
                className="hover:text-white flex items-center gap-2 transition-colors"
              >
                <Mail size={16} className="text-gold-gradient" />
                <span>Contact@ai-webtools.com</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white font-semibold mb-4">Our Tools</h3>
              <ul className="space-y-2">
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                    >
                      {link.name}
                      <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
                <li>
                  <a 
                    href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                  >
                    MORE AI TOOLS
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                {resourceLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className={cn(
                        "text-white/60 hover:text-white transition-colors text-sm flex items-center gap-1 group",
                        link.name === 'Read Disclaimer' && "text-red-300 hover:text-red-200"
                      )}
                    >
                      {link.icon && <link.icon size={14} className="text-red-400" />}
                      {link.name}
                    </a>
                  </li>
                ))}
                <li>
                  <a 
                    href="https://openai.com/policies/privacy-policy/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                  >
                    Privacy Policy
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://aiwebtools.lovable.app/disclaimers" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                  >
                    Terms of Service
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Small Disclaimer Notice */}
        <div className="mb-6 p-3 bg-white/5 border border-white/10 rounded-lg">
          <p className="text-white/60 text-xs text-center">
            <strong>Disclaimer:</strong> All AI tools and content are provided for informational, educational, and research purposes only. 
            Users are responsible for ensuring compliance with all applicable laws, safety standards, and professional requirements.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2025 <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white">AI WEB TOOLS LLC</a>. All rights reserved.
          </p>
          <a 
            href="https://www.aiwebtools.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full py-2 px-6 bg-white/10 hover:bg-white/20 transition-colors text-white text-sm flex items-center gap-2 hover:shadow-lg hover:shadow-white/5"
          >
            Discover More AI Tools
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
