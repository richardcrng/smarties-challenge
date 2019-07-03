import React from 'react';
import SmartiesColorRow from '../../molecules/SmartiesColorRow';

function SmartiesBagContents({ smarties = {}, handler }) {
  return (
    <div>
      <SmartiesColorRow.Group>
        {
          Object.entries(smarties).filter(([color, n]) => n > 0)
            .map(([color, n]) => (
              <SmartiesColorRow
                key={color}
                {...{ color, n }}
                onClick={handler(color)}
              />
            ))
        }
      </SmartiesColorRow.Group>
    </div>
  );
}

export default SmartiesBagContents;