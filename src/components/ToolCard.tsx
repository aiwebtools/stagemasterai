
import React from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

interface ToolCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  href: string;
  features: string[];
}

const ToolCard = ({ title, description, icon, color, href, features }: ToolCardProps) => {
  return (
    <div className="tool-card group">
      <div 
        className={cn(
          "tool-icon group-hover:scale-105 transition-transform", 
          color
        )}
      >
        {icon}
      </div>
      
      <h3 className="text-xl font-heading font-bold mb-2">{title}</h3>
      
      <p className="text-white/70 mb-4 flex-grow">
        {description}
      </p>
      
      <ul className="mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-white/80">
            <span className={cn("text-xs mt-1", color)}>▸</span>
            {feature}
          </li>
        ))}
      </ul>
      
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center justify-center gap-2 text-sm font-medium px-4 py-2 rounded-full transition-all",
          "hover:opacity-90 active:scale-95 w-full md:w-auto",
          color,
          "shadow-sm hover:shadow-md"
        )}
        onClick={(e) => e.currentTarget.blur()}
      >
        Try This Tool <ExternalLink size={14} />
      </a>
    </div>
  );
};

export default ToolCard;
