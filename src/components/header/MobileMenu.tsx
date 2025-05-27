
import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, AlertTriangle, ExternalLink, X } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { groupedLinks } from './navigationData';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <>
      {/* Enhanced Backdrop with blur */}
      <div 
        className={cn(
          "fixed inset-0 z-40 transition-all duration-500 ease-out md:hidden",
          isOpen 
            ? "opacity-100 visible backdrop-blur-xl bg-black/60" 
            : "opacity-0 invisible"
        )}
        style={{ top: '60px' }}
        onClick={onClose}
      />
      
      {/* Enhanced Menu Content */}
      <div 
        className={cn(
          "fixed right-0 top-[60px] z-50 h-[calc(100vh-60px)] w-full max-w-sm transform transition-all duration-500 ease-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="h-full overflow-y-auto bg-gradient-to-b from-stage-dark/95 via-stage-dark/98 to-black/95 backdrop-blur-2xl border-l border-white/10 shadow-2xl">
          <div className="p-6">
            {/* Enhanced Header with Close Button */}
            <div className="mb-6 pb-4 border-b border-gradient-to-r from-transparent via-white/20 to-transparent">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-heading font-bold text-gradient bg-gradient-to-r from-white via-gold-400 to-white bg-clip-text">
                    Navigation
                  </h2>
                  <p className="text-sm text-white/70 mt-1">Explore our AI creative tools</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Enhanced Accordion Navigation */}
            <Accordion type="single" collapsible className="w-full space-y-3">
              {groupedLinks.map((group, groupIndex) => (
                <AccordionItem 
                  key={groupIndex} 
                  value={`item-${groupIndex}`} 
                  className="border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/8"
                >
                  <AccordionTrigger className="px-4 py-4 text-sm font-semibold text-white hover:text-gold-400 hover:no-underline data-[state=open]:text-gold-400 transition-all duration-300 group">
                    <span className="flex items-center gap-2">
                      {group.category}
                      <div className="w-2 h-2 rounded-full bg-gold-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="p-0">
                    <div className="bg-black/30 border-t border-white/5">
                      {group.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "group flex items-center justify-between px-4 py-4 transition-all duration-300 border-b border-white/5 last:border-b-0 text-sm relative overflow-hidden",
                            link.name.includes("Playwriter") 
                              ? "bg-gradient-to-r from-yellow-500/10 to-orange-500/10 text-yellow-200 hover:from-yellow-500/20 hover:to-orange-500/20 font-medium hover:text-yellow-100" 
                              : link.name.includes("Movie Script") 
                                ? "bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-200 hover:from-green-500/20 hover:to-emerald-500/20 font-medium hover:text-green-100"
                                : "text-white/80 hover:text-white hover:bg-white/10"
                          )}
                          onClick={onClose}
                        >
                          <span className="font-medium relative z-10">{link.name}</span>
                          <ExternalLink className="h-4 w-4 text-white/40 group-hover:text-white/70 transition-colors duration-300" />
                          
                          {/* Hover effect overlay */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
              
              {/* Enhanced Read Disclaimer Button */}
              <div className="border border-red-400/30 rounded-xl bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-sm overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:border-red-300/50">
                <a 
                  href="#disclaimer"
                  className="group flex items-center justify-between w-full px-4 py-4 text-sm font-semibold text-red-300 hover:text-red-200 transition-all duration-300 hover:bg-red-500/10 relative overflow-hidden"
                  onClick={onClose}
                >
                  <span className="flex items-center gap-3 relative z-10">
                    <AlertTriangle className="h-5 w-5 animate-pulse" />
                    Read Disclaimer
                  </span>
                  <div className="w-2 h-2 rounded-full bg-red-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </div>
              
              {/* Enhanced More AI Tools Button */}
              <div className="border border-white/20 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white/30">
                <a 
                  href="https://www.aiwebtools.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between w-full px-4 py-4 text-sm font-semibold text-white hover:text-gold-400 transition-all duration-300 hover:bg-white/10 relative overflow-hidden"
                  onClick={onClose}
                >
                  <span className="relative z-10">MORE AI WEB TOOLS</span>
                  <div className="flex items-center gap-2 relative z-10">
                    <ExternalLink className="h-4 w-4 text-white/60 group-hover:text-gold-400 transition-colors duration-300" />
                    <ChevronDown className="h-4 w-4 text-white/60 group-hover:text-gold-400 transition-colors duration-300 rotate-[-90deg]" />
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </div>
            </Accordion>

            {/* Enhanced Footer with Close Button */}
            <div className="mt-8 pt-6 border-t border-gradient-to-r from-transparent via-white/20 to-transparent">
              {/* Footer Info */}
              <div className="text-center mb-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                  <p className="text-xs text-white/60 font-medium">
                    Powered by AI • Created with ❤️
                  </p>
                </div>
              </div>
              
              {/* Bottom Close Button */}
              <div className="flex justify-center">
                <button
                  onClick={onClose}
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white/80 hover:text-white rounded-xl transition-all duration-300 border border-white/20 hover:border-white/30"
                  aria-label="Close navigation menu"
                >
                  <X size={18} />
                  <span className="text-sm font-medium">Close Menu</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
