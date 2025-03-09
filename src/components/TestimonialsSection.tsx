
import React from 'react';
import TestimonialCard from '@/components/TestimonialCard';

const TestimonialsSection = () => {
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

  return (
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
  );
};

export default TestimonialsSection;
