import React from 'react';
import Eat from './components/pages/Eat/Eat';

function App() {

  return (
    <div>
      <Eat
        orange={2}
        red={4}
        green={8}
        purple={9}
      />
    </div>
  );
}

export default App;
