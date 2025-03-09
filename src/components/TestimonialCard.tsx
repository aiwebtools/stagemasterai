
import React from 'react';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
  variant?: 'gold' | 'purple' | 'teal' | 'pink';
}

const TestimonialCard = ({
  quote,
  author,
  role,
  rating,
  variant = 'gold',
}: TestimonialCardProps) => {
  const variantStyles = {
    gold: "from-stage-gold/20 to-transparent border-stage-gold/30",
    purple: "from-stage-purple/20 to-transparent border-stage-purple/30",
    teal: "from-stage-teal/20 to-transparent border-stage-teal/30",
    pink: "from-stage-pink/20 to-transparent border-stage-pink/30",
  };

  const stars = Array.from({ length: 5 }, (_, i) => (
    <Star 
      key={i} 
      size={16} 
      className={i < rating ? "text-stage-gold fill-stage-gold" : "text-white/20"} 
    />
  ));

  return (
    <div className={cn(
      "glass-card p-6 md:p-8 rounded-xl relative overflow-hidden",
      "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    )}>
      <div className={cn(
        "absolute top-0 left-0 w-full h-full opacity-30 -z-10 bg-gradient-to-b",
        variantStyles[variant]
      )}></div>
      
      <div className="flex mb-4">
        {stars}
      </div>
      
      <blockquote className="mb-6 text-white/90 relative">
        <span className="absolute -top-4 -left-2 text-5xl opacity-20">"</span>
        {quote}
      </blockquote>
      
      <div>
        <p className="font-semibold text-white">{author}</p>
        <p className="text-sm text-white/60">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
