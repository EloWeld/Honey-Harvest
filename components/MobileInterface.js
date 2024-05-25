// components/MobileInterface.js
import React, { useState } from 'react'
import PixelPanel from './PixelPanel'
import MarketItemPanel from './MarketItemPanel'
import OutlinedText from './OutlinedText'
import ProfilePage from './pages/ProfilePage'
import RoadmapPage from './pages/RoadmapPage'
import StakingPage from './pages/StakingPage'
import BeesInventoryPage from './pages/BeesInventoryPage'
import Bee from './Bee'
import MarketPage from './pages/MarketPage'
import InfoPage from './pages/InfoPage'

const MobileInterface = () => {
  const [user, setUserData] = useState({
    honeyReady: true,
    tonWallet: false,
    balanceTON: 12.23,
    balanceHoney: 155.2,
    earnedTON: 10,
    referralsCount: 3,
    inviteLink: 'https://t.me/ArturTestionBbot/arturtest',
    activeBeeId: 'asdojn1-sdf',
    bees: [
      { id: 'asdojn1-sdf', type: 'bee_v3' },
      { id: 'asdojn2-sdf', type: 'bee_v1' }
    ]
  })
  const [page, setPage] = useState(null)

  const openMarket = () => setPage('market')

  const openInfo = () => setPage('info')

  const openRoadmap = () => setPage('roadmap')

  const roadmapBack = () => openInfo()

  const openProfile = () => setPage('profile')

  const closeModal = () => setPage(null)

  const openBeesInventory = () => setPage('bees')

  const openStaking = () => setPage('staking')

  const gatherHoney = () => {
    setUserData({
      ...user,
      honeyReady: false
    })
  }

  return (
    <div className='min-h-screen flex items-center justify-center desktop-container'>
      <div className='iphone-frame overflow-hidden flex flex-col items-center justify-center'>
        <div
          className={`overlay ${
            page != null && page != 'bees' ? 'active' : ''
          }`}
          onClick={closeModal}
        ></div>
        {page == null && (
          <div className='absolute w-full h-screen overflow-hidden'>
            <Bee
              imageUrl='/images/bees_animated/bee_v1.gif'
              scale={0.8}
              startPoint={{ x: 100, y: 450 }}
              startAngle={-10}
              speed={0.03}
              distance={0.1}
            />
            <Bee
              imageUrl='/images/bees_animated/bee_v1.gif'
              scale={0.5}
              startPoint={{ x: 95, y: 250 }}
              startAngle={0}
              speed={0.04}
              distance={0.05}
            />
            <Bee
              imageUrl='/images/bees_animated/bee_v1.gif'
              scale={0.3}
              startPoint={{ x: 260, y: 320 }}
              startAngle={-15}
              speed={0.06}
              distance={0.06}
            />
          </div>
        )}
        <div className='main-background'></div>
        <div
          className='beehive-background'
          full={user.honeyReady ? 'true' : 'false'}
        ></div>
        <div className='flowers-background'></div>
        <button
          disabled={!user.honeyReady}
          onClick={gatherHoney}
          className={`absolute gather-honey-button ${page ? 'hidden' : ''}`}
        >
          Gather honey!
        </button>
        <div className='upper-statusbar'>
          <div className='u-nav-item'>
            <div className='w-10 h-10'>
              <img
                className='u-nav-icon'
                src='/images/u_statusbar/ton-icon.png'
                alt='TON'
              />
            </div>
            <OutlinedText text={user.balanceTON} />
            <button className='u-nav-button w-10 h-10'>
              <img
                className='mx-0 my-auto'
                src='/images/u_statusbar/plus-icon.png'
                alt='PLUS'
              />
            </button>
          </div>
          <div className='u-nav-item'>
            <div className='w-10 h-10'>
              <img
                className='u-nav-icon'
                src='/images/icons/koks.png'
                alt='HONEY'
              />
            </div>
            <OutlinedText text={user.balanceHoney} />
            <button className='u-nav-button w-10 h-10'>
              <img
                className='mx-0 my-auto'
                src='/images/u_statusbar/plus-icon.png'
                alt='PLUS'
              />
            </button>
          </div>
        </div>
        <div className={`side-panel ${page ? 'hidden' : ''}`}>
          <button
            className='w-panel-item-brown silly-scale'
            onClick={openBeesInventory}
          >
            <img
              className='w-panel-icon'
              src='/images/icons/cupboard.png'
              alt='My bees'
            />
            <span className='w-panel-span'>My bees</span>
          </button>
          <button
            className='w-panel-item-green silly-scale'
            onClick={openStaking}
          >
            <img
              className='w-panel-icon'
              src='/images/icons/bank.png'
              alt='Staking'
            />
            <span className='w-panel-span'>Staking</span>
          </button>
        </div>
        <div className='bottom-navbar'>
          <button className='b-nav-item' onClick={openMarket}>
            <img src='/images/b_navbar/market-icon.png' alt='Market' />
            Market
          </button>
          <button className='b-nav-item' onClick={openInfo}>
            <img src='/images/b_navbar/info-icon.png' alt='Info' />
            Info
          </button>
          <button className='b-nav-item' onClick={closeModal}>
            <img src='/images/b_navbar/home-icon.png' alt='Home' />
            Home
          </button>
          <button className='b-nav-item' onClick={openProfile}>
            <img src='/images/b_navbar/profile-icon.png' alt='Profile' />
            Profile
          </button>
        </div>
        {page === 'market' && <MarketPage user={user} />}
        {page === 'info' && <InfoPage openRoadmap={openRoadmap} />}
        {page === 'staking' && <StakingPage back={closeModal} />}
        {page === 'roadmap' && <RoadmapPage roadmapBack={roadmapBack} />}
        {page === 'profile' && <ProfilePage />}
        {page === 'bees' && <BeesInventoryPage />}
      </div>
    </div>
  )
}

export default MobileInterface
