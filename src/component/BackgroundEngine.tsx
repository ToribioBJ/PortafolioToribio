import { useEffect, useRef } from 'react';
import { runBackground } from './pureJsCode.ts'; // Aquí es donde tú pegas tu código

const BackgroundEngine = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    containerRef.current.innerHTML = '';

    const cleanup = runBackground(containerRef.current);

    return () => {
      if (cleanup) cleanup(); 
    };
  }, []);

  return (
   <div 
    ref={containerRef} 
    className="fixed inset-0 -z-10 bg-black overflow-hidden pointer-events-none" 
  />
  );
};

export default BackgroundEngine;