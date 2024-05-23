// components/GatherHoneyBtn.js
import React from 'react'

const PixelPanel = ({ children, resolution='25px' }) => {
  return (
    <div className="pixeled-panel" style={{'--panel-resolution': resolution, 'margin-bottom': '25px'}}>
      <div className="nine-tile-corner top-left"></div>
      {<div className="nine-tile-edge top"></div>  /*style={{ backgroundColor: color }} */}
      <div className="nine-tile-corner top-right"></div>
      {<div className="nine-tile-edge left"></div>  /*style={{ backgroundColor: color }} */}
      <div className="nine-tile-center relative">
        <div style={{ height: 'calc(100% + var(--panel-resolution) + var(--panel-resolution))', margin: `calc(-1 * var(--panel-resolution))` }}>
        {children}
        </div>
      </div>
      {<div className="nine-tile-edge tile-right"></div>  /*style={{ backgroundColor: color }} */}
      <div className="nine-tile-corner bottom-left"></div>
      {<div className="nine-tile-edge bottom"></div>  /*style={{ backgroundColor: color }} */}
      <div className="nine-tile-corner bottom-right"></div>
    </div>
  );
}

export default PixelPanel
