import React from 'react';
import Smarties from './components/molecules/Smarties';
import SmartiesGroup from './components/organisms/SmartiesGroup/SmartiesGroup';

function App() {
  return (
    <div>
      <SmartiesGroup>
        <Smarties n={2} color="orange" />
        <Smarties n={10} color="yellow" />
        <Smarties n={5} color="pink" />
        <Smarties n={2} color="purple" />
        <Smarties n={2} color="red" />
      </SmartiesGroup>
    </div>
  );
}

export default App;
