import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type FallingPatternProps = React.ComponentProps<'div'> & {
  /** Primary color of the falling elements (default: 'var(--primary)') */
  color?: string;
  /** Background color (default: 'var(--background)') */
  backgroundColor?: string;
  /** Animation duration in seconds (default: 150) */
  duration?: number;
  /** Blur intensity for the overlay effect (default: '1em') */
  blurIntensity?: string;
  /** Pattern density - affects spacing (default: 1) */
  density?: number;
};

export function FallingPattern({
  color = 'rgba(56, 189, 248, 0.25)', // Soft blue for dark mode
  backgroundColor = 'transparent',
  duration = 150,
  blurIntensity = '0.5em',
  density = 1,
  className,
}: FallingPatternProps) {
  // Generate background image style with customizable color
  const generateBackgroundImage = () => {
    const patterns = [
      // Reduced patterns for better performance
      `radial-gradient(4px 100px at 0px 235px, ${color}, transparent)`,
      `radial-gradient(1.5px 1.5px at 150px 117.5px, ${color} 100%, transparent 150%)`,
      `radial-gradient(4px 100px at 0px 252px, ${color}, transparent)`,
      `radial-gradient(1.5px 1.5px at 150px 126px, ${color} 100%, transparent 150%)`,
      `radial-gradient(4px 100px at 0px 150px, ${color}, transparent)`,
      `radial-gradient(1.5px 1.5px at 150px 75px, ${color} 100%, transparent 150%)`,
      `radial-gradient(4px 100px at 0px 253px, ${color}, transparent)`,
      `radial-gradient(1.5px 1.5px at 150px 126.5px, ${color} 100%, transparent 150%)`,
    ];

    return patterns.join(', ');
  };

  const backgroundSizes = [
    '300px 235px',
    '300px 235px',
    '300px 252px',
    '300px 252px',
    '300px 150px',
    '300px 150px',
    '300px 253px',
    '300px 253px',
  ].join(', ');

  const startPositions =
    '0px 220px, 151.5px 337.5px, 25px 24px, 176.5px 150px, 50px 16px, 201.5px 91px, 75px 224px, 226.5px 230.5px';
  const endPositions =
    '0px 6800px, 151.5px 6917.5px, 25px 13632px, 176.5px 13758px, 50px 5416px, 201.5px 5491px, 75px 17175px, 226.5px 17301.5px';
  
  return (
    <div className={cn('absolute inset-0 h-full w-full pointer-events-none', className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-full w-full"
      >
        <motion.div
          className="relative h-full w-full z-0"
          style={{
            backgroundColor,
            backgroundImage: generateBackgroundImage(),
            backgroundSize: backgroundSizes,
            willChange: 'background-position',
          }}
          variants={{
            initial: {
              backgroundPosition: startPositions,
            },
            animate: {
              backgroundPosition: [startPositions, endPositions],
              transition: {
                duration: duration,
                ease: 'linear',
                repeat: Number.POSITIVE_INFINITY,
              },
            },
          }}
          initial="initial"
          animate="animate"
        />
      </motion.div>
      <div
        className="absolute inset-0 z-1"
        style={{
          backdropFilter: `blur(${blurIntensity})`,
          WebkitBackdropFilter: `blur(${blurIntensity})`,
          backgroundImage: backgroundColor !== 'transparent' ? `radial-gradient(circle at 50% 50%, transparent 0, transparent 2px, ${backgroundColor} 2px)` : 'none',
          backgroundSize: `${8 * density}px ${8 * density}px`,
          maskImage: 'radial-gradient(ellipse at top center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at top center, black, transparent 80%)',
        }}
      />
    </div>
  );
}
