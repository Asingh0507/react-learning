import React from "react";
import classes from "./Button.module.css";
import Card from "./Card";

const Button = (props) => {
  return (
    <Card Class={classes.button}>
      <button className={classes.button} type={props.type || 'button'} onClick={props.onClick}>
        {props.children}
      </button> 
    </Card>
  );
};

export default Button;
