import React, { useEffect, useRef, useState } from 'react';

const Bee = ({ imageUrl, scale, startPoint, startAngle=12, distance = 300, speed = 2 }) => {
    const beeRef = useRef(null);
    const [direction, setDirection] = useState(true); // true = initial direction, false = reversed direction
  
    useEffect(() => {
      const bee = beeRef.current;
      const beeWidth = bee.offsetWidth;
  
      // Генерация случайного начального положения
      const startX = startPoint.x;
      const startY = startPoint.y;
      const angle = startAngle;
  
      bee.style.transformOrigin = "center";
      bee.style.scale = scale;
      bee.style.rotate = `${angle}deg`;
      bee.style.top = `${startY}px`;
      bee.style.left = `${startX}px`;
  
      let start = null;
      const duration = distance / speed;
      let frame;
  
      const calculateNewPosition = (x, y, angle, distance) => {
        const radian = (angle * Math.PI) / 180;
        const newX = x + distance * Math.cos(radian);
        const newY = y + distance * Math.sin(radian);
        return { newX, newY };
      };
  
      const animate = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
  
        const { newX, newY } = calculateNewPosition(
          startX,
          startY,
          direction ? angle : angle + 180,
          (progress / duration) * distance
        );
        bee.style.left = `${newX}px`;
        bee.style.top = `${newY}px`;
  
        if (progress < duration * 1000) {
          frame = requestAnimationFrame(animate);
        } else {
          setDirection(!direction);
          start = null;
          bee.style.transform = `scaleX(${direction ? -1 : 1})`;
          frame = requestAnimationFrame(animate);
        }
      };
  
      frame = requestAnimationFrame(animate);
  
      return () => cancelAnimationFrame(frame);
    }, [direction, speed, distance]);
  

  return (
    <div ref={beeRef} className="absolute w-36 h-36" style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: '100% 100%', zIndex: 1 }}></div>
  );
};

export default Bee;