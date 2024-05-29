import React from 'react'
import OutlinedText from '../OutlinedText';
import PixelPanel from '../PixelPanel';
import { OurIcon } from '../Utils'

const StakingPage = ({ user = null, back }) => {
  if (!user) {
    user = {
      balanceTon: 12.233
    }
  }
  return (
    <div className='modal'>
      <div className='modalbig-top-panel'>
        <div className='flex flex-row justify-between items-center'>
          <OutlinedText className='text-3xl md:text-5xl' text={"Staking"} />
          <button className='u-nav-button h-14 w-14' onClick={back}>
            <img className="h-4/6 w-4/6" src='/images/icons/back.png' alt='BACK' />
          </button>
        </div>
        <div className='max-h-1 w-1'></div>

        <div className='flex flex-row justify-between gap-6 items-center'>
          <OutlinedText className='md:text-xl' text={"Доступно"} />
          <div className='flex flex-row items-center gap-3'><OurIcon icon='ton' /><OutlinedText className='md:text-xl' text={"20.3"} /></div>
        </div>
        <div className='flex flex-row justify-between gap-6 items-center'>
          <input className="block w-4/5 text-xl self-center rounded-md border-0 py-1 pl-3 pr-15 text-gray-900 ring-2 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

            placeholder="30" type="text"></input>
          <button className='w-30 relative silly-scale'>
            <PixelPanel resolution='15px' className2='' className='align-center'>
              <OutlinedText className="md:text-3xl font-bold text-center px-4 py-1" centered={true} text={"Стейк"} />
            </PixelPanel>
          </button>
        </div>

        <div className='flex flex-row justify-between gap-6 items-center'>
          <OutlinedText className='md:text-xl' text={"Вы получите :"} />
          <div className='flex flex-row items-center gap-3'><OurIcon icon='ton' /><OutlinedText className='md:text-xl' text={"23.3"} /></div>
        </div>

      </div>
      <div className='modalbig-bottom-panel'>
        <div className='flex flex-row justify-between gap-6 items-center'>
          <OutlinedText className='md:text-xl' text={"Застейкано :"} />
          <div className='flex flex-row items-center gap-3'><OurIcon icon='ton' /><OutlinedText className='md:text-xl' text={"23.3"} /></div>
        </div>
        <div className='flex flex-row justify-between gap-6 items-center'>
          <OutlinedText className='md:text-xl' text={"Осталось :"} />
          <div className='flex flex-row items-center gap-3'><OurIcon icon='ton' /><OutlinedText className='md:text-xl' text={"23.3"} /></div>
        </div>
        <div className='flex flex-row justify-between gap-6 items-center'>
          <OutlinedText className='md:text-xl' text={"Вы получите :"} />
          <div className='flex flex-row items-center gap-3'><OurIcon icon='ton' /><OutlinedText className='md:text-xl' text={"23.3"} /></div>
        </div>
      </div>
    </div>
  )
}

export default StakingPage;