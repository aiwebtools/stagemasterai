
import React from 'react';
import { ExternalLink, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const navigationLinks = [
    { name: 'Theater Set Design GPT', href: 'https://chatgpt.com/g/g-67cde1ee39748191b7b3721323131801-theater-set-design-gpt' },
    { name: 'Costume Design GPT', href: 'https://chatgpt.com/g/g-67cde23ac77081918dfbfb17831e408d-costume-design-gpt' },
    { name: 'Choreography GPT', href: 'https://chatgpt.com/g/g-67cde6205164819189f48fefadc02991-choreography-gpt' },
    { name: 'Stage Lighting GPT', href: 'https://chatgpt.com/g/g-67cde71b4f208191836a7db7efb9f1d2-stage-lighting-gpt' },
    { name: 'Playwriter GPT', href: 'https://playwritergpt.lovable.app/' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Disclaimer', href: '#disclaimer' },
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
                  Presented by <a href="https://www.aiwebtools.ai" className="hover:text-white">AiWebTools.Ai</a>
                </div>
              </div>
            </a>
            <p className="text-white/60 text-sm mb-4">
              Advanced AI tools for theater production, designed to streamline set design, costume creation, choreography, and lighting optimization.
            </p>
            <div className="flex space-x-4">
              <a 
                href="tel:+14758008096" 
                className="text-white/60 hover:text-white flex items-center gap-2"
              >
                <Phone size={16} />
                <span>(475) 800-8096</span>
              </a>
              <a 
                href="mailto:Contact@ai-webtools.com" 
                className="text-white/60 hover:text-white flex items-center gap-2"
              >
                <Mail size={16} />
                <span>Contact@ai-webtools.com</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white font-semibold mb-4">AI Tools</h3>
              <ul className="space-y-2">
                {navigationLinks.slice(0, 5).map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-1"
                    >
                      {link.name}
                      <ExternalLink size={12} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Information</h3>
              <ul className="space-y-2">
                {navigationLinks.slice(5).map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li>
                  <a 
                    href="https://openai.com/policies/privacy-policy/" 
                    className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-1"
                  >
                    Privacy Policy
                    <ExternalLink size={12} />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://aiwebtools.ai/terms-of-services" 
                    className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-1"
                  >
                    Terms of Service
                    <ExternalLink size={12} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2025 <a href="https://www.aiwebtools.ai" className="hover:text-white">AI WEB TOOLS LLC</a> All rights reserved.
          </p>
          <a 
            href="https://www.aiwebtools.ai"
            className="rounded-full py-2 px-6 bg-white/10 hover:bg-white/20 transition-colors text-white text-sm"
          >
            More AI Tools
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
