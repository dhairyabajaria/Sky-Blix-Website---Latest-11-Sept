import React, { useRef, useState, useMemo, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { innovationsData } from '../constants';
import type { Innovation } from '../types';
import { useOnScreen } from '../hooks/useOnScreen';
import AnimateOnScroll from '../components/AnimateOnScroll';

// --- Reusable Components ---

const Section: React.FC<{children: React.ReactNode, className?: string}> = ({children, className}) => (
    <section className={`py-20 lg:py-24 ${className}`}>
        <div className="container mx-auto px-6">
            {children}
        </div>
    </section>
);

const PrimaryButton: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <Link
        to={href}
        className="inline-block bg-brand-cyan px-10 py-4 rounded-lg text-lg font-bold text-brand-dark hover:bg-opacity-80 hover:shadow-[0_0_20px_theme(colors.brand-cyan)] transition-all duration-300"
    >
        {children}
    </Link>
);

// --- SVG Icons ---

const CheckIcon: React.FC<any> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

const CrossIcon: React.FC<any> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);


// --- PrakritiVriksha Page ---

const PrakritiVrikshaPage: React.FC<{ innovation: Innovation }> = ({ innovation }) => {
    return (
        <div className="overflow-x-hidden">
            {/* Hero Section */}
            <section className="h-screen flex items-center justify-center text-center pt-20 relative isolate animate-fade-in-up overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-transparent"></div>
                <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${innovation.heroImage})` }}></div>
                <div className="container mx-auto px-6 relative z-10">
                    <img src="https://source.unsplash.com/400x400/?bioreactor,urban,futuristic,glowing" alt="PrakritiVriksha Pod" className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full object-cover border-4 border-brand-cyan/50 shadow-2xl shadow-brand-cyan/30 mb-8 animate-subtle-float" />
                    <h1 className="text-5xl md:text-7xl font-orbitron font-extrabold text-white animate-line-fade-in-up opacity-0">PrakritiVriksha</h1>
                    <p className="mt-4 text-xl md:text-2xl text-brand-cyan animate-line-fade-in-up opacity-0" style={{ animationDelay: '300ms' }}>A New Kind of Urban Forest</p>
                </div>
            </section>
            
            {/* Intro Section */}
            <Section>
                <AnimateOnScroll className="max-w-4xl mx-auto text-center">
                    <p className="text-xl text-gray-300 leading-relaxed">
                        What if a single, beautifully designed pod could clean the air, fight malnutrition, and become a living part of our urban landscape? Introducing <strong>PrakritiVriksha</strong>, our urban photobioreactor that harnesses the power of microalgae to build a healthier city, breath by breath. It is a fusion of technology and nature, an intelligent solution for our most pressing urban challenges.
                    </p>
                </AnimateOnScroll>
            </Section>

            {/* How It Works Section */}
            <Section className="bg-brand-dark">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <AnimateOnScroll animation="animate-slide-in-from-left">
                        <img src="https://source.unsplash.com/1024x768/?air,flow,abstract,blue" alt="Visualization of air purification" className="rounded-xl shadow-2xl shadow-cyan-900/30 w-full h-full object-cover"/>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="animate-slide-in-from-right">
                        <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">How It Works: The Urban Lungs</h2>
                        <p className="text-lg text-gray-400 leading-relaxed">
                           PrakritiVriksha is a highly efficient biological air purifier. The microalgae within the unit perform photosynthesis at a rapid rate, absorbing Carbon Dioxide (CO₂) from the surrounding atmosphere and releasing pure Oxygen (O₂) back into the environment. It is a powerful engine of change that works tirelessly for the health of our cities.
                        </p>
                    </AnimateOnScroll>
                </div>
            </Section>

            {/* Beyond Trees Section */}
            <Section>
                 <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <AnimateOnScroll animation="animate-slide-in-from-left">
                        <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">Beyond Trees: The Data-Driven Impact</h2>
                        <p className="text-lg text-gray-400 leading-relaxed mb-6">
                            While we believe in planting trees, PrakritiVriksha offers a solution for urban pockets where there is no space for traditional greening. It is more efficient, more compact, and more resilient.
                        </p>
                        <ul className="space-y-4 text-gray-300 text-lg">
                           <li className="flex items-start gap-3"><CheckIcon className="w-6 h-6 mt-1 text-brand-cyan shrink-0"/><span><strong>Superior Purification:</strong> A single 1000-liter unit can absorb up to <strong>0.75 kg of CO₂ and release up to 0.75 kg of O₂ per day</strong>.</span></li>
                           <li className="flex items-start gap-3"><CheckIcon className="w-6 h-6 mt-1 text-brand-cyan shrink-0"/><span><strong>Minimal Footprint:</strong> With a footprint of only <strong>1 m²</strong>, it provides a powerful air-purifying solution that is ideal for dense urban areas like roadsides, bus stops, and city squares.</span></li>
                           <li className="flex items-start gap-3"><CheckIcon className="w-6 h-6 mt-1 text-brand-cyan shrink-0"/><span><strong>Continuous Operation:</strong> Unlike trees, which are affected by weather and seasons, PrakritiVriksha functions as an air purifier continuously, regardless of the conditions.</span></li>
                        </ul>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="animate-slide-in-from-right">
                        <img src="https://source.unsplash.com/1024x768/?city,street,bus,stop" alt="Urban setting with a PrakritiVriksha unit" className="rounded-xl shadow-2xl shadow-cyan-900/30 w-full h-full object-cover"/>
                    </AnimateOnScroll>
                </div>
            </Section>

            {/* A Circle of Wellness Section */}
            <Section className="bg-brand-dark">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <AnimateOnScroll animation="animate-slide-in-from-left">
                         <img src="https://source.unsplash.com/1024x768/?children,school,happy,food" alt="Nourished children benefiting from spirulina" className="rounded-xl shadow-2xl shadow-cyan-900/30 w-full h-full object-cover"/>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="animate-slide-in-from-right">
                        <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">A Circle of Wellness: From Clean Air to Nourishment</h2>
                        <p className="text-lg text-gray-400 leading-relaxed mb-6">
                            The spirulina biomass that grows within the unit is not just an environmental byproduct; it’s a sustainable superfood with a powerful social purpose. We believe that a healthier planet and a healthier population go hand-in-hand.
                        </p>
                        <ul className="space-y-4 text-gray-300 text-lg">
                           <li className="flex items-start gap-3"><CheckIcon className="w-6 h-6 mt-1 text-brand-cyan shrink-0"/><span><strong>Combating Malnutrition:</strong> This nutrient-rich spirulina can be used to improve the physical growth and cognitive development of school children, strengthening their immune systems and enhancing their ability to learn.</span></li>
                           <li className="flex items-start gap-3"><CheckIcon className="w-6 h-6 mt-1 text-brand-cyan shrink-0"/><span><strong>Creating Awareness:</strong> The visible presence of PrakritiVriksha units in public spaces sparks conversations about environmental responsibility and showcases an innovative solution for urban sustainability.</span></li>
                        </ul>
                    </AnimateOnScroll>
                </div>
            </Section>

             {/* CTA Section */}
            <Section className="text-center bg-brand-blue/50">
                <AnimateOnScroll>
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">Be a Part of the Solution</h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">Ready to transform your urban environment? Let's discuss how PrakritiVriksha can help your city, corporation, or campus breathe easier.</p>
                    <PrimaryButton href="/contact">Bring PrakritiVriksha to Your City</PrimaryButton>
                </AnimateOnScroll>
            </Section>
        </div>
    );
};

// --- Agriculture Page Specific Components ---

const WaterIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.287 8.287 0 0 0 3-2.553Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v.01M16.5 21v-6.75a4.5 4.5 0 0 0-7.63-3.32M10.5 3.75 12 3m0 0 1.5.75M12 3v.01" /></svg>;
const GrowthIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.82m5.84-2.56a12.022 12.022 0 0 0-5.84 0m5.84 0a11.96 11.96 0 0 1 2.07 5.83m-10.04-5.83a11.96 11.96 0 0 0-2.07 5.83m10.04-5.83 2.07-5.83a11.96 11.96 0 0 0-10.04 0l2.07 5.83m-2.07 0-2.07-5.83m14.18 5.83 2.07 5.83M5.93 14.37l-2.07 5.83m0 0a11.96 11.96 0 0 1 2.07-5.83M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75Z" /></svg>;
const LandIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>;
const TraditionalLandIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18" /></svg>;

const InteractiveComparison: React.FC = () => {
    type Metric = 'water' | 'growth' | 'land';
    const [selectedMetric, setSelectedMetric] = useState<Metric>('water');

    const metrics: { id: Metric; name: string }[] = [
        { id: 'water', name: 'Water Usage' },
        { id: 'growth', name: 'Growth Speed' },
        { id: 'land', name: 'Land Footprint' },
    ];
    
    const comparisonData = {
        water: {
            skyPonics: { value: '95%', sub: 'Less Water', description: 'Our closed-loop system recycles water, using only a fraction of what traditional farms need.' },
            traditional: { value: '100%', sub: 'Standard Usage', description: 'Relies on extensive irrigation, leading to significant water consumption and runoff.' }
        },
        growth: {
            skyPonics: { value: '2X', sub: 'Faster Growth', description: 'Perfectly controlled nutrients and environment accelerate plant growth cycles.' },
            traditional: { value: '1X', sub: 'Standard Growth', description: 'Growth is subject to seasons, weather, and soil quality.' }
        },
        land: {
            skyPonics: { value: '99%', sub: 'Less Land', description: 'Vertical farming allows us to grow more in a smaller, multi-level footprint.' },
            traditional: { value: '100%', sub: 'Acres of Land', description: 'Requires vast, flat areas of arable land for cultivation.' }
        }
    };

    const currentData = comparisonData[selectedMetric];

    const Visualizer: React.FC<{ metric: Metric }> = ({ metric }) => {
        const skyPonicsVisual = useMemo(() => {
            switch (metric) {
                case 'water': return <div className="h-40 w-full bg-brand-dark/50 rounded-lg flex flex-col-reverse p-2"><div className="bg-brand-cyan rounded transition-all duration-700 ease-out" style={{ height: '5%' }}></div></div>;
                case 'growth': return <GrowthIcon />;
                case 'land': return <LandIcon />;
                default: return null;
            }
        }, [metric]);
        
        const traditionalVisual = useMemo(() => {
            switch (metric) {
                case 'water': return <div className="h-40 w-full bg-brand-dark/50 rounded-lg flex flex-col-reverse p-2"><div className="bg-white/50 rounded transition-all duration-700 ease-out" style={{ height: '100%' }}></div></div>;
                case 'growth': return <GrowthIcon />;
                case 'land': return <TraditionalLandIcon />;
                default: return null;
            }
        }, [metric]);

        return (
            <div key={metric} className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center animate-fade-in-up">
                {/* SKY-Ponics Column */}
                <div className="bg-brand-blue/50 p-6 rounded-xl border border-cyan-400/30">
                    <h4 className="text-2xl font-orbitron text-brand-cyan mb-4">SKY-Ponics</h4>
                    <div className="text-cyan-300 transition-opacity duration-300 mb-4">{skyPonicsVisual}</div>
                    <p className="text-5xl font-orbitron font-bold">{currentData.skyPonics.value}</p>
                    <p className="text-lg text-gray-300 mb-4">{currentData.skyPonics.sub}</p>
                    <p className="text-sm text-gray-400 min-h-[3rem]">{currentData.skyPonics.description}</p>
                </div>
                {/* Traditional Farming Column */}
                 <div className="bg-brand-blue/30 p-6 rounded-xl border border-white/10">
                    <h4 className="text-2xl font-orbitron text-white mb-4">Traditional Farming</h4>
                    <div className="text-gray-400 transition-opacity duration-300 mb-4" style={{opacity: metric === 'growth' ? 0.5 : 1}}>{traditionalVisual}</div>
                    <p className="text-5xl font-orbitron font-bold">{currentData.traditional.value}</p>
                    <p className="text-lg text-gray-300 mb-4">{currentData.traditional.sub}</p>
                    <p className="text-sm text-gray-400 min-h-[3rem]">{currentData.traditional.description}</p>
                </div>
            </div>
        );
    };

    return (
        <AnimateOnScroll className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">The SKY BLIX Difference</h3>
            <p className="text-lg text-gray-400 mb-12">
                Our technology isn't just an improvement; it's a revolution. See how SKY-Ponics stacks up against traditional methods.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
                {metrics.map(metric => (
                    <button
                        key={metric.id}
                        onClick={() => setSelectedMetric(metric.id)}
                        className={`px-6 py-2 rounded-lg font-bold text-lg border-2 transition-all duration-300 ${selectedMetric === metric.id ? 'bg-brand-cyan text-brand-dark border-brand-cyan' : 'bg-transparent border-white/30 hover:border-brand-cyan/50 hover:text-brand-cyan'}`}
                    >
                        {metric.name}
                    </button>
                ))}
            </div>
            <Visualizer metric={selectedMetric} />
        </AnimateOnScroll>
    );
};

// --- Agriculture Page ---

const AgriculturePage: React.FC<{ innovation: Innovation }> = ({ innovation }) => {
    return (
        <div className="overflow-x-hidden">
            {/* Hero Section */}
            <section className="h-screen flex items-center justify-center text-center pt-20 relative isolate animate-fade-in-up overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-transparent"></div>
                <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${innovation.heroImage})` }}></div>
                <div className="container mx-auto px-6 relative z-10">
                    <img src="https://source.unsplash.com/400x400/?hydroponics,glowing,plant,futuristic" alt="Futuristic Hydroponics" className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full object-cover border-4 border-brand-cyan/50 shadow-2xl shadow-brand-cyan/30 mb-8 animate-subtle-float" />
                    <h1 className="text-5xl md:text-7xl font-orbitron font-extrabold text-white animate-line-fade-in-up opacity-0">{innovation.name}</h1>
                    <p className="mt-4 text-xl md:text-2xl text-brand-cyan animate-line-fade-in-up opacity-0" style={{ animationDelay: '300ms' }}>{innovation.tagline}</p>
                </div>
            </section>

            {/* Intro Section */}
            <Section>
                <AnimateOnScroll className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-brand-cyan mb-6">Agriculture: Our Blueprint for a Better World</h2>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        This is not farming as you know it. It's a new era of cultivation where nature is perfected by intelligence, and every harvest is a masterpiece of precision.
                    </p>
                </AnimateOnScroll>
            </Section>

            {/* The Habitat Section */}
            <Section className="bg-brand-dark">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <AnimateOnScroll animation="animate-slide-in-from-left">
                        <img src="https://source.unsplash.com/1024x768/?biodome,futuristic,interior" alt="Sealed farming habitat" className="rounded-xl shadow-2xl shadow-cyan-900/30 w-full h-full object-cover"/>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="animate-slide-in-from-right">
                        <h3 className="text-3xl font-orbitron font-bold mb-4">The Habitat: Farming in a Sealed Ecosystem</h3>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            Forget the unpredictability of weather, soil, and pests. We've designed a patented, sealed <strong>"Habitat"</strong> that controls every variable for plant growth. An array of sensors monitors over <strong>50 measurable variables</strong> from temperature and humidity to CO₂ levels, creating the perfect, repeatable environment for any crop.
                        </p>
                    </AnimateOnScroll>
                </div>
            </Section>

            {/* SKY-Ponics Section */}
            <Section>
                 <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <AnimateOnScroll animation="animate-slide-in-from-left">
                        <h3 className="text-3xl font-orbitron font-bold mb-4">Introducing SKY-Ponics: The Science of Soilless Growth</h3>
                        <p className="text-lg text-gray-400 leading-relaxed mb-6">
                            At the heart of our Habitat is <strong>SKY-Ponics</strong>, our revolutionary method of agriculture. Instead of soil, plant roots are suspended in air and continuously irrigated with purified, nutrient-rich water. This isn't just a new way to grow; it's the optimal way.
                        </p>
                        <ul className="space-y-4 text-gray-300 text-lg">
                           <li className="flex items-start gap-3"><CheckIcon className="w-6 h-6 mt-1 text-brand-cyan shrink-0"/><span><strong>95% Less Water:</strong> We use dramatically less water because it's delivered directly to the root, with no waste or runoff.</span></li>
                           <li className="flex items-start gap-3"><CheckIcon className="w-6 h-6 mt-1 text-brand-cyan shrink-0"/><span><strong>Contamination-Free:</strong> Bypassing soil eliminates the risk of heavy metals, pesticides, and microbial contaminants.</span></li>
                           <li className="flex items-start gap-3"><CheckIcon className="w-6 h-6 mt-1 text-brand-cyan shrink-0"/><span><strong>Up to 50% Faster Growth:</strong> By providing plants with everything they need, exactly when they need it, we enable them to mature at an accelerated, yet completely natural, pace.</span></li>
                        </ul>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="animate-slide-in-from-right">
                        <img src="https://source.unsplash.com/1024x768/?aeroponics,roots,mist" alt="Plant roots in a SKY-Ponics system" className="rounded-xl shadow-2xl shadow-cyan-900/30 w-full h-full object-cover"/>
                    </AnimateOnScroll>
                </div>
            </Section>
            
            {/* Intelligence Section */}
            <Section className="bg-brand-dark">
                 <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <AnimateOnScroll animation="animate-slide-in-from-left">
                         <img src="https://source.unsplash.com/1024x768/?robot,arm,plant,futuristic" alt="Robotic arm tending to plants" className="rounded-xl shadow-2xl shadow-cyan-900/30 w-full h-full object-cover"/>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="animate-slide-in-from-right">
                        <h3 className="text-3xl font-orbitron font-bold mb-4">Intelligence on the Farm</h3>
                        <p className="text-lg text-gray-400 leading-relaxed mb-6">
                           Our habitats are fully autonomous. We've integrated the most advanced technologies to ensure a perfect harvest, every single time.
                        </p>
                        <ul className="space-y-4 text-gray-300 text-lg">
                           <li className="flex items-start gap-3"><CheckIcon className="w-6 h-6 mt-1 text-brand-cyan shrink-0"/><span><strong>Artificial Intelligence:</strong> Our AI is so capable it can control all environmental variables and detect and cure plant diseases before they can spread.</span></li>
                           <li className="flex items-start gap-3"><CheckIcon className="w-6 h-6 mt-1 text-brand-cyan shrink-0"/><span><strong>Robotics:</strong> From sowing the first seed to harvesting the final product, advanced robotics handle the entire process. This allows for new crops to be planted in minutes, not hours.</span></li>
                           <li className="flex items-start gap-3"><CheckIcon className="w-6 h-6 mt-1 text-brand-cyan shrink-0"/><span><strong>Advanced Imaging:</strong> Every plant is scanned daily by <strong>LiDAR and infrared cameras</strong>. Our computer vision systems capture millions of data points to reveal details invisible to the human eye, ensuring the health and quality of every single plant.</span></li>
                        </ul>
                    </AnimateOnScroll>
                </div>
            </Section>

            {/* The Difference Section */}
            <Section>
                <InteractiveComparison />
            </Section>

            {/* CTA Section */}
            <Section className="text-center bg-brand-blue/50">
                <AnimateOnScroll>
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">Partner With The Future of Food</h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">Join us in supplying premium, pure produce to restaurants, corporate campuses, and institutions. Let's build a sustainable food ecosystem together.</p>
                    <PrimaryButton href="/contact">Partner With Us</PrimaryButton>
                </AnimateOnScroll>
            </Section>
        </div>
    );
};

