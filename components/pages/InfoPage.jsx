import OutlinedText from "../OutlinedText";
import PixelPanel from "../PixelPanel";

function InfoPage({openRoadmap}) {
    return (<div className='modal'>
        <div className='modal-header'><OutlinedText className="tstroke-5" text={"Info"}/></div>
        <div className='modal-body'>
            <h2 className='sm:text-5xl text-center'>Кайф</h2>
            <button className='mx-10 h-6' onClick={openRoadmap}>
                <PixelPanel
                    className='relative flex items-center justify-center'
                    resolution='0.8rem'
                >
                    <OutlinedText centered={true} className="tstroke-3 py-3 text-sm sm:tstroke-4 sm:text-lg" text='ROADMAP' />
                </PixelPanel>
            </button>
        </div>
        <div className='modal-footer'></div>
    </div>);
}

export default InfoPage;