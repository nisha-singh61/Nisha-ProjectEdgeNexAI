

"use client";

import React, { useEffect, useState } from "react";

const ShootingStars = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Enable rendering after component mounts (client only)
    setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="absolute inset-0 -z-10 shooting-stars-bg">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ShootingStars;

