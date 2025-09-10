import React from 'react';

const FloatingShape: React.FC = () => {
  // A simplified icosahedron representation with 10 intersecting planes
  const planes = [
    { transform: 'rotateY(0deg) rotateX(63.43deg) scale(1.5)' },
    { transform: 'rotateY(72deg) rotateX(63.43deg) scale(1.5)' },
    { transform: 'rotateY(144deg) rotateX(63.43deg) scale(1.5)' },
    { transform: 'rotateY(216deg) rotateX(63.43deg) scale(1.5)' },
    { transform: 'rotateY(288deg) rotateX(63.43deg) scale(1.5)' },
    { transform: 'rotateY(36deg) rotateX(-63.43deg) scale(1.5)' },
    { transform: 'rotateY(108deg) rotateX(-63.43deg) scale(1.5)' },
    { transform: 'rotateY(180deg) rotateX(-63.43deg) scale(1.5)' },
    { transform: 'rotateY(252deg) rotateX(-63.43deg) scale(1.5)' },
    { transform: 'rotateY(324deg) rotateX(-63.43deg) scale(1.5)' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-5 flex items-center justify-center opacity-20" style={{ perspective: '1200px' }}>
      <div className="animate-rotate-3d" style={{ transformStyle: 'preserve-3d' }}>
        <div
          className="relative w-64 h-64"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(calc(var(--mouse-y, 0) * 10deg)) rotateY(calc(var(--mouse-x, 0) * 10deg))',
            transition: 'transform 0.4s ease-out',
            willChange: 'transform',
          }}
        >
          <div
            className="absolute w-full h-full"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'rotateZ(calc(var(--mouse-x, 0) * -15deg)) scale(calc(1 - var(--mouse-y, 0) * 0.05))',
              transition: 'transform 0.4s ease-out',
              willChange: 'transform',
            }}
          >
            <div className="absolute w-full h-full" style={{ transformStyle: 'preserve-3d', animation: 'spin 60s linear infinite', willChange: 'transform' }}>
                {planes.map((p, i) => (
                  <div key={i} className="absolute inset-0" style={{ transform: p.transform }}>
                    <div className="absolute -inset-8 border border-cyan-400/50 rounded-full"></div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes spin {
          from { transform: rotateZ(0deg) rotateY(0deg); }
          to { transform: rotateZ(360deg) rotateY(360deg); }
        }
      `}</style>
    </div>
  );
};

export default FloatingShape;