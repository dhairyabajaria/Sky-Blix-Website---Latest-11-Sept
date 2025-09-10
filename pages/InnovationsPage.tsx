import React from 'react';
import { Link } from 'react-router-dom';
import AnimateOnScroll from '../components/AnimateOnScroll';

// --- Reusable Components ---

const Section: React.FC<{children: React.ReactNode, className?: string}> = ({children, className}) => (
    <section className={`py-20 lg:py-24 ${className}`}>
        <div className="container mx-auto px-6">
            {children}
        </div>
    </section>
);

const CheckIcon: React.FC<any> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

interface TechFeatureSectionProps {
    title: string;
    description: string;
    imageUrl: string;
    bulletPoints: { title: string, text: string }[];
    imagePosition?: 'left' | 'right';
}

const TechFeatureSection: React.FC<TechFeatureSectionProps> = ({ title, description, imageUrl, bulletPoints, imagePosition = 'right' }) => (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
        <AnimateOnScroll 
            animation="animate-slide-in-from-left" 
            className={`w-full h-full ${imagePosition === 'left' ? 'lg:order-1' : 'lg:order-2'}`}
        >
            <img src={imageUrl} alt={title} className="rounded-xl shadow-2xl shadow-cyan-900/30 w-full h-full object-cover min-h-[400px]"/>
        </AnimateOnScroll>
        <AnimateOnScroll 
            animation="animate-slide-in-from-right" 
            className={`${imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1'}`}
        >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">{title}</h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
               {description}
            </p>
            <ul className="space-y-4 text-gray-300">
                {bulletPoints.map(point => (
                    <li key={point.title} className="flex items-start gap-4">
                        <CheckIcon className="w-6 h-6 mt-1 text-brand-cyan shrink-0"/>
                        <div>
                            <strong className="text-white">{point.title}:</strong> {point.text}
                        </div>
                    </li>
                ))}
            </ul>
        </AnimateOnScroll>
    </div>
);

interface EcosystemCardProps {
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    stagger: number;
}

const EcosystemCard: React.FC<EcosystemCardProps> = ({ title, description, ctaText, ctaLink, stagger }) => (
    <AnimateOnScroll stagger={stagger} className="h-full">
        <div className="bg-brand-blue/50 border border-cyan-400/20 rounded-xl p-8 h-full backdrop-blur-sm flex flex-col transition-all duration-300 hover:border-brand-cyan/60 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] hover:-translate-y-2">
            <h4 className="text-3xl font-orbitron font-bold mb-4 text-brand-cyan">{title}</h4>
            <p className="text-gray-400 flex-grow mb-6">{description}</p>
            <Link
                to={ctaLink}
                className="self-start inline-block bg-transparent px-8 py-3 rounded-lg text-md font-semibold text-brand-light border border-white/40 hover:bg-white/10 hover:border-white/80 transition-all duration-300"
            >
                {ctaText}
            </Link>
        </div>
    </AnimateOnScroll>
);


// --- Main Page Component ---

