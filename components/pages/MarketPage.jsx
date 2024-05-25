import MarketItemPanel from "../MarketItemPanel";

function MarketPage({user}) {
    // I dont know why we need user but anyway
    return (<div className='modal'>
        <div className='modal-header'>Market</div>
        <div className='modal-body'>
            <MarketItemPanel
                image='/images/bees/bee_v1.png'
                name='Bee'
                ton='1.4'
                honey='10'
                price='2'
                quality='Regular'
            />
            <MarketItemPanel
                image='/images/bees/bee_v2.png'
                name='Bee v2'
                ton='1.8'
                honey='15'
                price='3'
                quality='Common'
            />
            <MarketItemPanel
                image='/images/bees/bee_v3.png'
                name='Bee v3'
                ton='2.2'
                honey='20'
                price='5'
                quality='Rare'
            />
            <MarketItemPanel
                image='/images/bees/bee_v4.png'
                name='Bee v4'
                ton='2.6'
                honey='25'
                price='10'
                quality='Very rare'
            />
            <MarketItemPanel
                image='/images/bees/bee_v5.png'
                name='Bee v5'
                ton='3.0'
                honey='50'
                price='20'
                quality='Epic'
            />
            <MarketItemPanel
                image='/images/bees/bee_v6.png'
                name='Зря я сюда полез'
                ton='30.0'
                honey='500'
                price='200'
                quality='Legendary'
            />
        </div>
        <div className='modal-footer'></div>
    </div>);
}

export default MarketPage;