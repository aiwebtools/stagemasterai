
import React from 'react';
import YouTubeEmbed from '@/components/YouTubeEmbed';

const VideoSection = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <YouTubeEmbed videoId="-QIxYSlcRWM" title="StageMaster AI Suite Demo" />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
