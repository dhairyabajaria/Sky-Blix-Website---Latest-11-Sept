import React from 'react';
import { Link } from 'react-router-dom';
import { innovationsData } from '../constants';
import type { Innovation } from '../types';
import AnimateOnScroll from '../components/AnimateOnScroll';

const PrimaryButton: React.FC<{ href: string; children: React.ReactNode, isNav?: boolean }> = ({ href, children, isNav = false }) => {
    const Component = isNav ? Link : 'a';
    return (
        <Component
            to={isNav ? href : ''}
            href={isNav ? undefined : href}
            className="inline-block bg-brand-cyan px-10 py-4 rounded-lg text-lg font-bold text-brand-dark hover:bg-opacity-80 hover:shadow-[0_0_20px_theme(colors.brand-cyan)] transition-all duration-300"
        >
            {children}
        </Component>
    );
};

const SecondaryButton: React.FC<{ href: string; children: React.ReactNode, isNav?: boolean }> = ({ href, children, isNav = false }) => {
    const Component = isNav ? Link : 'a';
    return (
        <Component
            to={isNav ? href : ''}
            href={isNav ? undefined : href}
            className="inline-block bg-transparent px-10 py-4 rounded-lg text-lg font-semibold text-brand-light border border-white/40 hover:bg-white/10 hover:border-white/80 transition-all duration-300"
        >
            {children}
        </Component>
    );
};


const InnovationCard: React.FC<{ innovation: Innovation }> = ({ innovation }) => {
    return (
        <Link 
            to={`/innovations/${innovation.id}`}
            className="group relative bg-brand-blue rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-brand-cyan/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:-translate-y-3 h-full flex flex-col"
        >
            {/* Background Layers */}
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: `url(${innovation.imageUrl})`}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent"></div>
            
            {/* Content Wrapper */}
            <div className="relative z-10 flex flex-col h-full p-6 items-center justify-center text-center">
                {/* Image Area */}
                <div className="mb-6">
                    {innovation.cardImage ? (
                        <img 
                            src={innovation.cardImage} 
                            alt={`${innovation.name} representation`}
                            className="w-36 h-36 object-cover rounded-full transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 filter group-hover:drop-shadow-[0_0_15px_theme(colors.brand-cyan)] border-2 border-cyan-400/20 group-hover:border-cyan-400/60"
                        />
                    ) : (
                        <div className="w-36 h-36 rounded-full bg-brand-blue/30 border-2 border-cyan-400/20 flex items-center justify-center">
                            <span className="text-gray-500">Image</span>
                        </div>
                    )}
                </div>

                {/* Text Area */}
                <div>
                    <h3 className="font-orbitron text-2xl font-bold leading-tight group-hover:text-brand-cyan transition-colors duration-300 mb-2">{innovation.name}</h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{innovation.tagline}</p>
                </div>
            </div>
        </Link>
    );
};


const HomePage: React.FC = () => {
    const featuredInnovations = innovationsData.slice(0, 3);
    const primaryButtonCta = "Explore Our Innovations";

    return (
        <div>
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center text-center pt-20 relative animate-fade-in-up overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/70"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-extrabold leading-tight tracking-wide">
                        <span className="block animate-line-fade-in-up opacity-0" style={{animationDelay: '0.2s'}}>Redefining Food.</span>
                        <span className="block animate-line-fade-in-up opacity-0" style={{animationDelay: '0.5s'}}>Redefining Wellness.</span>
                        <span className="block animate-line-fade-in-up opacity-0" style={{animationDelay: '0.8s'}}>Redefining Air.</span>
                    </h1>
                    <div className="mt-12 animate-line-fade-in-up opacity-0" style={{animationDelay: '1.1s'}}>
                         <PrimaryButton href="/innovations" isNav>
                            {primaryButtonCta}
                        </PrimaryButton>
                    </div>
                </div>
            </section>

            {/* Innovations Preview Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredInnovations.map((innovation, i) => (
                             <AnimateOnScroll key={innovation.id} animation="animate-scroll-fade-in" stagger={i * 150}>
                                <InnovationCard innovation={innovation} />
                             </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Statement Section */}
            <AnimateOnScroll animation="animate-scroll-fade-in">
                <section className="py-20 text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-orbitron text-brand-light max-w-4xl mx-auto mb-12 leading-relaxed">
                            From seed to supplement, from oxygen to nutrition, Sky Blix Agro Science is building the future of food, wellness, and sustainability.
                        </h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <PrimaryButton href="/innovations" isNav>
                                Explore Our Innovations
                            </PrimaryButton>
                            <SecondaryButton href="/about" isNav>
                                Meet the Founder
                            </SecondaryButton>
                        </div>
                    </div>
                </section>
            </AnimateOnScroll>
            
            {/* About Teaser Section */}
             <AnimateOnScroll animation="animate-scroll-fade-in">
                <section className="py-20 text-center bg-brand-blue/30">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">About Sky Blix Agro Science</h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                            The future of food, wellness, and sustainability.
                        </p>
                        <PrimaryButton href="/about" isNav>
                            Learn More
                        </PrimaryButton>
                    </div>
                </section>
            </AnimateOnScroll>

            {/* Sustainability Impact Section */}
            <section className="py-20">
                <div className="container mx-auto px-6 text-center">
                     <AnimateOnScroll animation="animate-scroll-fade-in" className="mb-12">
                        <h2 className="text-4xl md:text-5xl font-orbitron font-bold">Our Sustainability Impact</h2>
                    </AnimateOnScroll>
                    <div className="grid md:grid-cols-3 gap-8">
                        <AnimateOnScroll animation="animate-scroll-fade-in" stagger={100}>
                            <div className="bg-brand-blue/50 p-8 rounded-lg border border-white/10">
                                <h3 className="text-5xl font-orbitron font-bold text-brand-cyan">1.2M+</h3>
                                <p className="text-lg text-gray-300 mt-2">Tons of CO₂ Removed</p>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="animate-scroll-fade-in" stagger={200}>
                            <div className="bg-brand-blue/50 p-8 rounded-lg border border-white/10">
                                <h3 className="text-5xl font-orbitron font-bold text-brand-cyan">2.5M+</h3>
                                <p className="text-lg text-gray-300 mt-2">Liters of Oxygen Released</p>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="animate-scroll-fade-in" stagger={300}>
                            <div className="bg-brand-blue/50 p-8 rounded-lg border border-white/10">
                                <h3 className="text-5xl font-orbitron font-bold text-brand-cyan">500K+</h3>
                                <p className="text-lg text-gray-300 mt-2">Children Nourished</p>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;