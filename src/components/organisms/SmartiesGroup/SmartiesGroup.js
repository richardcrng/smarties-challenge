import React from 'react';

function SmartiesGroup({ children }) {
  return (
    <div>
      {React.Children.map(children, child => (
        child ? <div style={{ margin: '10px' }}>{child}</div> : null
      ))}
    </div>
  )
}

export default SmartiesGroup;