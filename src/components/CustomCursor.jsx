import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if touch device / mobile screen width
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering interactive element
      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, select, [data-interactive="true"]');
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Small Central Neon Dot */}
      <div
        className="fixed top-0 left-0 w-3 h-3 bg-quantum-cyan rounded-full pointer-events-none z-50 transition-transform duration-75 ease-out shadow-[0_0_10px_#06b6d4]"
        style={{
          transform: `translate3d(${position.x - 6}px, ${position.y - 6}px, 0) scale(${isHovered ? 1.5 : 1})`,
        }}
      />
      {/* Glowing Ring Follower */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out ${
          isHovered
            ? 'w-12 h-12 border-2 border-quantum-purple bg-quantum-purple/10 shadow-[0_0_20px_rgba(168,85,247,0.4)]'
            : 'w-8 h-8 border border-white/20 bg-transparent'
        }`}
        style={{
          transform: `translate3d(${position.x - (isHovered ? 24 : 16)}px, ${position.y - (isHovered ? 24 : 16)}px, 0)`,
        }}
      />
    </>
  );
}
