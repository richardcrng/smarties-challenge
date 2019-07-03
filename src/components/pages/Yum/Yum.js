import React from 'react';
import { useAppToggle, useAppRandomiseBag } from '../../../App';
import { F7Button, F7Page } from 'framework7-react';

function Yum() {
  const randomise = useAppRandomiseBag()
  const toggle = useAppToggle()

  return (
    <F7Page>
      <div className='Page'>
        <h1>Yum, Smarties!</h1>
        <F7Button
          onClick={() => {
            randomise()
            toggle()
          }}
          fill
          large
        >
          Open random bag
      </F7Button>
      </div>
    </F7Page>
  )
}

export default Yum;