import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center pt-24">
            <div className="container mx-auto px-6">
                <div className="bg-brand-blue/50 border border-cyan-400/20 rounded-xl shadow-2xl shadow-cyan-900/30 p-8 md:p-12 max-w-3xl mx-auto animate-fade-in-up">
                    <div className="text-center mb-8">
                        <h1 className="text-5xl font-orbitron font-bold animate-glow">Join the Future</h1>
                        <p className="text-lg text-gray-400 mt-4">Be the first to know about our latest innovations, product launches, and news. Or, send us a message for partnerships and inquiries.</p>
                    </div>
                    
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '200ms' }}>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    className="w-full bg-brand-dark/50 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-all"
                                    placeholder="John Doe"
                                    aria-label="Your Name"
                                />
                            </div>
                            <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '300ms' }}>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    className="w-full bg-brand-dark/50 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-all"
                                    placeholder="you@example.com"
                                    aria-label="Email Address"
                                />
                            </div>
                        </div>
                        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '400ms' }}>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message (Optional)</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows={5}
                                className="w-full bg-brand-dark/50 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-all"
                                placeholder="Your message for partnerships, careers, etc."
                                aria-label="Message (Optional)"
                            ></textarea>
                        </div>
                        <div className="text-center pt-4 animate-fade-in-up opacity-0" style={{ animationDelay: '500ms' }}>
                            <button 
                                type="submit"
                                className="inline-block bg-brand-cyan text-brand-dark px-10 py-3 rounded-lg text-lg font-bold hover:bg-opacity-80 hover:shadow-[0_0_20px_theme(colors.brand-cyan)] transition-all duration-300"
                            >
                                Join Waitlist
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;