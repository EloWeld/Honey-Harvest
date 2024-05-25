import React from 'react'
import OutlinedText from '../OutlinedText';
import PixelPanel from '../PixelPanel';

const ProfilePage = ({ user = null }) => {
  if (!user) {
    user = {
      balanceTon: 12.233
    }
  }
  return (
    <div className='modal'>
      <div className='modalbig-top-panel'>
        <OutlinedText className='text-xl' text={"Доступно"} />
        <div className='flex flex-row gap-6'>
          <PixelPanel resolution="10px" type='primary' className2='' className='flex flex-row justify-center items-center'>
            <img src="/images/icons/ton.png" alt="TON" className="w-6 h-6 mr-1" />
            <OutlinedText className="text-2xl font-bold" text={user.balanceTon} />
          </PixelPanel>
          <button className='silly-scale'>
            <PixelPanel resolution='15px' className2='' className='align-center'>
              <OutlinedText className="text-3xl font-bold text-center p-2" centered={true} text={"Вывести"} />
            </PixelPanel>
          </button>
        </div>
        <div className='flex flex-row justify-between'>
          <OutlinedText className='text-xl' text={"Заработано :"} />
          <OutlinedText className='text-xl' text={"15 TON"} />
        </div>
        <div className='flex flex-row justify-between'>
          <OutlinedText className='text-xl' text={"Количество пчёл :"} />
          <OutlinedText className='text-xl' text={"12"} />
        </div>
        <div className='flex flex-row justify-between'>
          <OutlinedText className='text-xl' text={"Приглашено людей :"} />
          <OutlinedText className='text-xl' text={"3"} />
        </div>
        <button className='h-10 w-full self-center silly-scale'>
          <PixelPanel resolution='15px' className='align-center'>
            <OutlinedText className="text-2xl font-bold text-center px-4" centered={true} text={"Подключить кошелек"} stroke='1px #511B0E' />
          </PixelPanel>
        </button>
      </div>
      <div className='modalbig-bottom-panel'>
        <OutlinedText className='text-3xl w-full text-center' centered={true} text={"Invite friend"} />
        <OutlinedText className='text-bs w-full text-center' centered={true} text={"получай 10% TON от каждого"} />
        <input className="block w-4/5 text-xl self-center rounded-md border-0 py-1 pl-3 pr-15 text-gray-900 ring-2 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

          placeholder="https://________________/..." type="text"></input>
        <div className='flex flex-row gap-2 justify-center'>
          <button className='silly-scale'>
            <PixelPanel resolution='16px' className='align-center'>
              <div className='flex flex-row items-center px-4'>
                <img className='h-5/6 w-5/6 py-1 mr-2' src='/images/icons/share.png'></img>
                <OutlinedText className="text-2xl font-bold" centered={true} text={"Share"} stroke='1px #511B0E' />
              </div>
            </PixelPanel>
          </button>
          <button className='silly-scale'>
            <PixelPanel resolution='16px' className='align-center'>
              <div className='flex flex-row items-center px-4'>
                <img className='h-5/6 w-5/6 py-1 mr-1' src='/images/icons/copy.png'></img>
                <OutlinedText className="text-2xl font-bold" centered={false} text={"Copy"} stroke='1px #511B0E' />
              </div>
            </PixelPanel>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage;