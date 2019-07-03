import React from 'react';
import { useAppToggle, useAppRandomiseBag } from '../../../App';

function Yum() {
  const randomise = useAppRandomiseBag()
  const toggle = useAppToggle()

  return (
    <>
      <h1>Yum, Smarties!</h1>
      <button onClick={() => {
        randomise()
        toggle()
      }}>
        Open random bag
      </button>
    </>
  )
}

export default Yum;