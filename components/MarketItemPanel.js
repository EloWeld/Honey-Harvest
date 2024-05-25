import React from 'react';
import PixelPanel from './PixelPanel';
import OutlinedText from './OutlinedText';

const MarketItemPanel = ({ image, name, ton, honey, price, quality }) => {
  return (
    <div className='mx-3'>
    <PixelPanel type={'market'} resolution='30px'>
      <div className="market-item-content flex items-center justify-between p-4 h-full">
        <div className="flex items-center">
          <img src={image} alt={name} className="w-16 h-16 mr-4 -rotate-12" />
          <div>
            <OutlinedText className="text-3xl font-bold" text={name}/>
            <OutlinedText className="text-lg" text={"+" + ton + "TON"} />
            <OutlinedText className="text-lg" text={"+" + honey + "Honey"} />
          </div>
        </div>
        <div className="flex flex-col items-center">
        <OutlinedText text={quality}/>
          
          <button className="flex items-center gap-1 px-4 py-3 mt-2 silly-scale" style={{backgroundImage:"url('/images/panels/primary/button.png')", backgroundSize: "100% 100%"}}>
            <img src="/images/icons/ton.png" alt="TON" className="w-6 h-6 mr-1" />
            <OutlinedText className="text-xl font-bold" text={price}/>
          </button>
        </div>
      </div>
      </PixelPanel>
    </div>
  );
};

export default MarketItemPanel;
