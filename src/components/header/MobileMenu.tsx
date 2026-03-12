
import React from 'react';
import { cn } from '@/lib/utils';
import { AlertTriangle, ExternalLink, X } from 'lucide-react';
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
      
      {/* Enhanced Menu Content - Full width on mobile */}
      <div 
        className={cn(
          "fixed inset-x-0 top-[60px] z-50 h-[calc(100vh-60px)] transform transition-all duration-500 ease-out md:hidden",
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
        )}
      >
        <div className="h-full overflow-y-auto bg-gradient-to-b from-stage-dark/98 via-stage-dark to-black backdrop-blur-2xl shadow-2xl">
          <div className="p-4 sm:p-6">
            {/* Header with Close Button */}
            <div className="mb-4 pb-3 border-b border-white/20">
              <div className="flex items-center justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-heading font-bold text-white truncate">
                    Navigation
                  </h2>
                  <p className="text-xs text-white/60 mt-0.5 truncate">Explore AI creative tools</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 flex-shrink-0"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Accordion Navigation */}
            <Accordion type="single" collapsible className="w-full space-y-2">
              {groupedLinks.map((group, groupIndex) => (
                <AccordionItem 
                  key={groupIndex} 
                  value={`item-${groupIndex}`} 
                  className="border border-white/10 rounded-lg bg-white/5 overflow-hidden"
                >
                  <AccordionTrigger className="px-3 py-3 text-sm font-semibold text-white hover:text-gold-400 hover:no-underline data-[state=open]:text-gold-400 transition-all duration-300">
                    <span className="truncate">{group.category}</span>
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
                            "group flex items-center justify-between px-3 py-3 transition-all duration-300 border-b border-white/5 last:border-b-0 text-sm",
                            link.name.includes("Playwriter") 
                              ? "bg-gradient-to-r from-yellow-500/10 to-orange-500/10 text-yellow-200" 
                              : link.name.includes("Movie Script") 
                                ? "bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-200"
                                : "text-white/80 hover:text-white hover:bg-white/10"
                          )}
                          onClick={onClose}
                        >
                          <span className="font-medium truncate flex-1 mr-2">{link.name}</span>
                          <ExternalLink className="h-4 w-4 text-white/40 flex-shrink-0" />
                        </a>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
              
              {/* Read Disclaimer Button */}
              <div className="border border-red-400/30 rounded-lg bg-gradient-to-r from-red-500/10 to-orange-500/10 overflow-hidden">
                <a 
                  href="#disclaimer"
                  className="flex items-center justify-between w-full px-3 py-3 text-sm font-semibold text-red-300 hover:bg-red-500/10 transition-all"
                  onClick={onClose}
                >
                  <span className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate">Read Disclaimer</span>
                  </span>
                </a>
              </div>
              
              {/* More AI Tools Button */}
              <div className="border border-white/20 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 overflow-hidden">
                <a 
                  href="https://aiwebtools.lovable.app/?via=aiwebtools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-3 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all"
                  onClick={onClose}
                >
                  <span className="truncate">MORE AI WEB TOOLS</span>
                  <ExternalLink className="h-4 w-4 text-white/60 flex-shrink-0 ml-2" />
                </a>
              </div>
            </Accordion>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-white/20">
              <p className="text-xs text-white/50 text-center mb-3">
                POWERED BY AI WEB TOOLS
              </p>
              
              <button
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all border border-white/20"
                aria-label="Close navigation menu"
              >
                <X size={18} />
                <span className="text-sm font-medium">Close Menu</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
