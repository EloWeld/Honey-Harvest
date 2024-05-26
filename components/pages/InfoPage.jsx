import OutlinedText from "../OutlinedText";
import PixelPanel from "../PixelPanel";

function InfoPage({openRoadmap}) {
    return (<div className='modal'>
        <div className='modal-header'>Info</div>
        <div className='modal-body'>
            <h2 className='text-5xl text-center'>Кайф</h2>
            <h2 className='text-5xl text-center'>Кайф</h2>
            <h2 className='text-5xl text-center'>Кайф</h2>
            <button className='mx-10 h-6' onClick={openRoadmap}>
                <PixelPanel
                    className='relative flex items-center justify-center'
                    resolution='35px'
                >
                    <OutlinedText text='ROADMAP' />
                </PixelPanel>
            </button>
        </div>
        <div className='modal-footer'></div>
    </div>);
}

export default InfoPage;