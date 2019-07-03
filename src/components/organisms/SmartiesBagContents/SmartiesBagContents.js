import React from 'react';
import SmartiesColorRow from '../../molecules/SmartiesColorRow';

function SmartiesBagContents({ red, orange, blue, green, yellow, pink, violet, brown }) {
  const [state, setState] = React.useState({
    red, orange, blue, green, yellow, pink, violet, brown
  })

  const createColorDecrement = color => onClickEvent => {
    setState(prevState => ({
      ...prevState,
      [color]: prevState[color] - 1
    }))
  }

  return (
    <div>
      <SmartiesColorRow.Group>
        {
          Object.entries(state).filter(([color, n]) => n > 0)
            .map(([color, n]) => (
              <SmartiesColorRow
                key={color}
                {...{ color, n }}
                onClick={createColorDecrement(color)}
              />
            ))
        }
      </SmartiesColorRow.Group>
    </div>
  );
}

export default SmartiesBagContents;