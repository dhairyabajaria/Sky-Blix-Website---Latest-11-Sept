import React, { useState, useEffect, useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import AnimateOnScroll from '../components/AnimateOnScroll';

// --- Page-Specific Components ---

const GlassShineTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <h1 className="relative inline-block text-6xl md:text-8xl font-orbitron font-extrabold tracking-wider text-white overflow-hidden py-2 select-none">
            {children}
            <span aria-hidden="true" className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-glass-shine" style={{ mixBlendMode: 'color-dodge' }}></span>
        </h1>
    )
}

const FounderPortrait: React.FC = () => {
    return (
        <div className="w-64 h-80 md:w-80 md:h-96 animate-subtle-float" style={{ perspective: '1000px' }}>
            <div className="relative w-full h-full animate-rotate-3d" style={{ transformStyle: 'preserve-3d' }}>
                <div className="absolute inset-0 border-4 border-cyan-400/50 rounded-lg shadow-2xl shadow-cyan-500/20" style={{ transform: 'translateZ(20px)' }}></div>
                <div className="absolute inset-0 bg-brand-blue/80 rounded-lg overflow-hidden">
                    <img src="https://source.unsplash.com/400x600/?portrait,ceo,tech" alt="Founder Portrait Placeholder" className="w-full h-full object-cover opacity-40" />
                </div>
                 <div className="absolute inset-4 border-2 border-cyan-400/30 rounded-md" style={{ transform: 'translateZ(-20px)' }}></div>
            </div>
        </div>
    );
};

// --- Page Data ---

const teamValues = [
    { 
        name: 'Innovation', 
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V8.25a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 8.25v7.5A2.25 2.25 0 0 0 6.75 18Z" />,
        description: "We relentlessly pursue groundbreaking solutions, integrating AI, robotics, and biology to solve humanity's greatest challenges."
    },
    { 
        name: 'Sustainability', 
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M13 10.75 16.25 8 13 5.25m-6 0L3.75 8 7 10.75m1.5-6-1.5 6m4.5-6-1.5 6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
        description: "Our commitment to the planet is absolute. We engineer closed-loop systems that minimize waste and maximize resource efficiency."
    },
    { 
        name: 'Wellness', 
        icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 13.5v-3m-1.5 1.5h3" /></>,
        description: "We believe in holistic well-being, creating products that enhance physical vitality, mental clarity, and overall quality of life."
    },
    { 
        name: 'Future Living', 
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />,
        description: "We are architects of a better tomorrow, designing technologies that enable smarter, healthier, and more harmonious urban environments."
    },
];

const timelineEvents = [
    { year: '2021', title: 'The Seed of an Idea', description: 'The concept of Sky Blix was born from a vision to integrate technology with nature for global challenges.', align: 'left' },
    { year: '2022', title: 'First Prototype', description: 'Our SKY-Ponics prototype demonstrated a 95% reduction in water usage compared to traditional farming.', align: 'right' },
    { year: '2023', title: 'PrakritiVriksha Launch', description: 'We unveiled our revolutionary solution to urban air pollution, PrakritiVriksha, in major metropolitan areas.', align: 'left' },
    { year: '2024', title: 'Expanding Horizons', description: 'Launched our Nutraceuticals and VitalAir lines, bringing our seed-to-supplement promise to consumers.', align: 'right' },
];

// --- Type definition for a single value object ---
type TeamValue = typeof teamValues[0];

interface HexagonValueCardProps {
  valueData: TeamValue;
  onClick: () => void;
  isActive: boolean;
}

const HexagonValueCard: React.FC<HexagonValueCardProps> = ({ valueData, onClick, isActive }) => {
    const shineRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = () => {
        const el = shineRef.current;
        if (el) {
            el.classList.remove('animate-hexagon-shine');
            void el.offsetWidth; // Trigger a reflow
            el.classList.add('animate-hexagon-shine');
        }
    };

    return (
        <div 
            className="group relative w-52 h-60 flex items-center justify-center text-center transition-transform duration-500 hover:-translate-y-2 cursor-pointer"
            style={{ perspective: '1000px' }}
            onMouseEnter={handleMouseEnter}
            onClick={onClick}
            onKeyPress={(e) => e.key === 'Enter' && onClick()}
            aria-pressed={isActive}
            role="button"
            tabIndex={0}
        >
            <div 
                className={`absolute inset-0 bg-brand-blue/50 border transition-all duration-500 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] ${isActive ? 'border-brand-cyan shadow-[0_0_25px_rgba(34,211,238,0.4)]' : 'border-cyan-400/20'}`}
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
            >
                {/* Metallic shine pseudo-element effect */}
                <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                   <div ref={shineRef} className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent to-white/20" style={{ transform: 'translateX(-150%) skewX(-25deg)' }}></div>
                </div>
            </div>

            <div className="relative z-10 transition-transform duration-500" style={{ transformStyle: 'preserve-3d' }}>
                <div className="text-brand-cyan mb-3 transition-transform duration-500 group-hover:[transform:translateZ(25px)]">
                    <svg className="w-10 h-10 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">{valueData.icon}</svg>
                </div>
                <span className="font-orbitron text-xl font-bold transition-transform duration-500 group-hover:[transform:translateZ(25px)]">{valueData.name}</span>
            </div>
        </div>
    );
};


