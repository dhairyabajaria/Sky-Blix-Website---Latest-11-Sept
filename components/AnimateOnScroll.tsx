import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

interface AnimateOnScrollProps {
    children: React.ReactNode;
    animation?: string;
    className?: string;
    threshold?: number;
    stagger?: number; // in ms
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
    children,
    animation = 'animate-scroll-fade-in',
    className = '',
    threshold = 0.2,
    stagger = 0
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const onScreen = useOnScreen(ref, { threshold, triggerOnce: true });

    const style: React.CSSProperties = {
        animationDelay: `${stagger}ms`,
    };

    // Add will-change property for performance optimization before the element is visible
    if (!onScreen) {
        style.willChange = 'transform, opacity';
    }

    return (
        <div
            ref={ref}
            style={style}
            className={`${className} ${onScreen ? animation : 'opacity-0'}`}
        >
            {children}
        </div>
    );
};

export default AnimateOnScroll;
