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

const BeesInventoryPage = ({ user, market }) => {
    function extendArrayToEvenSize(arr) {
        let currentLength = arr.length;
        let newLength = currentLength;

        // Ensure the length is at least 6
        if (currentLength < 6) {
            newLength = 6;
        }

        // Ensure the length is even
        if (newLength % 2 !== 0) {
            newLength += 1;
        }

        const extendedArray = arr.slice(); // Copy the original array

        // Add elements to the array until it reaches the new length
        for (let i = currentLength; i < newLength; i++) {
            extendedArray.push({ id: 'empty' });
        }

        return extendedArray;
    }

    const inventory = extendArrayToEvenSize(user.bees);
    
    // Group inventory items into rows of 2
    const inventoryRows = [];
    for (let i = 0; i < inventory.length; i += 2) {
        inventoryRows.push(inventory.slice(i, i + 2));
    }

    return (
        <div className="w-full h-full overflow-y-auto" style={{ zIndex: '0', background: 'url("/images/backgrounds/inventory-background.png")', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}>
            <div className="relative w-full h-auto px-12 pt-32 pb-40">
                {inventoryRows.map((row, rowIndex) => (
                    <div key={rowIndex} className="relative w-full mb-10 pt-5 pb-14 px-5" style={{ backgroundImage: 'url("/images/backgrounds/shelf.png")', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}>
                        <div className="flex justify-around">
                            {row.map((item, index) => (
                                <BeePot key={index} data={{ empty: item.id === 'empty', bee: item.type }} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default BeesInventoryPage;