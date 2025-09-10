import React, { useMemo } from 'react';

interface ParticleBackgroundProps {
    count: number;
    particleColors: string[];
    animationType: 'flow' | 'twinkle';
}

const Particle: React.FC<{ style: React.CSSProperties, className: string }> = ({ style, className }) => (
    <div className={`absolute rounded-full ${className}`} style={style} />
);

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ count, particleColors, animationType }) => {
    const particles = useMemo(() => {
        return Array.from({ length: count }).map((_, i) => {
            // 1. Introduce a depth factor (0 = far, 1 = close)
            const depth = Math.random();

            // 2. Vary properties based on depth
            // Size: Closer particles are larger
            const size = 0.5 + depth * 2; // Varies from 0.5px to 2.5px

            // Opacity: Closer particles are more opaque
            const opacity = 0.2 + depth * 0.7; // Varies from 0.2 to 0.9

            const animationClass = animationType === 'flow' ? 'animate-particle-flow' : 'animate-star-twinkle';

            // Duration: Closer particles move faster (shorter duration)
            const duration = animationType === 'flow'
                ? 45 - depth * 30 // Slower (45s) for far, faster (15s) for close
                : 6 - depth * 4; // 2s to 6s for twinkle

            const delay = Math.random() * -duration;
            const randomColor = particleColors[Math.floor(Math.random() * particleColors.length)];

            const style: React.CSSProperties = {
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: animationType === 'flow' ? '100%' : `${Math.random() * 100}%`, // Start at bottom for flow
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
                opacity: opacity, // Apply individual opacity
                willChange: 'transform, opacity',
                // @ts-ignore - custom properties for animation
                '--particle-scale-start': (0.2 + depth * 0.3).toFixed(2), // Scale starts smaller for farther particles
                '--particle-scale-end': (0.8 + depth * 0.4).toFixed(2),   // Scale ends larger for closer particles
            };

            return <Particle key={i} style={style} className={`${randomColor} ${animationClass}`} />;
        });
    }, [count, particleColors, animationType]);

    return (
        // Remove global opacity, rely on individual particle opacity
        <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
            {particles}
        </div>
    );
};

export default ParticleBackground;