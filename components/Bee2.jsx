import React, { useEffect, useRef, useState } from 'react';

const Bee = ({ imageUrl, scale = 1, startPoint = { x: 50, y: 50 }, startAngle = 12, distance = 30, speed = 2 }) => {
  const beeRef = useRef(null);
  const [animationName, setAnimationName] = useState('');

  useEffect(() => {
    const bee = beeRef.current;
    const duration = distance / speed; // Duration in seconds

    const updateBeePosition = () => {
      const container = bee.parentElement;
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;

      // Replace with your background image's original dimensions
      const bgWidth = 1179;
      const bgHeight = 2556;

      const containerRatio = containerWidth / containerHeight;
      const bgRatio = bgWidth / bgHeight;

      let bgRenderWidth, bgRenderHeight;
      if (containerRatio > bgRatio) {
        bgRenderWidth = containerWidth;
        bgRenderHeight = containerWidth / bgRatio;
      } else {
        bgRenderHeight = containerHeight;
        bgRenderWidth = containerHeight * bgRatio;
      }

      const xPercent = startPoint.x / 100;
      const yPercent = startPoint.y / 100;

      const startX = xPercent * bgRenderWidth - (bgRenderWidth - containerWidth) / 2;
      const startY = yPercent * bgRenderHeight - (bgRenderHeight - containerHeight) / 2;

      // Ensure startX and startY are within container bounds
      const adjustedStartX = Math.max(0, Math.min(containerWidth - bee.offsetWidth, startX));
      const adjustedStartY = Math.max(0, Math.min(containerHeight - bee.offsetHeight, startY));

      const calculateNewPosition = (x, y, angle, distance) => {
        const radian = (angle * Math.PI) / 180;
        const newX = x + distance * Math.cos(radian);
        const newY = y + distance * Math.sin(radian);
        return { newX, newY };
      };

      const { newX: endX, newY: endY } = calculateNewPosition(
        adjustedStartX,
        adjustedStartY,
        startAngle,
        distance
      );

      const uniqueAnimationName = `beeAnimation_${Math.random().toString(36).substr(2, 9)}`;
      setAnimationName(uniqueAnimationName);

      const keyframes = `
        @keyframes ${uniqueAnimationName} {
          0% {
            left: ${adjustedStartX}%;
            top: ${adjustedStartY}%;
            transform: scale(${scale}, ${scale}) rotate(${startAngle}deg);
          }
          50% {
            left: ${endX}%;
            top: ${endY}%;
            transform: scale(${scale}, ${scale}) rotate(${startAngle}deg);
          }
          52% {
            left: ${endX}%;
            top: ${endY}%;
            transform: scale(-${scale}, ${scale}) rotate(${startAngle * -1}deg);
          }
          98% {
            left: ${adjustedStartX}%;
            top: ${adjustedStartY}%;
            transform: scale(-${scale}, ${scale}) rotate(${startAngle * -1}deg);
          }
          100% {
            left: ${adjustedStartX}%;
            top: ${adjustedStartY}%;
            transform: scale(${scale}, ${scale}) rotate(${startAngle}deg);
          }
        }
      `;

      const styleSheet = document.createElement("style");
      styleSheet.type = "text/css";
      styleSheet.innerText = keyframes;
      document.head.appendChild(styleSheet);

      return () => {
        document.head.removeChild(styleSheet);
      };
    };

    updateBeePosition();
    window.addEventListener('resize', updateBeePosition);

    return () => {
      window.removeEventListener('resize', updateBeePosition);
    };
  }, [startPoint, startAngle, distance, speed, scale]);

  return (
    <div
      ref={beeRef}
      className="absolute w-36 h-36"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: '100% 100%',
        zIndex: 1,
        transform: `translate(-50%, -50%) scale(${scale}) rotate(${startAngle}deg)`,
        animation: `${animationName} ${distance / speed}s linear infinite`
      }}
    ></div>
  );
};

export default Bee;
