import React, { useEffect, useState } from 'react';

export const Curson = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [elePos, setElePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Update mouse position on mousemove
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const d = 0.1; // Damping factor
    let animationId;

    const followMouse = () => {
      setElePos((prev) => {
        const dx = mousePos.x - prev.x;
        const dy = mousePos.y - prev.y;
        return {
          x: prev.x + dx * d,
          y: prev.y + dy * d,
        };
      });
      animationId = requestAnimationFrame(followMouse);
    };

    animationId = requestAnimationFrame(followMouse);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [mousePos]);

  return (
    <div
      style={{
        left: `${elePos.x}px`,
        top: `${elePos.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
      className="fixed bg-[#b7d644] w-5 h-5 z-[9999] rounded-full pointer-events-none"
      id="cursor"
    ></div>
  );
};
