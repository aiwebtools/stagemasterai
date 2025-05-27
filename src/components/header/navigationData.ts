
export const navigationLinks = [
  { name: 'Theater Set Design GPT', href: 'https://chatgpt.com/g/g-67cde1ee39748191b7b3721323131801-theater-set-design-gpt' },
  { name: 'Costume Design GPT', href: 'https://chatgpt.com/g/g-67cde23ac77081918dfbfb17831e408d-costume-design-gpt' },
  { name: 'Choreography GPT', href: 'https://chatgpt.com/g/g-67cde6205164819189f48fefadc02991-choreography-gpt' },
  { name: 'Stage Lighting GPT', href: 'https://chatgpt.com/g/g-67cde71b4f208191836a7db7efb9f1d2-stage-lighting-gpt' },
  { name: 'Playwriter GPT', href: 'https://playwritergpt.lovable.app/' },
  { name: 'Movie Script Writer GPT', href: 'https://moviescriptwritergpt.lovable.app/' },
  { name: 'Movie Scene Maker GPT', href: 'https://moviescenemakergpt.lovable.app/?via=aiwebtools' },
  { name: 'Movie Maker AI Studio', href: 'https://moviemakerstudio.lovable.app/?via=aiwebtools' },
  { name: 'Music Video Maker GPT', href: 'https://musicvideomakergpt.lovable.app/?via=aiwebtools' },
  { name: 'More AI Tools', href: 'https://www.aiwebtools.ai' },
];

export const groupedLinks = [
  {
    category: 'Theater GPTs',
    links: [...navigationLinks.slice(0, 4), navigationLinks[4]], // Include Playwriter GPT
  },
  {
    category: 'Script Writing GPTs',
    links: [navigationLinks[4], navigationLinks[5]], // Include Playwriter GPT here too
  },
  {
    category: 'Movie & Commercial Creation',
    links: [
      navigationLinks[7], // Movie Maker AI Studio - now first
      navigationLinks[6], // Movie Scene Maker GPT
      navigationLinks[8], // Music Video Maker GPT
    ],
  }
];
