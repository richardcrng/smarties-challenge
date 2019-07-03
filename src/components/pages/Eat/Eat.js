import React from 'react';
import EatSmarties from '../../templates/EatSmarties';
import AllGone from '../../templates/AllGone';

const EatContext = React.createContext()
export const useSmartiesData = () => React.useContext(EatContext).smarties
export const useSmartiesEatHandler = () => React.useContext(EatContext).handler

function Eat({ red = 3, orange = 2, blue = 4, green = 4, yellow = 9, pink = 5, violet = 2, brown = 2 }) {
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
    <EatContext.Provider value={{ smarties: state, handler: createColorDecrement }}>
      {
        Object.values(state).some(e => e > 0)
          ? <EatSmarties />
          : <AllGone />
      }
    </EatContext.Provider>
  )
}

export default Eat;