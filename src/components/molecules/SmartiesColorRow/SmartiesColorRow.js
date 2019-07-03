import React from 'react';
import Smartie from '../../atoms/Smartie';
import SmartiesGroupOfRows from '../../organisms/SmartiesGroupOfRows';

function SmartiesColorRow({ n, color, onClick, style }) {
  return (
    <div style={style}>
      {[...Array(n).keys()].map((val, idx) => (
        <Smartie
          key={idx}
          color={color}
          onClick={onClick}
          style={{ margin: '2px' }}
        />
      ))}
    </div>
  )
}

SmartiesColorRow.Group = SmartiesGroupOfRows

export default SmartiesColorRow;