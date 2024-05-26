import React, { useEffect, useRef, useState } from 'react';

const Bee = ({ imageUrl, scale = 1, speed, distance, hiveCoordinates = { x: 263, y: 1482 } }) => {
  const beeRef = useRef(null);
  const [animationName, setAnimationName] = useState('');

  useEffect(() => {
    const updateBeePositionAndSize = () => {
      const bee = beeRef.current;
      const container = bee.parentElement;
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;

      // Original dimensions of the background image
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

      const xPercent = hiveCoordinates.x / bgWidth;
      const yPercent = hiveCoordinates.y / bgHeight;

      const adjustedX = xPercent * bgRenderWidth - (bgRenderWidth - containerWidth) / 2;
      const adjustedY = yPercent * bgRenderHeight - (bgRenderHeight - containerHeight) / 2;

      // Calculate new size based on the background rendering size
      const beeWidth = 100 * (scale / bgWidth) * bgRenderWidth;
      const beeHeight = 100 * (scale / bgHeight) * bgRenderHeight;

      bee.style.left = `${adjustedX}px`;
      bee.style.top = `${adjustedY}px`;
      bee.style.width = `${beeWidth}px`;
      bee.style.height = `${beeHeight}px`;
    };

    updateBeePositionAndSize();
    window.addEventListener('resize', updateBeePositionAndSize);

    return () => {
      window.removeEventListener('resize', updateBeePositionAndSize);
    };
  }, [hiveCoordinates, scale]);

  useEffect(() => {
    const uniqueAnimationName = `beeAnimation_${Math.random().toString(36).substr(2, 9)}`;
    setAnimationName(uniqueAnimationName);

    const keyframes = `
      @keyframes ${uniqueAnimationName} {
        0% {
          transform: translateX(0) scale(${scale}, ${scale});
        }
        46% {
          transform: translateX(${distance}px) scale(${scale}, ${scale});
        }
        50% {
          transform: translateX(${distance}px) scale(-${scale}, ${scale});
        }
        96% {
          transform: translateX(0) scale(-${scale}, ${scale});
        }
        100% {
          transform: translateX(0) scale(${scale}, ${scale});
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
  }, [distance, scale, hiveCoordinates, speed]);

  return (
    <div
      ref={beeRef}
      className="absolute"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: '100% 100%',
        zIndex: 1,
        transform: `translate(-50%, -50%)`,
        animation: `${animationName} ${100 / (speed)}s linear infinite`
      }}
    ></div>
  );
};

export default Bee;
