import React from 'react';
import PixelPanel from './PixelPanel';
import OutlinedText from './OutlinedText';

const MarketItemPanel = ({ image, name, ton, honey, price, quality }) => {
  return (
    <div className='mx-3'>
    <PixelPanel type={'market'} resolution='1.4rem'>
      <div className="market-item-content flex items-center justify-between p-2 h-full">
        <div className="flex items-center">
          <img src={image} alt={name} className="w-16 h-14 mr-4 -rotate-12" />
          <div>
            <OutlinedText className="text-xl font-bold tstroke-3 sm:text-3xl sm:tstroke-4" text={name}/>
            <OutlinedText className="text-xs tstroke-3 sm:text-lg sm:tstroke-4" text={"+" + ton + "TON"} />
            <OutlinedText className="text-xs tstroke-3 sm:text-lg sm:tstroke-4" text={"+" + honey + "Honey"} />
          </div>
        </div>
        <div className="flex flex-col items-end">
        <OutlinedText text={quality}/>
          <button className="flex items-center gap-1 px-3 py-2 sm:px-4 sm:py-3 mt-2 silly-scale" style={{backgroundImage:"url('/images/panels/primary/button.png')", backgroundSize: "100% 100%"}}>
            <img src="/images/icons/ton.png" alt="TON" className="w-4 h-4 sm:w-6 sm:h-6 mr-1" />
            <OutlinedText className="text-sm tstroke-3 md:text-xl font-bold sm:tstroke-4 " text={price}/>
          </button>
        </div>
      </div>
      </PixelPanel>
    </div>
  );
};

export default MarketItemPanel;
