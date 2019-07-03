import React from 'react';
import classes from './Smartie.module.css'

function Smartie({ color: backgroundColor }) {
  return (
    <span
      className={classes.Smartie}
      style={{ backgroundColor }}
    />
  )
}

export default Smartie;