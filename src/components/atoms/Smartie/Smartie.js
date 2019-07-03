import React from 'react';
import classes from './Smartie.module.css'

function Smartie({ color: backgroundColor, onClick, style }) {
  return (
    <span
      className={classes.Smartie}
      onClick={onClick}
      style={{ backgroundColor, ...style }}
    />
  )
}

export default Smartie;