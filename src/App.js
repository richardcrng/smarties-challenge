import React from 'react';
import Eat from './components/pages/Eat';
import Yum from './components/pages/Yum';

const AppContext = React.createContext()
export const useAppToggle = () => React.useContext(AppContext).toggle

function App() {
  const [eating, setEating] = React.useState(false)
  const toggleEating = () => setEating(!eating)

  return (
    <AppContext.Provider value={{ toggle: toggleEating }}>
      {
        eating
          ? <Eat />
          : <Yum />
      }
    </AppContext.Provider>
  )
}

export default App;
