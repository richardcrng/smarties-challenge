import React from 'react';
import EatSmarties from '../../templates/EatSmarties';
import AllGone from '../../templates/AllGone';
import { F7Page } from 'framework7-react';

const EatContext = React.createContext()
export const useSmartiesData = () => React.useContext(EatContext).smarties
export const useSmartiesEatHandler = () => React.useContext(EatContext).handler

function Eat(smarties) {
  const {
    red = 3,
    orange = 2,
    blue = 4,
    green = 4,
    yellow = 9,
    pink = 5,
    violet = 2,
    brown = 2
  } = smarties

  const [state, setState] = React.useState({
    red, orange, blue, green, yellow, pink, violet, brown
  })

  React.useEffect(() => {
    setState(smarties)
  }, [smarties])

  const createColorDecrement = color => onClickEvent => {
    setState(prevState => ({
      ...prevState,
      [color]: prevState[color] - 1
    }))
  }

  return (
    <F7Page>
      <div className='Page'>
        <EatContext.Provider value={{ smarties: state, handler: createColorDecrement }}>
          {
            Object.values(state).some(e => e > 0)
              ? <EatSmarties />
              : <AllGone />
          }
        </EatContext.Provider>
      </div>
    </F7Page>
  )
}

export default Eat;