import React from 'react';
import { useAppToggle, useAppRandomiseBag } from '../../../App';

function Yum() {
  const randomise = useAppRandomiseBag()
  const toggle = useAppToggle()

  return (
    <div className='Page'>
      <h1>Yum, Smarties!</h1>
      <button onClick={() => {
        randomise()
        toggle()
      }}>
        Open random bag
      </button>
    </div>
  )
}

export default Yum;