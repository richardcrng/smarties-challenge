import React from 'react';
import SmartiesColorRow from './components/molecules/SmartiesColorRow';

function App() {
  const [state, setState] = React.useState({
    orange: 2,
    yellow: 10,
    pink: 5,
    purple: 2,
    green: 0,
    red: 2,
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

export default App;
