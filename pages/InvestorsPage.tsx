import React from 'react';
import { Link } from 'react-router-dom';
import AnimateOnScroll from '../components/AnimateOnScroll';

// --- Reusable Components (similar to other pages) ---

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

const StatCard: React.FC<{ value: string; label: string; stagger: number }> = ({ value, label, stagger }) => (
    <AnimateOnScroll stagger={stagger}>
        <div className="bg-brand-blue/50 p-8 rounded-lg border border-white/10 text-center">
            <h3 className="text-5xl font-orbitron font-bold text-brand-cyan">{value}</h3>
            <p className="text-lg text-gray-300 mt-2">{label}</p>
        </div>
    </AnimateOnScroll>
);

const InvestmentPillar: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; stagger: number }> = ({ icon, title, children, stagger }) => (
    <AnimateOnScroll stagger={stagger} className="bg-brand-blue/30 border border-cyan-400/20 rounded-xl p-6 backdrop-blur-sm h-full flex flex-col">
        <div className="w-16 h-16 mb-4 rounded-full bg-brand-cyan/10 flex items-center justify-center border-2 border-brand-cyan/30 text-brand-cyan shrink-0">
            {icon}
        </div>
        <h3 className="text-2xl font-orbitron font-bold mb-3">{title}</h3>
        <p className="text-gray-400 flex-grow">{children}</p>
    </AnimateOnScroll>
);


// --- Main Page Component ---

const InvestorsPage: React.FC = () => {
    return (
        <div className="overflow-x-hidden pt-20">
            {/* Hero Section */}
            <section className="min-h-[70vh] flex items-center justify-center text-center relative animate-fade-in-up">
                <div className="absolute inset-0 bg-brand-dark/70"></div>
                <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(https://source.unsplash.com/1920x1080/?finance,growth,abstract)` }}></div>
                <div className="container mx-auto px-6 relative z-10">
                    <AnimateOnScroll>
                        <h1 className="text-5xl md:text-7xl font-orbitron font-extrabold leading-tight tracking-wide">Invest in the Future of Sustenance</h1>
                    </AnimateOnScroll>
                    <AnimateOnScroll stagger={300} className="max-w-4xl mx-auto">
                        <p className="mt-6 text-lg md:text-xl text-gray-300">
                            Sky Blix Agro Science is at the forefront of a technological revolution in agriculture, wellness, and environmental sustainability. We invite you to join us in building a resilient, profitable, and impactful future.
                        </p>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Market Opportunity Section */}
            <Section>
                <div className="text-center max-w-4xl mx-auto">
                    <AnimateOnScroll>
                        <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">A Confluence of Multi-Trillion Dollar Markets</h2>
                        <p className="text-lg text-gray-400">
                            We are strategically positioned at the intersection of the world's most critical and rapidly growing sectors: food technology, sustainable agriculture, personalized wellness, and clean air solutions.
                        </p>
                    </AnimateOnScroll>
                </div>
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    <StatCard value="$12T" label="Global Food & AgTech Market by 2030" stagger={100} />
                    <StatCard value="$6.5T" label="Global Wellness Market by 2028" stagger={200} />
                    <StatCard value="$30B+" label="Air Purification Market by 2027" stagger={300} />
                </div>
            </Section>

            {/* Investment Pillars Section */}
            <Section className="bg-brand-dark">
                 <AnimateOnScroll className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold">Our Investment Pillars</h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-4">A robust foundation for sustainable growth and significant returns.</p>
                </AnimateOnScroll>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    <InvestmentPillar 
                        title="Proprietary Technology" 
                        stagger={100}
                        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-1.718-.676-3.428-1.899-4.651a5.25 5.25 0 1 0-7.424 7.424 5.21 5.21 0 0 0 4.65 1.899 5.21 5.21 0 0 0 4.65-1.899 5.25 5.25 0 0 0 0-7.424ZM12.75 18.75a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" /></svg>}
                    >
                        Our patented, "Make in India" Habitat, SKY-Ponics system, and AI platform create a significant competitive moat and high barriers to entry.
                    </InvestmentPillar>
                    <InvestmentPillar 
                        title="Scalable & Diversified Model" 
                        stagger={200}
                        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" /></svg>}
                    >
                        Multiple revenue streams across five verticals—from B2B agriculture to D2C wellness products—mitigate risk and unlock diverse growth opportunities.
                    </InvestmentPillar>
                    <InvestmentPillar 
                        title="Exceptional Unit Economics" 
                        stagger={300}
                        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" /></svg>}
                    >
                        Our automated, resource-efficient model leads to higher yields, lower operational costs, and superior margins compared to traditional industries.
                    </InvestmentPillar>
                    <InvestmentPillar 
                        title="Purpose-Driven Mission" 
                        stagger={400}
                        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c.504 0 1.002-.023 1.493-.067M12 21c-.504 0-1.002-.023-1.493-.067M12 3a9.004 9.004 0 0 0-8.716 6.747M12 3a9.004 9.004 0 0 1 8.716 6.747M12 3c.504 0 1.002.023 1.493.067M12 3c-.504 0-1.002-.023-1.493-.067M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>}
                    >
                        We are solving real-world problems. Investing in Sky Blix means contributing to global food security, public health, and environmental restoration.
                    </InvestmentPillar>
                </div>
            </Section>

            {/* Use of Funds Section */}
             <Section>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <AnimateOnScroll animation="animate-slide-in-from-left">
                        <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">Fueling the Next Wave of Growth</h2>
                        <p className="text-lg text-gray-400 leading-relaxed mb-6">
                           We are seeking strategic partners to accelerate our expansion. Capital raised will be allocated to key growth initiatives:
                        </p>
                        <ul className="space-y-4 text-gray-300 text-lg">
                           <li className="flex items-start gap-3"><span className="text-brand-cyan font-bold">60%</span><span><strong>Scaling Production:</strong> Expanding our Habitat infrastructure to meet growing demand for our produce and nutraceuticals.</span></li>
                           <li className="flex items-start gap-3"><span className="text-brand-cyan font-bold">25%</span><span><strong>R&D and Innovation:</strong> Enhancing our AI platform and developing new product lines for wellness and sustainability.</span></li>
                           <li className="flex items-start gap-3"><span className="text-brand-cyan font-bold">15%</span><span><strong>Market Expansion:</strong> Establishing a D2C presence and strategic B2B partnerships across key metropolitan areas.</span></li>
                        </ul>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="animate-slide-in-from-right">
                        <img src="https://source.unsplash.com/1024x768/?chart,growth,data,futuristic" alt="Growth chart" className="rounded-xl shadow-2xl shadow-cyan-900/30 w-full h-full object-cover"/>
                    </AnimateOnScroll>
                </div>
            </Section>
            
            {/* CTA Section */}
            <Section className="text-center bg-brand-blue/50">
                <AnimateOnScroll>
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">Become a Partner in Our Vision</h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
                        We are looking for partners who share our passion for innovation and impact. For access to our detailed investor deck and financial projections, please get in touch.
                    </p>
                    <PrimaryButton href="/contact">Contact Investor Relations</PrimaryButton>
                </AnimateOnScroll>
            </Section>
        </div>
    );
};

export default InvestorsPage;
