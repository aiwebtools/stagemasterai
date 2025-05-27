
import React from 'react';
import { ChevronDown, Sparkles, Film, Theater, Palette, Music, Pen, FileText, Video, Clapperboard, Globe } from 'lucide-react';
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
  const getCategoryIcon = (category: string) => {
    if (category === 'Movie & Commercial Creation') {
      return <Film className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 group-hover:from-purple-300 group-hover:to-blue-300 transition-colors" />;
    }
    return <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 group-hover:from-purple-300 group-hover:to-blue-300 transition-colors"></div>;
  };

  const getLinkIcon = (linkName: string) => {
    if (linkName.includes('Theater Set Design')) return <Theater className="w-3 h-3" />;
    if (linkName.includes('Costume Design')) return <Palette className="w-3 h-3" />;
    if (linkName.includes('Choreography')) return <Music className="w-3 h-3" />;
    if (linkName.includes('Stage Lighting')) return <Sparkles className="w-3 h-3" />;
    if (linkName.includes('Playwriter')) return <Pen className="w-3 h-3" />;
    if (linkName.includes('Movie Script')) return <FileText className="w-3 h-3" />;
    if (linkName.includes('Movie Scene Maker')) return <Video className="w-3 h-3" />;
    if (linkName.includes('Movie Maker AI Studio')) return <Clapperboard className="w-3 h-3" />;
    if (linkName.includes('Music Video Maker')) return <Film className="w-3 h-3" />;
    if (linkName.includes('More AI Tools')) return <Globe className="w-3 h-3" />;
    return <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>;
  };

  return (
    <div className="hidden md:flex items-center justify-between w-full">
      <Logo />
      
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white/90 hover:text-white bg-gradient-to-r from-purple-600/20 to-blue-600/20 hover:from-purple-600/30 hover:to-blue-600/30 border border-white/10 hover:border-white/20 data-[state=open]:from-purple-600/30 data-[state=open]:to-blue-600/30 data-[state=open]:border-white/20 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl group">
              <Sparkles className="h-4 w-4 mr-2 text-purple-300 group-hover:text-purple-200 transition-colors" />
              AI Tools
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-gradient-to-br from-stage-dark/98 to-purple-900/95 backdrop-blur-xl border border-white/20 shadow-2xl rounded-xl overflow-hidden">
              <div className="w-96 max-w-[calc(100vw-2rem)] p-6">
                <div className="space-y-4">
                  {groupedLinks.map((group, groupIndex) => (
                    <Collapsible key={groupIndex} className="w-full">
                      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-white/8 to-white/4 hover:from-white/15 hover:to-white/8 px-4 py-3 text-sm font-semibold text-white hover:text-purple-200 transition-all duration-300 border border-white/5 hover:border-white/20 shadow-sm hover:shadow-lg group backdrop-blur-sm">
                        <span className="flex items-center gap-2">
                          {getCategoryIcon(group.category)}
                          {group.category}
                        </span>
                        <ChevronDown className="h-4 w-4 text-white/60 group-hover:text-white/80 transition-all duration-300 group-data-[state=open]:rotate-180" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-2">
                        <div className="bg-black/30 rounded-xl border border-white/10 overflow-hidden backdrop-blur-sm shadow-inner">
                          {group.links.map((link, linkIndex) => (
                            <NavigationMenuLink key={linkIndex} asChild>
                              <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(
                                  "block px-4 py-3 text-sm transition-all duration-300 border-b border-white/5 last:border-b-0 relative overflow-hidden group/item",
                                  "hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5",
                                  "before:absolute before:inset-0 before:bg-gradient-to-r before:opacity-0 before:transition-opacity before:duration-300",
                                  "hover:before:opacity-100 hover:shadow-lg hover:scale-[1.02] hover:z-10",
                                  "active:scale-[0.98] active:transition-transform active:duration-100",
                                  link.name.includes("Playwriter") 
                                    ? "text-yellow-200 hover:text-yellow-100 before:from-yellow-500/20 before:to-orange-500/20 font-semibold" 
                                    : link.name.includes("Movie Script") 
                                      ? "text-green-200 hover:text-green-100 before:from-green-500/20 before:to-emerald-500/20 font-semibold"
                                      : "text-white/85 hover:text-white"
                                )}
                              >
                                <span className="relative z-10 flex items-center gap-2">
                                  {getLinkIcon(link.name)}
                                  {link.name}
                                  <div className="ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                                    <div className="w-1 h-1 rounded-full bg-white/60"></div>
                                  </div>
                                </span>
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
                      className="flex items-center justify-between w-full rounded-xl bg-gradient-to-r from-purple-600/30 to-blue-600/30 hover:from-purple-600/40 hover:to-blue-600/40 px-4 py-3 text-sm font-semibold text-white hover:text-purple-100 transition-all duration-300 border border-purple-400/30 hover:border-purple-300/50 shadow-lg hover:shadow-xl group backdrop-blur-sm relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10 flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-purple-300 group-hover:text-purple-200 transition-colors" />
                        More AI Tools
                      </span>
                      <ChevronDown className="h-4 w-4 text-white/60 group-hover:text-white/80 transition-all duration-300 relative z-10" />
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
