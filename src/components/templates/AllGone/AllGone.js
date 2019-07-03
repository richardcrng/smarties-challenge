import React from 'react';
import { useAppToggle } from '../../../App';
import { F7Button } from 'framework7-react';

function AllGone() {
  const toggle = useAppToggle()

  return (
    <>
      <h1>All gone!</h1>
      <F7Button
        fill
        large
        onClick={toggle}
      >
        MOAR!
      </F7Button>
    </>
  )
}

export default AllGone;