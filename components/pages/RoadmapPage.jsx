import React from 'react'
import OutlinedText from '../OutlinedText'

const SquarePoint = ({ point, text }) => {
    return (
        <div className='flex flex-row items-center gap-4 px-4'>
            <div className='h-14 aspect-square w-14 content-center justify-center' style={{ backgroundImage: "url('/images/panels/square.png')", backgroundSize: "100% 100%" }}>
                <OutlinedText className='text-lg outline-centered text-center' text={point} centered={true}/>
            </div>
            <OutlinedText text={text} />
        </div>
    )
}

const RoadmapPage = ({ roadmapBack }) => {
    return (
        <div className='modal'>
            <div className='modal-header'>
                Roadmap
                <button className='u-nav-button h-full' onClick={roadmapBack}>
                    <img className="h-4/6" src='/images/icons/back.png' alt='BACK' />
                </button>
            </div>
            <div className='modal-body'>
                <div className='flex flex-col items-start gap-4'>
                    <SquarePoint point={"1"} text={"Запуск преминта пчел для ранних пользователей"} />
                    <SquarePoint point={"2"} text={"Старт рекламной компании"} />
                    <SquarePoint point={"3"} text={"Листинг токена Gold Honey на Dex бирже"} />
                    <SquarePoint point={"4"} text={"Окончание закрытого бета теста. Официальный запуск игры. Проведение награждаемых активностей."} />
                    <SquarePoint point={"5"} text={"Дроп эксклюзивных NFT держателям токена GH"} />
                    <SquarePoint point={"6"} text={"Второй этап рекламной компании, захват Индийского рынка мёда."} />
                    <SquarePoint point={"7"} text={"Дроп токена GH держателям эксклюзивных NFT"} />
                    <SquarePoint point={"8"} text={"Внедрение механизма сжигания. Запуск колеса фортуны с ежедневными наградами"} />
                    <SquarePoint point={"9"} text={"Первичное сжигание токенов GH"} />
                    <SquarePoint point={"10"} text={"Начало продажи NFT"} />
                    <SquarePoint point={"11"} text={"Мы миллиардеры! А вы нет :("} />
                </div>
            </div>
            <div className='modal-footer'></div>
        </div>
    )
}

export default RoadmapPage;
