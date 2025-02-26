import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface AniProps {
  src?: string;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  speed?: number;
}

const Ani: React.FC<AniProps> = ({ 
  src = "https://lottie.host/740d4246-6e01-49e7-8df8-39003cc0251c/bXurA3kL7l.lottie", 
  loop = true, 
  autoplay = true,
  className = "w-full h-full",
  speed = 1
}) => {
  return (
    <div className={className}>
      <DotLottieReact
        src={src}
        loop={loop}
        autoplay={autoplay}
        speed={speed}
      />
    </div>
  );
};

export default Ani;