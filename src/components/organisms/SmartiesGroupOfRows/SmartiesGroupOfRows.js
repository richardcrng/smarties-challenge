import React from 'react';

function SmartiesGroupOfRows({ children }) {
  return (
    <div>
      {React.Children.map(children, child => (
        <div style={{ margin: '10px' }}>{child}</div>
      ))}
    </div>
  )
}

export default SmartiesGroupOfRows;