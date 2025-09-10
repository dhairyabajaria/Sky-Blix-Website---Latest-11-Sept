import React, { useEffect, useMemo, Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingShape from './components/FloatingShape';
import StubbleBackground from './components/StubbleBackground';
import ParticleBackground from './components/ParticleBackground';

const HomePage = lazy(() => import('./pages/HomePage'));
const InnovationsPage = lazy(() => import('./pages/InnovationsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const InnovationDetailPage = lazy(() => import('./pages/InnovationDetailPage'));
const InvestorsPage = lazy(() => import('./pages/InvestorsPage'));

const BackgroundGrid: React.FC = () => (
    <div className="animate-grid-scroll fixed top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-10 -z-20"></div>
);

const Star: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
    <div className="absolute rounded-full bg-brand-cyan/80 animate-star-twinkle" style={style}></div>
);

const AnimatedBackground: React.FC = () => {
    const createStarLayer = (id: string, count: number, size: number, duration: string) => {
        const stars = useMemo(() => Array.from({ length: count }).map((_, i) => {
            const starSize = Math.random() * size + (size / 2);
            const twinkleDuration = Math.random() * 4 + 2; // 2s to 6s
            const twinkleDelay = Math.random() * 5;
            return (
                <Star key={i} style={{
                    width: `${starSize}px`,
                    height: `${starSize}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDuration: `${twinkleDuration}s`,
                    animationDelay: `${twinkleDelay}s`,
                }} />
            );
        }), [count, size]);
        
        return (
            <div key={id} className="absolute w-full h-[200%] top-[-100%] left-0 animate-star-move" style={{animationDuration: duration}}>
                {stars}
            </div>
        );
    };

    return (
        <div 
            className="fixed top-0 left-0 w-full h-full -z-30 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,white_60%,transparent_100%)]"
            style={{
                transform: 'translate(calc(var(--mouse-x, 0) * 10px), calc(var(--mouse-y, 0) * 10px))',
                transition: 'transform 0.4s ease-out',
                willChange: 'transform',
            }}
        >
            {createStarLayer('sm', 150, 1, '120s')}
            {createStarLayer('md', 70, 1.5, '80s')}
            {createStarLayer('lg', 30, 2, '50s')}
        </div>
    );
};

const PageLoader: React.FC = () => (
    <div className="flex-grow flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-t-brand-cyan border-white/20 rounded-full animate-spin"></div>
    </div>
);


function App() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth) * 2 - 1; // -1 to 1
      const y = -(clientY / innerHeight) * 2 + 1; // -1 to 1, inverted
      document.documentElement.style.setProperty('--mouse-x', `${x}`);
      document.documentElement.style.setProperty('--mouse-y', `${y}`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <HashRouter>
        <div className="relative min-h-screen flex flex-col overflow-x-hidden text-brand-light">
            {/* --- BACKGROUND LAYERS --- */}
            {/* Ordered from back to front for clarity */}
            <div className="fixed inset-0 bg-brand-dark -z-50" aria-hidden="true" />
            <StubbleBackground />      {/* z-[-40] */}
            <AnimatedBackground />     {/* z-[-30] */}
            <BackgroundGrid />         {/* z-[-20] */}
            <ParticleBackground 
                count={100} 
                particleColors={['bg-brand-cyan', 'bg-white/80']} 
                animationType="flow" 
            />                         {/* z-[-10] */}
            <FloatingShape />          {/* z-[-5] */}
            
            {/* --- UI LAYERS --- */}
            <Header />
            <main className="flex-grow z-10 flex flex-col">
                <Suspense fallback={<PageLoader />}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/innovations" element={<InnovationsPage />} />
                        <Route path="/innovations/:id" element={<InnovationDetailPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/investors" element={<InvestorsPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
        </div>
    </HashRouter>
  );
}

export default App;