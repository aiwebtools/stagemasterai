
import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { groupedLinks } from './navigationData';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <div 
      className={cn(
        "fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out md:hidden",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
      style={{ top: isOpen ? '100px' : undefined, left: '-1in' }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-stage-dark/95 via-purple-900/20 to-stage-dark/95 backdrop-blur-xl" />
      
      {/* Menu Content */}
      <div className="relative h-full overflow-y-auto bg-gradient-to-b from-stage-dark/90 to-[#0A0A12]/95 shadow-2xl">
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
                <AccordionTrigger className="p-4 text-base font-medium text-white hover:text-gold-gradient hover:no-underline data-[state=open]:text-gold-gradient">
                  {group.category}
                </AccordionTrigger>
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
                        onClick={onClose}
                      >
                        <div className="text-sm font-medium">{link.name}</div>
                      </a>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
            
            {/* More AI Tools as separate button */}
            <div className="border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm overflow-hidden">
              <a 
                href="https://www.aiwebtools.ai"
                className="flex items-center justify-between w-full p-4 text-base font-medium text-white hover:text-gold-gradient transition-colors hover:bg-white/10"
                onClick={onClose}
              >
                <span>More AI Tools</span>
                <ChevronDown className="h-4 w-4 text-white/60" />
              </a>
            </div>
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
  );
};

export default MobileMenu;
