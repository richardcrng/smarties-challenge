import React from 'react';
import Smarties from './components/molecules/Smarties';
import SmartiesGroup from './components/organisms/SmartiesGroup/SmartiesGroup';

function App() {
  const [state, setState] = React.useState({
    orange: 2,
    yellow: 10,
    pink: 5,
    purple: 2,
    red: 2
  })

  return (
    <div>
      <SmartiesGroup>
        {Object.entries(state).map(([color, n]) => (
          <Smarties key={color} {...{ color, n }} />
        ))}
      </SmartiesGroup>
    </div>
  );
}

export default App;
