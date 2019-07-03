import React from 'react';
import Smarties from './components/molecules/Smarties';
import SmartiesGroup from './components/organisms/SmartiesGroup/SmartiesGroup';

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
      <SmartiesGroup>
        {
          Object.entries(state).filter(([color, n]) => n > 0)
            .map(([color, n]) => (
              <Smarties
                key={color}
                {...{ color, n }}
                onClick={createColorDecrement(color)}
              />
            ))
        }
      </SmartiesGroup>
    </div>
  );
}

export default App;
