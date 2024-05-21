import React, { useState, useEffect } from 'react';
import './cursor.css';

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="mouse-follower" style={{ left: position.x, top: position.y }}>
      <div className="dot"></div>
    </div>
  );
};

export default MouseFollower;