// --- Spirulina Page Specific Components ---

const SpirulinaBenefitCard: React.FC<{ icon: React.ReactNode, title: string, children: React.ReactNode, stagger: number }> = ({ icon, title, children, stagger }) => (
    <AnimateOnScroll stagger={stagger} className="bg-brand-blue/30 border border-cyan-400/20 rounded-xl p-6 text-center backdrop-blur-sm">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-cyan/10 flex items-center justify-center border-2 border-brand-cyan/30 text-brand-cyan">
            {icon}
        </div>
        <h3 className="text-2xl font-orbitron font-bold mb-3">{title}</h3>
        <p className="text-gray-400">{children}</p>
    </AnimateOnScroll>
);

const ProcessStep: React.FC<{ icon: React.ReactNode, title: string, children: React.ReactNode, stagger: number, isLast?: boolean }> = ({ icon, title, children, stagger, isLast }) => (
    <div className="relative flex-1">
        <AnimateOnScroll stagger={stagger} className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-brand-blue border-2 border-brand-cyan flex items-center justify-center text-brand-cyan shadow-[0_0_15px_rgba(34,211,238,0.3)] z-10">
                {icon}
            </div>
            <h4 className="font-orbitron font-bold mt-4 mb-2 text-xl">{title}</h4>
            <p className="text-gray-400 text-sm max-w-[250px]">{children}</p>
        </AnimateOnScroll>
        {!isLast && <div aria-hidden="true" className="absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-brand-cyan via-brand-cyan/50 to-brand-cyan/0 hidden md:block"></div>}
    </div>
);

