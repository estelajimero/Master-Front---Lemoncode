import React from "react";
import classes from "./listStyle.scss";

function Contact(props) {
  return (
    <div className={classes.contact}>
      <span>{props.name}</span>
    </div>
  );
}

export default Contact;
