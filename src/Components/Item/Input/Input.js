import { TextField } from "@material-ui/core";
import React from "react";

import Style from './InputStyleSheet.scss';

const Input = ( name, ref,defaultValue) =>{

    return (
        <input  name={name} defaultValue={defaultValue} ref={ref} />

    )

}

export default Input