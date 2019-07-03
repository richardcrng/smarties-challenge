import React from 'react';
import SmartiesBagContents from '../../organisms/SmartiesBagContents';
import { useSmartiesData, useSmartiesEatHandler } from '../../pages/Eat/Eat';

function EatSmarties() {
  const smarties = useSmartiesData()
  const handler = useSmartiesEatHandler()

  return (
    <>
      <h1>Click to eat!</h1>
      <SmartiesBagContents {...{ smarties, handler }} />
    </>
  )
}

export default EatSmarties;