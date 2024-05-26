import MarketItemPanel from "../MarketItemPanel";

function MarketPage({user, market}) {
    // I dont know why we need user but anyway
    return (
        <div className='modal'>
            <div className='modal-header'>Market</div>
            <div className='modal-body'>
                {market.map((item, index) => (
                    <MarketItemPanel
                        key={index}
                        image={item.image}
                        name={item.name}
                        ton={item.ton}
                        honey={item.honey}
                        price={item.price}
                        quality={item.quality}
                    />
                ))}
            </div>
            <div className='modal-footer'></div>
        </div>
    );
}

export default MarketPage;