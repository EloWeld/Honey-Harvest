import React from 'react';

const OutlinedText = ({ text, className = "", centered=false, stroke='4px #511B0E' }) => {
  return (
    <div className={(centered===false ? "outlined-text " : "outline-centered ") + className} data-text={text} style={{'--ttext-stroke': stroke}}>
      {text}
    </div>
  );
};

export default OutlinedText;