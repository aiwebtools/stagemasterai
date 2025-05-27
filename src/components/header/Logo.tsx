
import React from 'react';

const Logo = () => {
  return (
    <a href="/" className="flex items-center gap-2 animate-pulse-glow">
      <div className="relative h-10 w-10 rounded-full bg-gold-gradient flex items-center justify-center animate-rotate-slow shadow-[0_0_15px_rgba(255,215,0,0.7)]">
        <span className="text-stage-dark text-xl font-bold">🎭</span>
        <div className="absolute -inset-1 rounded-full bg-gold-gradient opacity-30 blur-sm"></div>
        <div className="absolute -inset-2 rounded-full bg-gold-gradient opacity-20 blur-md"></div>
      </div>
      <div>
        <h1 className="text-lg font-heading font-bold text-gold-gradient">
          StageMaster AI Suite
        </h1>
        <div className="text-xs text-white/70">
          Presented by <span className="hover:text-white">AiWebTools.Ai</span>
        </div>
        <div className="text-xs text-white/60 italic">
          "Your Launch Pad to the Tools That Power Your Story."
        </div>
      </div>
    </a>
  );
};

export default Logo;
