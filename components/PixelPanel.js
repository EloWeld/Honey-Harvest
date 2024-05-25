// components/GatherHoneyBtn.js
import React from 'react'

const PixelPanel = ({ children, className="", className2="", type="market", resolution='5px' }) => {
  return (
    <div className={"pixeled-panel " + className2} style={{'--panel-resolution': resolution, '--panel-source': type}}>
      <div        className="nine-tile-corner top-left" style={{backgroundImage: 'url("/images/panels/'+type+'/top-left.png")'}}/>
      <div       className="nine-tile-edge top" style={{backgroundImage: 'url("/images/panels/'+type+'/top.png")'}}/>
      <div        className="nine-tile-corner top-right" style={{backgroundImage: 'url("/images/panels/'+type+'/top-right.png")'}}/>
      <div       className="nine-tile-edge left" style={{backgroundImage: 'url("/images/panels/'+type+'/left.png'}}/>
      <div        className="nine-tile-center relative" style={{backgroundImage: 'url("/images/panels/'+type+'/center.png'}}>
        <div className={className} style={{ height: 'calc(100% + var(--panel-resolution) + var(--panel-resolution))', margin: `calc(-1 * var(--panel-resolution))` }}>
        {children}
        </div>
      </div>
      <div       className="nine-tile-edge tile-right" style={{backgroundImage: 'url("/images/panels/'+type+'/right.png")'}}/>
      <div        className="nine-tile-corner bottom-left" style={{backgroundImage: 'url("/images/panels/'+type+'/bottom-left.png")'}}/>
      <div       className="nine-tile-edge bottom" style={{backgroundImage: 'url("/images/panels/'+type+'/bottom.png")'}}/>
      <div        className="nine-tile-corner bottom-right" style={{backgroundImage: 'url("/images/panels/'+type+'/bottom-right.png")'}}/>
    </div>
  );
}

export default PixelPanel