const InnovationsPage: React.FC = () => {
    return (
        <div className="overflow-x-hidden pt-20">
            {/* Hero Section */}
            <section className="min-h-[70vh] flex items-center justify-center text-center relative animate-fade-in-up">
                <div className="absolute inset-0 bg-brand-dark/70"></div>
                 <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(https://source.unsplash.com/1920x1080/?technology,nature,abstract)` }}></div>
                <div className="container mx-auto px-6 relative z-10">
                    <AnimateOnScroll>
                        <h1 className="text-5xl md:text-7xl font-orbitron font-extrabold leading-tight tracking-wide">The Technology Driving Change</h1>
                    </AnimateOnScroll>
                    <AnimateOnScroll stagger={300} className="max-w-4xl mx-auto">
                        <p className="mt-6 text-lg md:text-xl text-gray-300">
                            Our mission is to engineer a new era of trust and purity. This is made possible by a portfolio of patented, "Make in India" technologies that seamlessly converge biology, robotics, and artificial intelligence to create a closed-loop, data-driven ecosystem. This is where nature meets neural networks.
                        </p>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* The Habitat Section */}
            <Section className="bg-brand-dark">
                <TechFeatureSection
                    title="The Habitat: A Self-Contained Ecosystem"
                    description="The foundation of everything we do, the Habitat is a sealed, autonomous cultivation unit. It is a masterpiece of precision engineering designed to create the perfect environment for any crop, anywhere in the world."
                    imageUrl="https://source.unsplash.com/1024x768/?biodome,futuristic,interior"
                    imagePosition="left"
                    bulletPoints={[
                        { title: 'Environmental Control', text: 'An array of sensors meticulously monitors over 50 measurable variables including air temperature, humidity, radiation, and CO₂. This data is fed into an AI system that makes real-time adjustments, guaranteeing optimal growth conditions.' },
                        { title: 'Contamination Shield', text: 'The sealed environment acts as an impenetrable barrier, completely protecting crops from external pollutants, pests, and microbes, ensuring unmatched purity.' },
                        { title: 'Clean Energy', text: 'The system is powered by 100% clean and green energy sources like solar and geothermal, dramatically reducing our carbon footprint and operational costs.' }
                    ]}
                />
            </Section>
            
            {/* SKY-Ponics Section */}
            <Section>
                <TechFeatureSection
                    title="SKY-Ponics: The Future of Soilless Agriculture"
                    description="SKY-Ponics is our patented, soilless cultivation method that delivers everything a plant needs directly to its roots. By bypassing traditional soil, we eliminate contaminants and massively improve resource efficiency."
                    imageUrl="https://source.unsplash.com/1024x768/?aeroponics,roots,mist"
                    imagePosition="right"
                    bulletPoints={[
                        { title: 'Precision Nutrient Delivery', text: 'We continuously irrigate the roots with purified, nutrient-rich water, ensuring optimal absorption with no waste. This allows for 95% less water use compared to traditional farming.' },
                        { title: 'Accelerated Growth', text: 'The constant, perfect supply of nutrients and resources enables plants to grow up to 50% faster in a completely natural way.' },
                        { title: 'Perfectly Replicable', text: 'Since every variable is controlled and all data is stored, we can perfectly replicate a crop\'s growing conditions, guaranteeing consistent quality across all batches.' }
                    ]}
                />
            </Section>

            {/* The Digital Backbone Section */}
            <Section className="bg-brand-dark">
                <TechFeatureSection
                    title="The Digital Backbone: AI, ML, & Robotics"
                    description="Our technology is not just about controlled environments; it’s about intelligence. Our systems are fully automated and continuously learning."
                    imageUrl="https://source.unsplash.com/1024x768/?ai,robotics,data,network"
                    imagePosition="left"
                    bulletPoints={[
                        { title: 'The World’s First SaaS Neural Network', text: 'We will offer access to our neural network—an AI that knows everything about plants—to third parties. This allows us to share our expertise and solve the most complex plant-related problems globally.' },
                        { title: 'Robotic Workforce', text: 'Advanced robotics handle labor-intensive tasks with unparalleled precision, from sowing seeds to harvesting crops. This allows for rapid scaling and a continuous, year-round growing cycle.' },
                        { title: 'Advanced Imaging', text: 'Every plant is scanned daily by LiDAR and Infrared cameras and processed by our computer vision systems. These tools capture millions of data points, allowing our AI to monitor plant health at a level beyond human capability.' }
                    ]}
                />
            </Section>
            
            {/* Ecosystem Section */}
            <Section className="bg-brand-blue/30">
                <AnimateOnScroll className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold">Our Synergistic Ecosystem</h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-4">These innovations are the foundation of a fully integrated business model. Explore each of our five verticals to see how our technology is applied to create a better world.</p>
                </AnimateOnScroll>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    <EcosystemCard 
                        title="Agriculture"
                        description="Our technology is not just for our farms. Discover how we're building the future of farming."
                        ctaText="Discover the Habitat"
                        ctaLink="/innovations/agriculture"
                        stagger={100}
                    />
                     <EcosystemCard 
                        title="Spirulina"
                        description="From controlled ecosystems to a pure superfood. See how technology creates the future of nutrition."
                        ctaText="Explore a New Standard"
                        ctaLink="/innovations/spirulina"
                        stagger={200}
                    />
                     <EcosystemCard 
                        title="PrakritiVriksha"
                        description="A biological air purifier for our cities. Learn how we're cleaning urban air and fighting malnutrition."
                        ctaText="See the Urban Lungs"
                        ctaLink="/innovations/prakritivriksha"
                        stagger={300}
                    />
                     <EcosystemCard 
                        title="Nutraceuticals"
                        description="Purity you can verify. Uncover the science behind our single-origin supplements."
                        ctaText="Learn Our Philosophy"
                        ctaLink="/innovations/nutraceuticals"
                        stagger={400}
                    />
                     <EcosystemCard 
                        title="VitalityAir"
                        description="Pure oxygen with a purpose. Understand how our product contributes to a healthier planet."
                        ctaText="Breathe the Future"
                        ctaLink="/innovations/vitalair"
                        stagger={500}
                    />
                </div>
            </Section>
        </div>
    );
};

export default InnovationsPage;
