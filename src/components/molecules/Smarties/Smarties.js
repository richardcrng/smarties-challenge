import React from 'react';
import Smartie from '../../atoms/Smartie';

function Smarties({ n, color }) {
  return (
    <div>
      {Array.of(n).map((val, idx) => (
        <Smartie key={idx} color={color} />
      ))}
    </div>
  )
}

export default Smarties;