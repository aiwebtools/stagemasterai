
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import Logo from './Logo';
import { groupedLinks } from './navigationData';

const DesktopHeader = () => {
  return (
    <div className="hidden md:flex items-center justify-between w-full">
      <Logo />
      
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white/90 hover:text-white bg-transparent hover:bg-white/10 data-[state=open]:bg-white/10">
              AI Tools
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-stage-dark/95 backdrop-blur-xl border border-white/10 shadow-2xl">
              <div className="w-96 p-4">
                <div className="space-y-3">
                  {groupedLinks.map((group, groupIndex) => (
                    <Collapsible key={groupIndex} className="w-full">
                      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg bg-white/5 px-3 py-2 text-sm font-medium text-white hover:bg-white/10 hover:text-gold-gradient transition-colors">
                        {group.category}
                        <ChevronDown className="h-4 w-4 text-white/60" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-1">
                        <div className="bg-black/20 rounded-lg border border-white/5 overflow-hidden">
                          {group.links.map((link, linkIndex) => (
                            <NavigationMenuLink key={linkIndex} asChild>
                              <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(
                                  "block px-3 py-2 text-sm transition-all border-b border-white/5 last:border-b-0",
                                  link.name.includes("Playwriter") 
                                    ? "bg-gradient-to-r from-yellow-500/10 to-orange-500/10 text-yellow-300 hover:from-yellow-500/20 hover:to-orange-500/20 font-medium" 
                                    : link.name.includes("Movie Script") 
                                      ? "bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-300 hover:from-green-500/20 hover:to-emerald-500/20 font-medium"
                                      : "text-white/80 hover:text-white hover:bg-white/10"
                                )}
                              >
                                {link.name}
                              </a>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  ))}
                  
                  {/* More AI Tools as separate link */}
                  <NavigationMenuLink asChild>
                    <a 
                      href="https://www.aiwebtools.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full rounded-lg bg-white/5 px-3 py-2 text-sm font-medium text-white hover:bg-white/10 hover:text-gold-gradient transition-colors"
                    >
                      <span>More AI Tools</span>
                      <ChevronDown className="h-4 w-4 text-white/60" />
                    </a>
                  </NavigationMenuLink>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default DesktopHeader;
