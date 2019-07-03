import React from 'react';
import SmartiesBagContents from './components/organisms/SmartiesBagContents';

function App() {

  return (
    <div>
      <SmartiesBagContents
        orange={2}
        red={4}
        green={8}
        purple={9}
      />
    </div>
  );
}

export default App;
