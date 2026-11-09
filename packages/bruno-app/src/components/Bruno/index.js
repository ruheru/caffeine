import React from 'react';

const Bruno = ({ width }) => {
  return (
    <img
      src="static/caffeine-logo.png"
      width={width}
      height={width}
      alt="Caffeine"
      draggable={false}
      style={{ borderRadius: Math.max(3, Math.round(width * 0.22)), display: 'inline-block' }}
    />
  );
};

export default Bruno;
