import React from 'react';
import { useAppToggle } from '../../../App';

function AllGone() {
  const toggle = useAppToggle()

  return (
    <>
      <h1>All gone!</h1>
      <button onClick={toggle}>
        MOAR!
      </button>
    </>
  )
}

export default AllGone;