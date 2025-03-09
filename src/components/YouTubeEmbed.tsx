
import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
}

const YouTubeEmbed = ({ videoId, title = "YouTube video" }: YouTubeEmbedProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleIframeLoad = () => {
    setIsLoaded(true);
  };

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden glass-card">
      {!isPlaying && (
        <div 
          className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center cursor-pointer z-10"
          onClick={handlePlayClick}
        >
          <div className="w-16 h-16 rounded-full bg-stage-gold flex items-center justify-center animate-pulse-glow">
            <Play size={24} className="text-stage-dark ml-1" />
          </div>
        </div>
      )}
      
      <div className={`absolute inset-0 ${!isLoaded && isPlaying ? 'flex items-center justify-center' : ''}`}>
        {!isLoaded && isPlaying && (
          <div className="w-10 h-10 border-4 border-stage-gold border-t-transparent rounded-full animate-spin"></div>
        )}
        
        {isPlaying && (
          <iframe 
            width="100%" 
            height="100%" 
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&si=vcFnAVMd36Avmpv4`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="absolute inset-0"
            onLoad={handleIframeLoad}
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default YouTubeEmbed;
