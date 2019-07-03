import React from 'react';

function SmartiesGroup({ children }) {
  return (
    <div>
      {React.Children.map(children, child => (
        <div style={{ margin: '10px' }}>{child}</div>
      ))}
    </div>
  )
}

export default SmartiesGroup;