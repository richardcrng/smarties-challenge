import React from 'react';
import classes from './Smartie.module.css'

function Smartie({ color: backgroundColor, style }) {
  return (
    <span
      className={classes.Smartie}
      style={{ backgroundColor, ...style }}
    />
  )
}

export default Smartie;