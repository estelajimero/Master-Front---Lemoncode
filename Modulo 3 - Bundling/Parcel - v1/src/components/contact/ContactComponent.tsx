import React from "react";
import './listStyle.scss';

function Contact(props) {
  return (
    <div className={"contact"}>
      <span>{props.name}</span>
    </div>
  );
}

export default Contact;
