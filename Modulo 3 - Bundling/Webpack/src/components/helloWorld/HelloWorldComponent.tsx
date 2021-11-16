import React from "react";
import classes from "./helloWorldComponentStyles.scss";
import { showEnv } from "../../variables";

export const HelloWorldComponent = () => {
    return (
        <>
           <h1 className={classes.title}>Hello World!</h1>
        </>
    );
};

showEnv();