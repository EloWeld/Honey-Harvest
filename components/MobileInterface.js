// components/MobileInterface.js
import React, { useState } from 'react';
import PixelPanel from './PixelPanel';
import MarketItemPanel from './MarketItemPanel';

const MobileInterface = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMarketOpen, setIsMarketOpen] = useState(false);

  

  const openMarket = () => {
    setIsModalOpen(true);
    setIsMarketOpen(true);
  };

  const closeModal = () => {
    setIsMarketOpen(false)
    setIsModalOpen(false);
  };

  return (
    <div className='min-h-screen flex items-center justify-center desktop-container'>
      <div className='iphone-frame overflow-hidden flex flex-col items-center justify-center'>
        <div className={`overlay ${isModalOpen ? 'active' : ''}`} onClick={closeModal}></div>
        <div className='main-background'></div>
        <div className='beehive-background' full='false'></div>
        <div className='flowers-background'></div>
        <button className={`absolute gather-honey-button ${isModalOpen ? 'hidden' : ''}`}>
          Gather honey!
        </button>
        <div className='upper-statusbar'>
          <div className='u-nav-item'>
            <img
              className='u-nav-icon'
              src='/images/u_statusbar/ton-icon.png'
              alt='TON'
            />
            <h3>12.22</h3>
            <button className='u-nav-button'>
              <img src='/images/u_statusbar/plus-icon.png' alt='PLUS' />
            </button>
          </div>
          <div className='u-nav-item'>
            <img
              className='u-nav-icon'
              src='/images/icons/honey.png'
              alt='HONEY'
            />
            <h3>1.22</h3>
            <button className='u-nav-button'>
              <img src='/images/u_statusbar/plus-icon.png' alt='PLUS' />
            </button>
          </div>
        </div>
        <div className={`side-panel ${isModalOpen ? 'hidden' : ''}`}>
          <button className="w-panel-item-brown">
            <img className="w-panel-icon" src="/images/icons/cupboard.png" alt="My bees" />
            <span className='w-panel-span' >My bees</span>
          </button>
          <button className="w-panel-item-green">
            <img className="w-panel-icon" src="/images/icons/bank.png" alt="Staking" />
            <span className='w-panel-span' >Staking</span>
          </button>
        </div>
        <div className='bottom-navbar'>
          <button className='b-nav-item' onClick={openMarket}>
            <img src='/images/b_navbar/market-icon.png' alt='Market' />
            Market
          </button>
          <button className='b-nav-item'>
            <img src='/images/b_navbar/info-icon.png' alt='Info' />
            Info
          </button>
          <button className='b-nav-item' onClick={closeModal}>
            <img src='/images/b_navbar/home-icon.png' alt='Home' />
            Home
          </button>
          <button className='b-nav-item'>
            <img src='/images/b_navbar/profile-icon.png' alt='Profile' />
            Profile
          </button>
        </div>
        {isMarketOpen && (
          <div className='modal'>
            <div className='modal-header'>
              Market
            </div>
            <div className='modal-body'>
            <MarketItemPanel
              image="/images/bees/bee_v1.png"
              name="Bee"
              ton="1.4"
              honey="10"
              price="2"
              quality="Regular"
            />
            <MarketItemPanel
              image="/images/bees/bee_v2.png"
              name="Bee v2"
              ton="1.8"
              honey="15"
              price="3"
              quality="Common"
            />
            <MarketItemPanel
              image="/images/bees/bee_v3.png"
              name="Bee v3"
              ton="1.4"
              honey="10"
              price="2"
              quality="Regular"
            />
            </div>
            <div className='modal-footer'></div>
          </div>
        )}

      </div>
    </div>
  )
}

export default MobileInterface
