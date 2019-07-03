import React from 'react';
import { useAppToggle } from '../../../App';

function Yum() {
  const toggle = useAppToggle()

  return (
    <>
      <h1>Yum, Smarties!</h1>
      <button onClick={toggle}>
        Open bag
      </button>
    </>
  )
}

export default Yum;