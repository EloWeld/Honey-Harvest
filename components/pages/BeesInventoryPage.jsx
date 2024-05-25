import React from 'react';

const BeePot = ({ data }) => {
    return (
        <div className="relative w-28 mx-auto" style={{ aspectRatio: 500/728, zIndex: "0", background: data.empty ? 'url("/images/icons/bee-pot-empty.png")' : 'url("/images/icons/bee-pot-full.png")', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}>
            {data.bee && (
                <img className='opacity-50 -rotate-12 p-4 pb-0 mt-10' src={`/images/bees/${data.bee}.png`}></img>
            )}
        </div>
    );
}

const BeesInventoryPage = () => {
    return (
        <div className="w-full h-full" style={{ zIndex: "0", background: 'url("/images/backgrounds/inventory-background.png")', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}>
            <div className="relative w-full h-4/5 px-12" style={{ marginTop: "80px", background: 'url("/images/backgrounds/shelfs.png")', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}>
                <div className="grid grid-rows-3 grid-cols-2 gap-20 px-7 pt-7">
                    <BeePot data={{ empty: false, bee: 'bee_v1' }} />
                    <BeePot data={{ empty: false }} />
                    <BeePot data={{ empty: true }} />
                    <BeePot data={{ empty: false }} />
                    <BeePot data={{ empty: true }} />
                    <BeePot data={{ empty: true }} />
                </div>
            </div>
        </div>
    );
}

export default BeesInventoryPage;