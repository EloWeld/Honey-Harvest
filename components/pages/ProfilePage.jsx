import React from 'react'
import OutlinedText from '../OutlinedText';
import PixelPanel from '../PixelPanel';

const ProfilePage = ({ user = null }) => {
  return (
    <div className='modal'>
      <div className='modalbig-top-panel'>
        <OutlinedText className='text-xl' text={"Доступно"} />
        <div className='flex flex-row justify-between gap-6'>
          <PixelPanel resolution="10px" type='primary' className2='' className='flex flex-row justify-center items-center'>
            <img src="/images/icons/ton.png" alt="TON" className="w-5 h-5 md:w-6 md:h-6 mr-1" />
            <OutlinedText className="text-base md:text-2xl font-bold" text={user.balanceTON} />
          </PixelPanel>
          <button className='silly-scale'>
            <PixelPanel resolution='15px' className2='' className='align-center'>
              <OutlinedText className="text-base md:text-2xl font-bold text-center p-2" centered={true} text={"Вывести"} />
            </PixelPanel>
          </button>
        </div>
        <div className='flex flex-row justify-between'>
          <OutlinedText className='md:text-xl' text={"Заработано :"} />
          <div className='flex flex-row gap-2 items-center'>
          <OutlinedText className='md:text-xl' text={user.earnedTON} />
          <img src="/images/icons/ton.png" alt="TON" className="w-5 h-5" />
          </div>
        </div>
        <div className='flex flex-row justify-between'>
          <OutlinedText className='md:text-xl' text={"Количество пчёл :"} />
          <OutlinedText className='md:text-xl' text={user.bees.length} />
        </div>
        <div className='flex flex-row justify-between'>
          <OutlinedText className='md:text-xl' text={"Приглашено людей :"} />
          <OutlinedText className='md:text-xl' text={user.referralsCount} />
        </div>
        {!user.tonWallet && (<button className='self-center silly-scale'>
          <PixelPanel resolution='1.1rem' className='align-center'>
            <OutlinedText className="text-base md:text-2xl font-bold text-center p-2" centered={true} text={"Подключить кошелек"} stroke='1px #511B0E' />
          </PixelPanel>
        </button>)}
        
      </div>
      <div className='modalbig-bottom-panel'>
        <OutlinedText className='text-3xl w-full text-center' centered={true} text={"Invite friend"} />
        <OutlinedText className='text-bs w-full text-center' centered={true} text={"получай 10% TON от каждого"} />
        <input className="block w-4/5 self-center rounded-md border-0 py-1 pl-3 pr-15 text-gray-900 ring-2 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-xl md:leading-6"

          placeholder={user.inviteLink} type="text"></input>
        <div className='flex flex-row gap-2 justify-center my-1'>
          <button className='silly-scale'>
            <PixelPanel resolution='1.2rem' className='align-center'>
              <div className='flex flex-row items-center px-4'>
                <img className='h-5/6 w-5/6 py-1 mr-2' src='/images/icons/share.png'></img>
                <OutlinedText className="md:text-2xl font-bold" centered={true} text={"Share"} stroke='1px #511B0E' />
              </div>
            </PixelPanel>
          </button>
          <button className='silly-scale'>
            <PixelPanel resolution='1.2rem' className='align-center'>
              <div className='flex flex-row items-center px-4'>
                <img className='h-5/6 w-5/6 py-1 mr-1' src='/images/icons/copy.png'></img>
                <OutlinedText className="md:text-2xl font-bold" centered={false} text={"Copy"} stroke='1px #511B0E' />
              </div>
            </PixelPanel>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage;