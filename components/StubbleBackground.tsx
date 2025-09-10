import React, { useMemo } from 'react';

const Stubble: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
    <div className="absolute bottom-0 w-[1px] origin-bottom bg-gradient-to-t from-brand-cyan/30 via-brand-cyan/10 to-transparent" style={style} />
);

const StubbleBackground: React.FC = () => {
    const stubbleCount = 250;
    const stubbles = useMemo(() => Array.from({ length: stubbleCount }).map((_, i) => {
        const height = Math.random() * 80 + 20; // 20px to 100px
        const left = `${(i / stubbleCount) * 100 + Math.random() * 0.4 - 0.2}%`; // Distribute evenly with a little jitter
        
        const swayDuration = Math.random() * 8 + 6; // 6s to 14s
        const swayDelay = Math.random() * -14;
        
        const fadeDuration = Math.random() * 10 + 8; // 8s to 18s
        const fadeDelay = Math.random() * -18;

        return <Stubble key={i} style={{
            height: `${height}px`,
            left: left,
            animation: `stubbleSway ${swayDuration}s ease-in-out ${swayDelay}s infinite alternate, stubbleFade ${fadeDuration}s linear ${fadeDelay}s infinite`,
            willChange: 'transform, opacity',
        }} />;
    }), []);

    return (
        <div className="fixed inset-0 -z-40 overflow-hidden" aria-hidden="true">
            {stubbles}
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-brand-dark to-transparent"></div>
        </div>
    );
};

export default StubbleBackground;