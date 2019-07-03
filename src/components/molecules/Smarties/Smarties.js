import React from 'react';
import Smartie from '../../atoms/Smartie';

function Smarties({ n, color, style }) {
  return (
    <div style={style}>
      {[...Array(n).keys()].map((val, idx) => (
        <Smartie key={idx} color={color} style={{ margin: '2px' }} />
      ))}
    </div>
  )
}

export default Smarties;