// --- Spirulina Page ---

const SpirulinaPage: React.FC<{ innovation: Innovation }> = ({ innovation }) => {
    type ProductType = 'powder' | 'capsule' | 'snack';
    const [selectedProduct, setSelectedProduct] = useState<ProductType>('powder');
    const processSectionRef = useRef<HTMLElement>(null);
    const visualizerRef = useRef<HTMLDivElement>(null);
    const isVisualizerOnScreen = useOnScreen(visualizerRef, { threshold: 0.4, triggerOnce: true });

    useEffect(() => {
        const handleScroll = () => {
            if (processSectionRef.current) {
                const rect = processSectionRef.current.getBoundingClientRect();
                const speed = 0.3; // Adjust for desired effect speed
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    const yOffset = rect.top * speed;
                    processSectionRef.current.style.backgroundPositionY = `${yOffset}px`;
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const nutritionData = {
        powder: [
            { name: 'Protein', value: 65, unit: 'g' },
            { name: 'Iron', value: 158, unit: '% DV' },
            { name: 'Vitamin B12', value: 220, unit: '% DV' },
            { name: 'Antioxidants', value: 90, unit: '/100' },
        ],
        capsule: [
            { name: 'Protein', value: 60, unit: 'g' },
            { name: 'Iron', value: 150, unit: '% DV' },
            { name: 'Vitamin B12', value: 210, unit: '% DV' },
            { name: 'Antioxidants', value: 85, unit: '/100' },
        ],
        snack: [
            { name: 'Protein', value: 25, unit: 'g' },
            { name: 'Iron', value: 60, unit: '% DV' },
            { name: 'Vitamin B12', value: 80, unit: '% DV' },
            { name: 'Carbohydrates', value: 40, unit: 'g' },
        ]
    };

    const currentData = nutritionData[selectedProduct];

    return (
        <div className="overflow-x-hidden">
            {/* Hero Section */}
            <section className="h-screen flex items-center justify-center text-center pt-20 relative isolate animate-fade-in-up overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-transparent"></div>
                <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${innovation.heroImage})` }}></div>
                <div className="container mx-auto px-6 relative z-10">
                    <img src="https://source.unsplash.com/400x400/?spirulina,petri,dish,glowing" alt="Spirulina Superfood" className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full object-cover border-4 border-brand-cyan/50 shadow-2xl shadow-brand-cyan/30 mb-8 animate-subtle-float" />
                    <h1 className="text-5xl md:text-7xl font-orbitron font-extrabold text-white animate-line-fade-in-up opacity-0">{innovation.name}</h1>
                    <p className="mt-4 text-xl md:text-2xl text-brand-cyan animate-line-fade-in-up opacity-0" style={{ animationDelay: '300ms' }}>{innovation.tagline}</p>
                </div>
            </section>
            
            {/* Intro Section */}
            <Section>
                <AnimateOnScroll className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-brand-cyan mb-6">Spirulina: The Future of Food is Here</h2>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        Spirulina has been called the future of food, a nutrient-rich superfood with incredible potential. But traditional open-pond cultivation is a thing of the past. At SKY BLIX, we've brought a new standard of purity and precision to spirulina with our high-tech, controlled-environment systems. We've replaced guesswork with precision, and contamination with confidence.
                    </p>
                </AnimateOnScroll>
            </Section>

            {/* Lifestyle Benefits Section */}
            <Section className="bg-brand-dark">
                <AnimateOnScroll className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold">Fuel Your Potential</h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-4">Discover the life-enhancing benefits of the planet's most nutrient-dense superfood, cultivated with ultimate purity.</p>
                </AnimateOnScroll>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <SpirulinaBenefitCard title="Sustained Energy" stagger={100} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>}>
                        Rich in iron and B-vitamins, our spirulina combats fatigue and supports high energy levels throughout your day, without the crash.
                    </SpirulinaBenefitCard>
                     <SpirulinaBenefitCard title="Enhanced Focus" stagger={200} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a.75.75 0 0 0 .75-.75V11.25a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 .75-.75ZM12 7.5a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-1.5 0V8.25A.75.75 0 0 1 12 7.5Z" /><path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0Z" clipRule="evenodd" /></svg>}>
                        Packed with amino acids that are precursors to neurotransmitters, spirulina helps sharpen mental clarity and cognitive function.
                    </SpirulinaBenefitCard>
                    <SpirulinaBenefitCard title="Robust Immunity" stagger={300} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>}>
                        A powerhouse of antioxidants and phycocyanin, it strengthens your immune system and protects cells from oxidative stress.
                    </SpirulinaBenefitCard>
                </div>
            </Section>
            
            {/* Pure from the Start Section */}
            <Section className="bg-brand-blue/30">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <AnimateOnScroll animation="animate-slide-in-from-left">
                        <img src="https://source.unsplash.com/1024x768/?water,vortex,clean" alt="Pure water vortex for spirulina cultivation" className="rounded-xl shadow-2xl shadow-cyan-900/30 w-full h-full object-cover"/>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="animate-slide-in-from-right">
                        <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">Pure from the Start</h2>
                        <p className="text-lg text-gray-400 leading-relaxed mb-6">
                            In a world full of unknowns, we offer a promise of absolute purity. Our spirulina is grown in a sealed, symbiotic ecosystem, meticulously monitored by a network of IoT sensors.
                        </p>
                        <ul className="space-y-4 text-gray-300 text-lg">
                           <li className="flex items-start gap-3"><CheckIcon className="w-6 h-6 mt-1 text-brand-cyan shrink-0"/><span><strong>Clean Water:</strong> We precisely control water quality, pH, and dissolved oxygen to create the perfect environment for spirulina to thrive.</span></li>
                           <li className="flex items-start gap-3"><CheckIcon className="w-6 h-6 mt-1 text-brand-cyan shrink-0"/><span><strong>Perfect Nutrients:</strong> Our automated systems precisely measure and dose essential nutrients, ensuring your spirulina gets everything it needs for optimal growth.</span></li>
                           <li className="flex items-start gap-3"><CheckIcon className="w-6 h-6 mt-1 text-brand-cyan shrink-0"/><span><strong>Controlled Light:</strong> We don’t rely on chance. We monitor light intensity and spectrum to give the spirulina the exact light it needs for maximum photosynthesis.</span></li>
                        </ul>
                    </AnimateOnScroll>
                </div>
            </Section>

            {/* Precision Powered by AI Section */}
            <Section>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <AnimateOnScroll animation="animate-slide-in-from-left">
                        <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">Precision Powered by AI</h2>
                        <p className="text-lg text-gray-400 leading-relaxed mb-6">
                            The data collected by our sensors is fed into our powerful AI and Machine Learning algorithms. This is where the true intelligence of our system lies.
                        </p>
                        <ul className="space-y-4 text-gray-300 text-lg">
                           <li className="flex items-start gap-3"><CheckIcon className="w-6 h-6 mt-1 text-brand-cyan shrink-0"/><span><strong>Predictive Analytics:</strong> Our AI can predict potential issues like nutrient deficiencies or imbalances before they even occur, allowing for preemptive adjustments.</span></li>
                           <li className="flex items-start gap-3"><CheckIcon className="w-6 h-6 mt-1 text-brand-cyan shrink-0"/><span><strong>Tailored Nutrition:</strong> The AI analyzes the interplay of all factors to optimize growth for specific benefits, whether you need higher protein or more phycocyanin content.</span></li>
                           <li className="flex items-start gap-3"><CheckIcon className="w-6 h-6 mt-1 text-brand-cyan shrink-0"/><span><strong>Automated Workforce:</strong> Our robotics handle everything from nutrient regulation to gentle harvesting, operating 24/7 to ensure maximum efficiency and an untouched product.</span></li>
                        </ul>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="animate-slide-in-from-right">
                        <img src="https://source.unsplash.com/1024x768/?ai,network,abstract,blue" alt="AI neural network visualization" className="rounded-xl shadow-2xl shadow-cyan-900/30 w-full h-full object-cover"/>
                    </AnimateOnScroll>
                </div>
            </Section>
            
            {/* The Result Section */}
            <Section className="bg-brand-blue/30">
                <AnimateOnScroll className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">The Result: A New Kind of Spirulina</h2>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        Our technology guarantees a product that is not just a supplement, but a testament to modern science and sustainable practice. Every scoop, capsule, or snack is of consistently high quality, backed by a production process that is more efficient, more hygienic, and more environmentally friendly.
                    </p>
                </AnimateOnScroll>
            </Section>

            {/* Visual Process Section */}
            <section
                ref={processSectionRef}
                className="py-20 lg:py-24 relative bg-cover bg-center bg-no-repeat bg-fixed"
                style={{
                    backgroundImage: "url('https://source.unsplash.com/1920x1080/?spirulina,culture,bioreactor')",
                }}
            >
                <div className="absolute inset-0 bg-brand-dark/80"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <AnimateOnScroll className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-orbitron font-bold">From Bioreactor to You</h2>
                        <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-4">Our closed-loop, automated process ensures unparalleled purity and nutrient preservation at every stage.</p>
                    </AnimateOnScroll>
                    <div className="relative flex flex-col md:flex-row items-start justify-center gap-y-12 md:gap-8 max-w-6xl mx-auto">
                        <ProcessStep title="AI-Monitored Bioreactors" stagger={100} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V8.25a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 8.25v7.5A2.25 2.25 0 0 0 6.75 18Z" /></svg>}>
                            Spirulina cultures thrive in a perfectly controlled environment, optimized by our Gaia AI for nutrient density.
                        </ProcessStep>
                        <ProcessStep title="Robotic Harvesting" stagger={300} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" /></svg>}>
                            Automated systems gently harvest the spirulina at its nutritional peak, preserving delicate phytonutrients.
                        </ProcessStep>
                        <ProcessStep title="Purity Processing" stagger={500} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" /></svg>}>
                            A proprietary low-temperature drying process ensures maximum potency and a clean, fresh taste.
                        </ProcessStep>
                        <ProcessStep title="Final Product" stagger={700} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a8.25 8.25 0 0 1-16.5 0v-8.25a8.25 8.25 0 0 1 16.5 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75a3.75 3.75 0 0 0-3.75-3.75V4.5a3.75 3.75 0 0 1 7.5 0v7.5A3.75 3.75 0 0 0 12 15.75Z" /></svg>} isLast>
                           Our spirulina is transformed into versatile powders, convenient capsules, and innovative snacks.
                        </ProcessStep>
                    </div>
                </div>
            </section>

            {/* Nutrition Visualizer Section */}
            <Section className="bg-brand-blue/50">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <AnimateOnScroll animation="animate-slide-in-from-left">
                        <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">Instant Nutrition Breakdown</h2>
                        <p className="text-lg text-gray-400 mb-8">Select a product to see how our spirulina delivers superior nutrition. Values per 100g for powder, per serving for capsules and snacks.</p>
                        <div className="flex flex-wrap gap-4">
                            {(['powder', 'capsule', 'snack'] as ProductType[]).map(p => (
                                <button
                                    key={p}
                                    onClick={() => setSelectedProduct(p)}
                                    className={`px-6 py-2 rounded-lg font-bold text-lg border-2 transition-all duration-300 ${selectedProduct === p ? 'bg-brand-cyan text-brand-dark border-brand-cyan' : 'bg-transparent border-white/30 hover:border-brand-cyan/50 hover:text-brand-cyan'}`}
                                >
                                    {p.charAt(0).toUpperCase() + p.slice(1)}
                                </button>
                            ))}
                        </div>
                    </AnimateOnScroll>
                    <div ref={visualizerRef} className="transition-all duration-700 ease-out" style={{ opacity: isVisualizerOnScreen ? 1 : 0, transform: isVisualizerOnScreen ? 'translateX(0)' : 'translateX(30px)'}}>
                         <div className="bg-brand-blue/50 p-6 rounded-lg border border-cyan-400/20 space-y-4">
                            {currentData.map((item, index) => (
                                <div key={item.name}>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <span className="font-bold text-gray-200">{item.name}</span>
                                        <span className="font-orbitron text-brand-cyan">{item.value}{item.unit}</span>
                                    </div>
                                    <div className="h-3 rounded-full bg-brand-dark/50 overflow-hidden">
                                        <div 
                                            className="h-full bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-full transition-all duration-1000 ease-out"
                                            style={{
                                                width: isVisualizerOnScreen ? `${Math.min(item.value, 100)}%` : '0%',
                                                transitionDelay: `${100 + index * 100}ms`
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <Section className="text-center">
                <AnimateOnScroll>
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">The Future of Nutrition is Coming</h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">Be the first to experience the power of pure, potent spirulina. Join our waitlist for exclusive updates and launch-day offers.</p>
                    <PrimaryButton href="/contact">Shop Spirulina Soon</PrimaryButton>
                </AnimateOnScroll>
            </Section>
        </div>
    );
};


// --- Nutraceuticals Page ---

const PurityComparison: React.FC = () => (
    <AnimateOnScroll className="grid md:grid-cols-2 gap-8 my-12">
        {/* SKY BLIX Column */}
        <div className="bg-brand-blue/50 p-6 rounded-xl border border-cyan-400/30">
            <h4 className="text-2xl font-orbitron text-brand-cyan mb-4">SKY BLIX Nutraceuticals</h4>
            <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3"><CheckIcon className="w-5 h-5 mt-1 text-green-400 shrink-0"/><span><strong>Single Origin:</strong> Grown in our own controlled Habitat.</span></li>
                <li className="flex items-start gap-3"><CheckIcon className="w-5 h-5 mt-1 text-green-400 shrink-0"/><span><strong>Zero Contaminants:</strong> No pesticides, heavy metals, or microbes.</span></li>
                <li className="flex items-start gap-3"><CheckIcon className="w-5 h-5 mt-1 text-green-400 shrink-0"/><span><strong>Guaranteed Potency:</strong> Optimized growth for highest active compounds.</span></li>
                <li className="flex items-start gap-3"><CheckIcon className="w-5 h-5 mt-1 text-green-400 shrink-0"/><span><strong>Full Traceability:</strong> Verifiable history via QR code Digital Passport.</span></li>
            </ul>
        </div>
        {/* Traditional Column */}
        <div className="bg-brand-blue/30 p-6 rounded-xl border border-white/10">
            <h4 className="text-2xl font-orbitron text-white mb-4">Traditional Supplements</h4>
            <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3"><CrossIcon className="w-5 h-5 mt-1 text-red-400 shrink-0"/><span><strong>Multiple Origins:</strong> Raw materials sourced from various unknown farms.</span></li>
                <li className="flex items-start gap-3"><CrossIcon className="w-5 h-5 mt-1 text-red-400 shrink-0"/><span><strong>Risk of Contaminants:</strong> Potential for soil-based heavy metals & pesticides.</span></li>
                <li className="flex items-start gap-3"><CrossIcon className="w-5 h-5 mt-1 text-red-400 shrink-0"/><span><strong>Variable Potency:</strong> Potency depends on inconsistent soil and climate conditions.</span></li>
                <li className="flex items-start gap-3"><CrossIcon className="w-5 h-5 mt-1 text-red-400 shrink-0"/><span><strong>Limited Traceability:</strong> Origin and purity claims are often hard to verify.</span></li>
            </ul>
        </div>
    </AnimateOnScroll>
);

const NutraceuticalsPage: React.FC<{ innovation: Innovation }> = ({ innovation }) => {
    return (
        <div className="overflow-x-hidden">
            {/* Hero Section */}
            <section className="h-screen flex items-center justify-center text-center pt-20 relative isolate animate-fade-in-up overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/50 via-brand-dark to-brand-dark"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-8 animate-subtle-float">
                        <img 
                            src="https://source.unsplash.com/800x800/?capsule,glowing,futuristic,abstract" 
                            alt="Glowing Nutraceutical Capsule" 
                            className="w-full h-full object-cover rounded-full border-4 border-brand-cyan/50 shadow-2xl shadow-brand-cyan/30" 
                        />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-orbitron font-extrabold text-white animate-line-fade-in-up opacity-0">{innovation.name}</h1>
                    <p className="mt-4 text-xl md:text-2xl text-brand-cyan animate-line-fade-in-up opacity-0" style={{ animationDelay: '300ms' }}>{innovation.tagline}</p>
                </div>
            </section>

            {/* Intro Section */}
            <Section>
                <AnimateOnScroll className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-brand-cyan mb-6">The Power of Single-Origin Purity</h2>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        In a market crowded with claims and unverified promises, we have created a new category of wellness. Our supplements are built on a philosophy of <strong>single-origin purity</strong>, which means we control every step—from planting the seed to filling the final capsule. This isn't just a product; it’s a promise you can verify.
                    </p>
                </AnimateOnScroll>
            </Section>

            {/* From Seed to Supplement Section */}
            <Section className="bg-brand-dark">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <AnimateOnScroll animation="animate-slide-in-from-left">
                        <img src="https://source.unsplash.com/1024x768/?plant,lab,clean" alt="Pristine plant in a lab environment" className="rounded-xl shadow-2xl shadow-cyan-900/30 w-full h-full object-cover"/>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="animate-slide-in-from-right">
                        <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">From Seed to Supplement: Our Protocol for Perfection</h2>
                        <p className="text-lg text-gray-400 leading-relaxed mb-6">
                           Unlike other brands that source their raw materials from unknown origins, we grow all our medicinal plants in our pristine, controlled <strong>Habitat</strong> using our proprietary <strong>SKY-Ponics</strong> technology. This is how we guarantee the foundation of our products is absolutely pure.
                        </p>
                        <ul className="space-y-4 text-gray-300 text-lg">
                           <li className="flex items-start gap-3"><CheckIcon className="w-6 h-6 mt-1 text-brand-cyan shrink-0"/><span><strong>Absolute Purity:</strong> We use purified Reverse Osmosis (RO) water and a sterile environment. This completely eliminates the risk of heavy metals, pesticides, and microbial contaminants that are often found in soil-grown herbs.</span></li>
                           <li className="flex items-start gap-3"><CheckIcon className="w-6 h-6 mt-1 text-brand-cyan shrink-0"/><span><strong>Standardized Potency:</strong> By precisely controlling the light, nutrients, and atmospheric conditions, we naturally stimulate our plants to produce the highest possible concentration of their active compounds.</span></li>
                           <li className="flex items-start gap-3"><CheckIcon className="w-6 h-6 mt-1 text-brand-cyan shrink-0"/><span><strong>Precision Processing:</strong> The raw herbs are harvested at their peak potency and processed with advanced methods. We use <strong>Cryo-Grinding</strong> at sub-zero temperatures to preserve delicate essential oils and <strong>Supercritical CO₂ Extraction</strong> to create an exceptionally pure extract, free from harsh chemical residues.</span></li>
                        </ul>
                    </AnimateOnScroll>
                </div>
            </Section>

             {/* Purity Comparison Section */}
            <Section>
                 <div className="max-w-5xl mx-auto text-center">
                     <PurityComparison />
                 </div>
            </Section>

            {/* Radical Transparency Section */}
            <Section className="bg-brand-dark">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <AnimateOnScroll animation="animate-slide-in-from-left">
                        <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">Radical Transparency: The Digital Passport</h2>
                        <p className="text-lg text-gray-400 leading-relaxed mb-6">
                            Trust isn't a feeling; it’s a verifiable fact. Every bottle of our supplement comes with a <strong>Digital Passport</strong>, a QR code that gives you unprecedented access to its entire history. Just scan the code with your phone to instantly see the:
                        </p>
                        <ul className="space-y-3 text-gray-300">
                           <li className="flex items-start gap-3"><CheckIcon className="w-5 h-5 mt-1 text-brand-cyan shrink-0"/><span><strong>Purity Analysis:</strong> Official third-party reports certifying the product is free from heavy metals and pollutants.</span></li>
                           <li className="flex items-start gap-3"><CheckIcon className="w-5 h-5 mt-1 text-brand-cyan shrink-0"/><span><strong>Potency Certification:</strong> The exact percentage of active compounds, verified by a government-approved <strong>NABL lab</strong> using <strong>HPLC</strong> testing.</span></li>
                           <li className="flex items-start gap-3"><CheckIcon className="w-5 h-5 mt-1 text-brand-cyan shrink-0"/><span><strong>Harvest Date:</strong> The date and origin of the raw material used in your specific batch.</span></li>
                        </ul>
                    </AnimateOnScroll>
                     <AnimateOnScroll animation="animate-slide-in-from-right" className="flex justify-center">
                        <div className="relative w-72 h-[36rem] animate-subtle-float">
                            {/* Phone Mockup */}
                            <div className="absolute inset-0 bg-brand-blue border-4 border-white/20 rounded-[2.5rem] shadow-2xl shadow-cyan-900/40"></div>
                            <div className="absolute inset-2 bg-brand-dark rounded-[2.2rem] overflow-hidden p-4 flex flex-col items-center justify-center text-center">
                                <h3 className="font-orbitron text-lg text-brand-cyan mb-2">Digital Passport</h3>
                                <p className="text-xs text-gray-400 mb-4">ID: SB-NTR-ASHW-042</p>
                                {/* QR Code SVG */}
                                <svg className="w-40 h-40" viewBox="0 0 256 256" fill="white" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M112 64H64V112H112V64Z" fillOpacity="0.9"/>
                                    <path d="M96 80H80V96H96V80Z" fill="black"/>
                                    <path d="M192 64H144V112H192V64Z" fillOpacity="0.9"/>
                                    <path d="M176 80H160V96H176V80Z" fill="black"/>
                                    <path d="M112 144H64V192H112V144Z" fillOpacity="0.9"/>
                                    <path d="M96 160H80V176H96V160Z" fill="black"/>
                                    <path d="M48 48H128V128H48V48ZM64 64V112H112V64H64Z" fillRule="evenodd"/>
                                    <path d="M208 48H128V128H208V48ZM144 64V112H192V64H144Z" fillRule="evenodd"/>
                                    <path d="M128 128H48V208H128V128ZM64 144V192H112V144H64Z" fillRule="evenodd"/>
                                    <path d="M160 144H144V160H160V144Z"/>
                                    <path d="M176 144H160V160H176V144Z"/>
                                    <path d="M144 160H128V176H144V160Z"/>
                                    <path d="M192 128H176V144H192V128Z"/>
                                    <path d="M208 128H192V144H208V128Z"/>
                                    <path d="M176 160H160V176H176V160Z"/>
                                    <path d="M192 160H176V176H192V160Z"/>
                                    <path d="M208 160H192V176H208V160Z"/>
                                    <path d="M160 176H144V192H160V176Z"/>
                                    <path d="M176 176H160V192H176V176Z"/>
                                    <path d="M144 192H128V208H144V192Z"/>
                                    <path d="M192 176H176V192H192V176Z"/>
                                </svg>
                                <p className="text-gray-300 mt-4 text-sm">Scan to verify</p>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </Section>
            
            {/* Product Lineup Section */}
            <Section className="bg-brand-blue/30">
                <AnimateOnScroll className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold">A Lineup for Total Wellness</h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-4">Our supplements are designed for every wellness journey.</p>
                </AnimateOnScroll>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <AnimateOnScroll stagger={100} className="h-full">
                        <div className="bg-brand-blue/50 border border-cyan-400/20 rounded-xl p-6 h-full backdrop-blur-sm">
                            <h4 className="text-2xl font-orbitron font-bold mb-3 text-brand-cyan">The "Essentials" Line</h4>
                            <p className="text-gray-400">Your foundational daily wellness. A curated line of single-ingredient supplements like high-potency Turmeric, Full-Spectrum Ashwagandha, and Pure Moringa.</p>
                        </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll stagger={200} className="h-full">
                        <div className="bg-brand-blue/50 border border-cyan-400/20 rounded-xl p-6 h-full backdrop-blur-sm">
                            <h4 className="text-2xl font-orbitron font-bold mb-3 text-brand-cyan">The "Prescribed" Line</h4>
                            <p className="text-gray-400">The ultimate in data-driven, personalized nutrition. Custom-made formulas based on your individual biological needs.</p>
                        </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll stagger={300} className="h-full">
                        <div className="bg-brand-blue/50 border border-cyan-400/20 rounded-xl p-6 h-full backdrop-blur-sm">
                            <h4 className="text-2xl font-orbitron font-bold mb-3 text-brand-cyan">The "Alche-mood" Line</h4>
                            <p className="text-gray-400">Your on-demand, functional support. Single-dose capsules and powders for an instant boost, like our "Clarity" nootropic or our "Serene" adaptogen.</p>
                        </div>
                    </AnimateOnScroll>
                </div>
            </Section>

            {/* CTA Section */}
            <Section className="text-center">
                <AnimateOnScroll>
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">The New Standard of Wellness</h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">Join the waitlist to be among the first to experience nutraceuticals with unparalleled purity and transparency.</p>
                    <PrimaryButton href="/contact">Join Waitlist</PrimaryButton>
                </AnimateOnScroll>
            </Section>
        </div>
    );
};

// --- VitalAir Page Specific Components ---

const ProductDisplay: React.FC = () => (
    <div className="relative w-48 h-96 md:w-64 md:h-[32rem] mx-auto animate-subtle-float">
        <div 
            className="absolute inset-0 bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: "url('https://source.unsplash.com/800x1200/?canister,futuristic,clean,oxygen,white,minimalist')" }}
        ></div>
        <div className="absolute -inset-4 border-2 border-cyan-400/20 rounded-full animate-spin-slow opacity-50"></div>
        <div className="absolute -inset-8 border border-cyan-400/10 rounded-full animate-spin-slow-reverse opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
    </div>
);

const SafetyListItem: React.FC<{ icon: React.ReactNode, children: React.ReactNode, color: string }> = ({ icon, children, color }) => (
    <li className="flex items-start gap-4">
        <div className={`shrink-0 w-6 h-6 mt-0.5 ${color}`}>{icon}</div>
        <span>{children}</span>
    </li>
);

const DumbbellIcon: React.FC<any> = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h3.75" /></svg>;
const BrainIcon: React.FC<any> = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" /></svg>;
const PlaneIcon: React.FC<any> = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" /></svg>;

const ScenarioCard: React.FC<{ icon: React.ReactNode, title: string, children: React.ReactNode, stagger: number }> = ({ icon, title, children, stagger }) => (
    <AnimateOnScroll stagger={stagger} className="bg-brand-blue/30 border border-cyan-400/20 rounded-xl p-6 text-center backdrop-blur-sm">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-cyan/10 flex items-center justify-center border-2 border-brand-cyan/30 text-brand-cyan">
            {icon}
        </div>
        <h3 className="text-2xl font-orbitron font-bold mb-3">{title}</h3>
        <p className="text-gray-400">{children}</p>
    </AnimateOnScroll>
);

// --- VitalAir Page ---
const VitalAirPage: React.FC<{ innovation: Innovation }> = ({ innovation }) => {
    return (
        <div className="overflow-x-hidden">
            {/* Hero Section */}
            <section className="min-h-screen flex flex-col items-center justify-center text-center pt-20 relative isolate animate-fade-in-up overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/50 via-brand-dark to-brand-dark"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-5xl md:text-7xl font-orbitron font-extrabold text-white animate-line-fade-in-up opacity-0">{innovation.name}</h1>
                    <p className="mt-4 text-xl md:text-2xl text-brand-cyan animate-line-fade-in-up opacity-0" style={{ animationDelay: '300ms' }}>{innovation.tagline}</p>
                    <div className="mt-12 animate-line-fade-in-up opacity-0" style={{ animationDelay: '600ms' }}>
                       <ProductDisplay />
                    </div>
                </div>
            </section>
            
             {/* Intro Section */}
            <Section>
                <AnimateOnScroll className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-brand-cyan mb-6">VitalityAir: Every Breath of Change</h2>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        In a world where air quality is a growing concern, we've created a portable solution with a purpose. <strong>VitalityAir</strong> is a revolutionary oxygen canister designed to enhance your performance, recovery, and overall well-being. But what truly sets it apart is where it comes from.
                    </p>
                </AnimateOnScroll>
            </Section>

            {/* Benefits Section */}
            <Section className="bg-brand-dark">
                <AnimateOnScroll className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold">Your Daily Wellness Essential</h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-4">VitalityAir is a convenient, non-prescription solution for anyone seeking a natural energy boost or relief from the effects of poor air quality. A quick breath can provide a multitude of benefits:</p>
                </AnimateOnScroll>
                <div className="max-w-2xl mx-auto">
                    <AnimateOnScroll>
                        <ul className="space-y-4 text-lg text-gray-300">
                           <li className="flex items-start gap-3"><CheckIcon className="w-6 h-6 mt-1 text-brand-cyan shrink-0"/><span><strong>Increases Energy Levels:</strong> Feel more energized and ready to take on the day.</span></li>
                           <li className="flex items-start gap-3"><CheckIcon className="w-6 h-6 mt-1 text-brand-cyan shrink-0"/><span><strong>Enhances Mood and Concentration:</strong> Stay focused and uplifted with every use.</span></li>
                           <li className="flex items-start gap-3"><CheckIcon className="w-6 h-6 mt-1 text-brand-cyan shrink-0"/><span><strong>Boosts Sports Performance:</strong> Maximize your recovery and physical endurance.</span></li>
                           <li className="flex items-start gap-3"><CheckIcon className="w-6 h-6 mt-1 text-brand-cyan shrink-0"/><span><strong>Relieves Stress & Headaches:</strong> Experience a natural way to relax and unwind.</span></li>
                           <li className="flex items-start gap-3"><CheckIcon className="w-6 h-6 mt-1 text-brand-cyan shrink-0"/><span><strong>Promotes Better Sleep:</strong> Enjoy a more restful and rejuvenating sleep cycle.</span></li>
                        </ul>
                    </AnimateOnScroll>
                </div>
            </Section>

            {/* Scenarios for Vitality Section */}
            <Section>
                <AnimateOnScroll className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold">Scenarios for Vitality</h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-4">Integrate VitalityAir into your lifestyle for a boost whenever you need it most.</p>
                </AnimateOnScroll>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <ScenarioCard title="Athletic Performance" stagger={100} icon={<DumbbellIcon className="w-8 h-8"/>}>
                        Use before a workout to prime your muscles, or after to accelerate recovery and reduce fatigue.
                    </ScenarioCard>
                    <ScenarioCard title="Mental Clarity" stagger={200} icon={<BrainIcon className="w-8 h-8"/>}>
                        Combat mental fog during long work sessions or study marathons. A few breaths can help restore focus and concentration.
                    </ScenarioCard>
                    <ScenarioCard title="Travel & Altitude" stagger={300} icon={<PlaneIcon className="w-8 h-8"/>}>
                        Counteract the effects of stale cabin air on long flights or adapt more comfortably to high-altitude environments.
                    </ScenarioCard>
                </div>
            </Section>

            {/* Origin Section */}
            <Section className="bg-brand-dark">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <AnimateOnScroll animation="animate-slide-in-from-left">
                        <img src="https://source.unsplash.com/1024x768/?bioreactor,glowing,futuristic" alt="PrakritiVriksha photobioreactor" className="rounded-xl shadow-2xl shadow-cyan-900/30 w-full h-full object-cover"/>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="animate-slide-in-from-right">
                        <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">Breathe the Mission</h2>
                        <p className="text-lg text-gray-400 leading-relaxed mb-8">
                           Every breath of VitalityAir is a testament to our commitment to a cleaner planet. While other companies bottle ambient air, our <strong>95% pure oxygen</strong> is generated as a byproduct of the photosynthesis process inside our <strong>PrakritiVriksha</strong> photobioreactors—the very same units working tirelessly to clean the air in urban centers. This is not just a product; it’s a tangible result of our mission to create a healthier, more sustainable world.
                        </p>
                        <PrimaryButton href="/innovations/prakritivriksha">Learn about PrakritiVriksha</PrimaryButton>
                    </AnimateOnScroll>
                </div>
            </Section>

            {/* Safety & Use Section */}
            <Section className="bg-brand-blue/30">
                <AnimateOnScroll className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold">Usage & Safety Guidelines</h2>
                </AnimateOnScroll>
                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <AnimateOnScroll>
                        <h3 className="text-3xl font-orbitron text-brand-cyan mb-6">How to Use</h3>
                        <ul className="space-y-4 text-lg text-gray-300">
                           <SafetyListItem color="text-green-400" icon={<CheckIcon />}>
                                Position the mask over your mouth and nose.
                           </SafetyListItem>
                           <SafetyListItem color="text-green-400" icon={<CheckIcon />}>
                                Press the actuator button for 1-2 seconds while inhaling.
                           </SafetyListItem>
                           <SafetyListItem color="text-green-400" icon={<CheckIcon />}>
                                Inhale 3-5 breaths for a standard session.
                           </SafetyListItem>
                           <SafetyListItem color="text-green-400" icon={<CheckIcon />}>
                                Use before workouts, during study sessions, or to recover from travel.
                           </SafetyListItem>
                        </ul>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                         <h3 className="text-3xl font-orbitron text-red-400 mb-6">Important Considerations</h3>
                         <p className="text-lg text-gray-300 leading-relaxed">
                            VitalityAir is a recreational oxygen product and is not intended for medical use. Individuals with respiratory conditions such as COPD, asthma, or emphysema should consult a physician before use.
                         </p>
                    </AnimateOnScroll>
                </div>
            </Section>

            {/* CTA Section */}
            <Section className="text-center">
                <AnimateOnScroll>
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">Elevate Your Atmosphere</h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">Join our exclusive waitlist to be notified when VitalAir is available. A new level of well-being is on the horizon.</p>
                    <PrimaryButton href="/contact">Join the VitalAir Waitlist</PrimaryButton>
                </AnimateOnScroll>
            </Section>
        </div>
    );
};

// --- Generic Page for Other Innovations ---

const GenericInnovationPage: React.FC<{ innovation: Innovation }> = ({ innovation }) => {
    return (
        <div className="animate-fade-in-up">
            <section
                className="min-h-[60vh] flex items-center justify-center text-center relative pt-20"
            >
                <div className="absolute inset-0 bg-brand-dark/80"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-5xl md:text-7xl font-orbitron font-extrabold text-white">{innovation.name}</h1>
                    <p className="mt-4 text-xl md:text-2xl text-brand-cyan">{innovation.tagline}</p>
                </div>
            </section>
            <Section>
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">{innovation.description}</p>
                    <h2 className="text-3xl font-orbitron font-bold text-brand-cyan my-12 animate-glow">More details on this groundbreaking innovation are coming soon.</h2>
                    <PrimaryButton href="/innovations">Explore Other Products</PrimaryButton>
                </div>
            </Section>
        </div>
    );
};


// --- Main Router Component ---

const InnovationDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const innovation = innovationsData.find(inv => inv.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!innovation) {
        return <Navigate to="/innovations" replace />;
    }

    switch (innovation.id) {
        case 'agriculture':
            return <AgriculturePage innovation={innovation} />;
        case 'spirulina':
            return <SpirulinaPage innovation={innovation} />;
        case 'prakritivriksha':
            return <PrakritiVrikshaPage innovation={innovation} />;
        case 'nutraceuticals':
            return <NutraceuticalsPage innovation={innovation} />;
        case 'vitalair':
            return <VitalAirPage innovation={innovation} />;
        default:
            return <GenericInnovationPage innovation={innovation} />;
    }
};

export default InnovationDetailPage;