const AboutPage: React.FC = () => {
    const [selectedValue, setSelectedValue] = useState<TeamValue | null>(null);

    return (
        <div className="overflow-x-hidden">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center text-center relative animate-fade-in-up">
                <div className="absolute inset-0 bg-brand-dark/70"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
                        <GlassShineTitle>Our Story</GlassShineTitle>
                        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: '500ms' }}>
                            We are pioneers on a mission to reshape the future of agriculture, wellness, and environmental sustainability through groundbreaking technology.
                        </p>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-24 bg-brand-dark">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
                        <AnimateOnScroll animation="animate-slide-in-from-left">
                           <FounderPortrait />
                        </AnimateOnScroll>
                        <div className="lg:w-1/2">
                            <AnimateOnScroll animation="animate-slide-in-from-right">
                                <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-brand-cyan animate-glow">Dhairya Bajaria: The Founder's Story</h2>
                                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                    <strong>Dhairya Bajaria</strong> is the Founder and CEO of SKY BLIX AGRO SCIENCE. His unique background blends deep agricultural roots with advanced financial and technological expertise, making him the driving force behind the company's vision.
                                </p>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-orbitron text-white mb-2">Academic Expertise</h3>
                                        <ul className="list-disc list-inside space-y-1 pl-2 text-gray-400">
                                            <li><strong>M.Com</strong> from the <strong>University of Mumbai</strong></li>
                                            <li><strong>MS in Finance</strong> from <strong>NMIMS</strong></li>
                                            <li>Management program in FinTech from <strong>IIM Ahmedabad</strong></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-orbitron text-white mb-2">Mission-Driven Vision</h3>
                                        <p className="text-gray-400">
                                            Coming from a family with an agricultural background, he witnessed the daily challenges faced by farmers firsthand. This experience fueled his mission to modernize Indian farming by integrating advanced technologies like <strong>AI</strong>, <strong>ML</strong>, <strong>Robotics</strong>, and <strong>IoT</strong> to improve efficiency, sustainability, and yields.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-orbitron text-white mb-2">Official Role</h3>
                                        <p className="text-gray-400">
                                            As a director of Sky Blix Agro Science Private Limited, Dhairya officially leads the company's mission to revolutionize agriculture in India.
                                        </p>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Team Values Section */}
            <section className="py-24 bg-brand-blue/30">
                <div className="container mx-auto px-6 text-center">
                    <AnimateOnScroll>
                        <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-20">Our Core Values</h2>
                    </AnimateOnScroll>
                    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-12">
                        {teamValues.map((value, i) => (
                           <AnimateOnScroll key={value.name} stagger={i * 150}>
                             <HexagonValueCard 
                                valueData={value} 
                                onClick={() => setSelectedValue(value)}
                                isActive={selectedValue?.name === value.name}
                             />
                           </AnimateOnScroll>
                        ))}
                    </div>
                    
                    <div className="mt-16 max-w-2xl mx-auto min-h-[150px]">
                        {selectedValue && (
                            <AnimateOnScroll key={selectedValue.name} animation="animate-fade-in-up" className="text-center">
                                <div className="bg-brand-blue/30 border border-cyan-400/20 p-6 rounded-xl">
                                    <h3 className="text-2xl font-orbitron font-bold text-brand-cyan mb-2">{selectedValue.name}</h3>
                                    <p className="text-gray-300 text-lg">{selectedValue.description}</p>
                                </div>
                            </AnimateOnScroll>
                        )}
                    </div>
                </div>
            </section>

            {/* Milestones Timeline Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <AnimateOnScroll className="text-center mb-20">
                         <h2 className="text-4xl md:text-5xl font-orbitron font-bold">Our Journey</h2>
                    </AnimateOnScroll>
                    <div className="relative max-w-3xl mx-auto">
                        <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-cyan-400/20 md:-translate-x-1/2" aria-hidden="true"></div>
                        
                        {timelineEvents.map((event, i) => (
                            <div key={i} className={`relative pl-12 md:pl-0 mb-16 flex items-center ${event.align === 'left' ? 'md:justify-start' : 'md:justify-end'}`}>
                                 <div className={`w-full md:w-1/2 ${event.align === 'left' ? 'md:pr-8 md:text-right' : 'md:pl-8 text-left'}`}>
                                    <AnimateOnScroll stagger={i * 200}>
                                        <div className="bg-brand-blue/50 p-6 rounded-lg border border-cyan-400/20 shadow-lg">
                                            <p className="font-orbitron text-brand-cyan text-xl font-bold mb-1">{event.year}</p>
                                            <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                                            <p className="text-gray-400 text-sm">{event.description}</p>
                                        </div>
                                    </AnimateOnScroll>
                                </div>
                                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                                    <AnimateOnScroll threshold={0.8} stagger={i * 200}>
                                        <div className="w-6 h-6 rounded-full bg-brand-cyan ring-4 ring-brand-dark shadow-[0_0_20px_theme(colors.brand-cyan)]"></div>
                                    </AnimateOnScroll>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;