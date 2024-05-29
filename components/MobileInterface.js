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
      { id: 'asdojn4jkwfnjsfsdf', type: 'bee_v6' },
      { id: 'asdojn4-sdf', type: 'bee_v4' },
      { id: 'asdojn3-sdf', type: 'bee_v3' },
      { id: 'asdojn2-sdf', type: 'bee_v1' },
    ]
  })
  const market = [
    {
      id: 'bee_v1',
      image: '/images/bees/bee_v1.png',
      name: 'Bee',
      ton: '1.4',
      honey: '10',
      price: '2',
      quality: 'Regular'
    },
    {
      id: 'bee_v2',
      image: '/images/bees/bee_v2.png',
      name: 'Bee v2',
      ton: '1.8',
      honey: '15',
      price: '3',
      quality: 'Common'
    },
    {
      id: 'bee_v3',
      image: '/images/bees/bee_v3.png',
      name: 'Bee v3',
      ton: '2.2',
      honey: '20',
      price: '5',
      quality: 'Rare'
    },
    {
      id: 'bee_v4',
      image: '/images/bees/bee_v4.png',
      name: 'Bee v4',
      ton: '2.6',
      honey: '25',
      price: '10',
      quality: 'Very rare'
    },
    {
      id: 'bee_v5',
      image: '/images/bees/bee_v5.png',
      name: 'Bee v5',
      ton: '3.0',
      honey: '50',
      price: '20',
      quality: 'Epic'
    },
    {
      id: 'bee_v6',
      image: '/images/bees/bee_v6.png',
      name: 'Зря я сюда полез',
      ton: '30.0',
      honey: '500',
      price: '200',
      quality: 'Legendary'
    }
  ];

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
              scale={1.4}
              speed={15}
              distance={80}
              hiveCoordinates={{ x: 180, y: 1350 }} // Координаты улья относительно изображения фона
            />
            <Bee
              imageUrl='/images/bees_animated/bee_v1.gif'
              scale={1}
              speed={20}
              distance={55}
              hiveCoordinates={{ x: 75, y: 1100 }} // Координаты улья относительно изображения фона
            />
            <Bee
              imageUrl='/images/bees_animated/bee_v1.gif'
              scale={0.7}
              speed={25}
              distance={40}
              hiveCoordinates={{ x: 570, y: 1070 }} // Координаты улья относительно изображения фона
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
          <OutlinedText centered={true} className="neg-letter-spacing" stroke='4px black' text={"Gather honey!"}/>
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
            <OutlinedText className='w-panel-span' text={"My bees"}></OutlinedText>
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
            <OutlinedText className='w-panel-span' text={"Staking"}></OutlinedText>
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
        {page === 'market' && <MarketPage user={user} market={market} />}
        {page === 'info' && <InfoPage openRoadmap={openRoadmap} />}
        {page === 'staking' && <StakingPage back={closeModal} />}
        {page === 'roadmap' && <RoadmapPage roadmapBack={roadmapBack} />}
        {page === 'profile' && <ProfilePage user={user} />}
        {page === 'bees' && <BeesInventoryPage user={user} market={market} />}
      </div>
    </div>
  )
}

export default MobileInterface
