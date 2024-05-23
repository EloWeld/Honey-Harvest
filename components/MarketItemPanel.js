import React from 'react';
import PixelPanel from './PixelPanel';

const MarketItemPanel = ({ image, name, ton, honey, price, quality }) => {
  return (
    <PixelPanel resolution='30px' sx={{marginBottom: '20px'}}>
      <div className="market-item-content flex items-center justify-between p-4 h-full">
        <div className="flex items-center">
          <img src={image} alt={name} className="w-16 h-16 mr-4 -rotate-12" />
          <div>
            <h2 className="text-xl font-bold shaded-text">{name}</h2>
            <p className="text-lg shaded-text">+{ton} TON</p>
            <p className="text-lg shaded-text">+{honey} Honey</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="shaded-text">{quality}</span>
          <div className="items-center justify-center bg-brown-200 px-2 py-1 rounded-lg mt-2">
            <span className="text-xl font-bold shaded-text">{price}</span>
            <img src="/images/icons/ton.png" alt="TON" className="w-6 h-6 mr-1" />
          </div>
        </div>
      </div>
    </PixelPanel>
  );
};

export default MarketItemPanel;
