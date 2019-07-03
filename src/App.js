import React from 'react';
import Eat from './components/pages/Eat';
import Yum from './components/pages/Yum';

const AppContext = React.createContext()
export const useAppRandomiseBag = () => React.useContext(AppContext).randomise
export const useAppToggle = () => React.useContext(AppContext).toggle

function App() {
  const [eating, setEating] = React.useState(false)
  const toggleEating = () => setEating(!eating)

  const [newBag, setNewBag] = React.useState({
    red: 3,
    orange: 2,
    blue: 4,
    green: 4,
    yellow: 9,
    pink: 5,
    violet: 2,
    brown: 2
  })

  const randomiseBag = () => {
    const randomisedContents = { ...newBag }
    Object.keys(randomisedContents).forEach(key => {
      randomisedContents[key] = Math.round(Math.random() * 9)
    })
    setNewBag(randomisedContents)
  }

  return (
    <AppContext.Provider value={{ toggle: toggleEating, randomise: randomiseBag }}>
      {
        eating
          ? <Eat {...newBag} />
          : <Yum />
      }
    </AppContext.Provider>
  )
}

export default App;
