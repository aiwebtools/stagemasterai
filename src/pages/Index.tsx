
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ToolCard from '@/components/ToolCard';
import TestimonialCard from '@/components/TestimonialCard';
import FAQSection from '@/components/FAQSection';
import DisclaimerSection from '@/components/DisclaimerSection';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import { Palette, Music, Theater, LampDesk, PenTool, ExternalLink } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "StageMaster AI Suite | Advanced AI Tools for Theater Production";
  }, []);

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
    }
  ];

  const testimonials = [
    {
      quote: "TheaterSetDesignGPT transformed our production planning. What would have taken weeks with traditional methods was completed in hours, letting us focus on the artistic elements.",
      author: "Sarah Johnson",
      role: "Production Manager, New York Theater Company",
      rating: 5,
      variant: "gold"
    },
    {
      quote: "As a costume designer with tight deadlines, CostumeDesignGPT has become my secret weapon. The material recommendations alone have saved me countless hours of research.",
      author: "Michael Chen",
      role: "Costume Designer, Regional Theater Circuit",
      rating: 5,
      variant: "purple"
    },
    {
      quote: "ChoreographyGPT helped me create unique dance sequences for our musical that perfectly matched our performers' abilities. A true game-changer for directors.",
      author: "Alicia Rodriguez",
      role: "Choreographer & Director, Community Theater",
      rating: 4,
      variant: "teal"
    },
    {
      quote: "The lighting plans from StageLightingGPT gave our small production a professional edge we couldn't have achieved otherwise. Audiences were mesmerized by the atmosphere.",
      author: "David Wilson",
      role: "Technical Director, University Theater Program",
      rating: 5,
      variant: "pink"
    }
  ];

  const howItWorks = [
    {
      title: "Choose Your Tool",
      description: "Select the specialized AI tool that matches your production needs, whether set design, costumes, choreography, or lighting."
    },
    {
      title: "Provide Your Requirements",
      description: "Tell the AI about your production specifics, including style preferences, technical constraints, and creative vision."
    },
    {
      title: "Review AI-Generated Designs",
      description: "Receive detailed designs, blueprints, or directions tailored to your requirements within minutes."
    },
    {
      title: "Refine and Implement",
      description: "Request adjustments as needed, then download or save the final output to implement in your production."
    }
  ];

  return (
    <div className="bg-stage-dark min-h-screen">
      <Header />
      
      <main>
        <Hero />
        
        {/* Tools Section */}
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
                Our AI Suite
              </span>
              <h2 className="headline text-3xl md:text-4xl mb-4">
                Specialized AI Tools for Every Stage Need
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Each tool in the StageMaster AI Suite is designed to address specific aspects of theater production,
                providing professional-level assistance for your creative process.
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
        
        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-black/30">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white backdrop-blur-sm mb-4 inline-block">
                Process
              </span>
              <h2 className="headline text-3xl md:text-4xl mb-4">
                How StageMaster AI Works
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Our AI tools streamline your creative process with a simple four-step workflow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {howItWorks.map((step, index) => (
                <div key={index} className="glass-card p-6 relative">
                  <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center mb-4">
                    <span className="text-stage-dark font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </div>
              ))}
            </div>
            
            <div className="max-w-4xl mx-auto">
              <YouTubeEmbed videoId="KKldzg40wEI" title="StageMaster AI Suite Demo" />
              
              <div className="mt-6 flex justify-center">
                <a 
                  href="https://playwritergpt.lovable.app/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="interactive-button bg-gold-gradient"
                >
                  <span className="text-stage-dark flex items-center gap-2 font-semibold">
                    <PenTool size={18} /> TRY PLAYWRITER GPT NOW <ExternalLink size={16} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-20 relative">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white backdrop-blur-sm mb-4 inline-block">
                Success Stories
              </span>
              <h2 className="headline text-3xl md:text-4xl mb-4">
                What Theater Professionals Are Saying
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Hear from creative professionals who have transformed their production process with StageMaster AI Suite.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  rating={testimonial.rating}
                  variant={testimonial.variant as any}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <FAQSection />
        
        {/* Disclaimer Section */}
        <DisclaimerSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
