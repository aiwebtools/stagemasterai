import React from 'react';
import ToolCard from '@/components/ToolCard';
import { Palette, Music, Theater, LampDesk, PenTool, Film, Video, Clapperboard, Music as MusicIcon } from 'lucide-react';

const ToolsSection = () => {
  const tools = [
    {
      title: "Theater Set Design GPT",
      description: "Generate complete stage set blueprints for theatrical productions with precise measurements and technical details.",
      icon: <Theater className="text-stage-dark" size={32} />,
      color: "bg-gold-gradient text-stage-dark",
      href: "https://chatgpt.com/g/g-67cde1ee39748191b7b3721323131801-theater-set-design-gpt",
      features: [
        "3D set layouts with precise measurements",
        "Modular designs for quick scene changes",
        "Material lists with cost estimates",
        "Technical elements like trap doors and fly systems",
        "Downloadable blueprints in PDF/DXF format"
      ]
    },
    {
      title: "Costume Design GPT",
      description: "Create detailed costume sketches based on character traits, era-specific fashion, and performance requirements.",
      icon: <Palette className="text-stage-dark" size={32} />,
      color: "bg-purple-gradient text-stage-dark",
      href: "https://chatgpt.com/g/g-67cde23ac77081918dfbfb17831e408d-costume-design-gpt",
      features: [
        "Period-accurate or fantasy costume designs",
        "Fabric and material recommendations",
        "Detailed accessory specifications",
        "Budget vs. premium alternatives",
        "Costume care and maintenance guides"
      ]
    },
    {
      title: "Choreography GPT",
      description: "Generate custom dance routines with step-by-step sequences, rhythm breakdowns, and formation charts.",
      icon: <Music className="text-stage-dark" size={32} />,
      color: "bg-teal-gradient text-stage-dark",
      href: "https://chatgpt.com/g/g-67cde6205164819189f48fefadc02991-choreography-gpt",
      features: [
        "Multiple dance style options",
        "Customizable difficulty levels",
        "Floor formations and transitions",
        "Music synchronization guides",
        "Animated dance simulations"
      ]
    },
    {
      title: "Stage Lighting GPT",
      description: "Create optimized lighting setups with detailed fixture placement, color schemes, and cue sequences.",
      icon: <LampDesk className="text-stage-dark" size={32} />,
      color: "bg-pink-gradient text-stage-dark",
      href: "https://chatgpt.com/g/g-67cde71b4f208191836a7db7efb9f1d2-stage-lighting-gpt",
      features: [
        "Complete lighting plans with beam angles",
        "Scene-specific color palettes",
        "Energy-efficient setup recommendations",
        "DMX programming suggestions",
        "3D visual previews of lighting effects"
      ]
    },
    {
      title: "Playwriter GPT",
      description: "Generate original play scripts with compelling characters, engaging dialogues, and dramatic structures.",
      icon: <PenTool className="text-stage-dark" size={32} />,
      color: "bg-gold-gradient text-stage-dark",
      href: "https://playwritergpt.lovable.app/",
      features: [
        "Customizable genres and themes",
        "Character development tools",
        "Act and scene structuring",
        "Dialogue generation",
        "Printable script formatting"
      ]
    },
    {
      title: "Movie Script Writer GPT",
      description: "The most sophisticated AI screenwriting assistant that guides you through every step of the script creation process, from concept to final draft.",
      icon: <Film className="text-stage-dark" size={32} />,
      color: "bg-green-gradient text-stage-dark",
      href: "https://moviescriptwritergpt.lovable.app/",
      features: [
        "Complete script creation with industry-standard formatting",
        "Detailed scene planning and character development",
        "Step-by-step guided writing process",
        "Multi-genre support (Action, Drama, Comedy)",
        "Export scripts to Word for editing and sharing"
      ]
    },
    {
      title: "Movie Scene Maker GPT",
      description: "Transform yourself into the star of a cinematic story with AI-generated scene images. Upload your photo and let AI create stunning, personalized movie scenes where you're the main character.",
      icon: <Video className="text-stage-dark" size={32} />,
      color: "bg-teal-gradient text-stage-dark",
      href: "https://moviescenemakergpt.lovable.app/?via=aiwebtools",
      features: [
        "Upload your photo and star in personalized scenes",
        "Choose from multiple movie genres or create custom stories",
        "Hyper-realistic 4K scene generation with perfect continuity",
        "Scene-by-scene storyboard creation with you as the star",
        "Download your scenes as storyboard or image collection to animate with Sora"
      ]
    },
    {
      title: "Movie Maker AI Studio",
      description: "Complete AI toolset for professional movie production. Create scripts, scenes, trailers, animations, and add sound effects all from your computer.",
      icon: <Clapperboard className="text-stage-dark" size={32} />,
      color: "bg-purple-gradient text-stage-dark",
      href: "https://moviemakerstudio.lovable.app/?via=aiwebtools",
      features: [
        "All-in-one movie production suite",
        "Script writing and scene generation tools",
        "Trailer and cover creation",
        "Animation and visual effects",
        "Sound design and music composition tools"
      ]
    },
    {
      title: "Music Video Maker GPT",
      description: "Create stunning music videos with AI technology. Generate concepts, storyboards, and complete music video projects in minutes.",
      icon: <MusicIcon className="text-stage-dark" size={32} />,
      color: "bg-pink-gradient text-stage-dark",
      href: "https://musicvideomakergpt.lovable.app/?via=aiwebtools",
      features: [
        "AI-generated music video concepts",
        "Visual style and aesthetic direction",
        "Shot-by-shot storyboarding",
        "Artist branding integration",
        "Production planning and technical guidance"
      ]
    }
  ];

  return (
    <section id="tools" className="py-20 relative">
      <div 
        className="stage-glow animate-pulse-glow" 
        style={{ 
          '--color': '#FFD700', 
          width: '500px', 
          height: '500px', 
          bottom: '10%', 
          right: '-10%',
          opacity: '0.15'
        } as React.CSSProperties}
      ></div>
      <div 
        className="stage-glow animate-pulse-glow" 
        style={{ 
          '--color': '#8B5CF6', 
          width: '400px', 
          height: '400px', 
          top: '20%', 
          left: '-5%',
          opacity: '0.15',
          animationDelay: '1.5s'
        } as React.CSSProperties}
      ></div>
      
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white backdrop-blur-sm mb-4 inline-block">
            Complete AI Creative Suite
          </span>
          <h2 className="headline text-3xl md:text-4xl mb-4">
            Specialized AI Tools for Every Creative Need
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            A comprehensive suite of AI tools for the entire creative process - from scriptwriting and set design to costumes, choreography, and lighting, & more!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <ToolCard 
              key={index}
              title={tool.title}
              description={tool.description}
              icon={tool.icon}
              color={tool.color}
              href={tool.href}
              features={tool.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
