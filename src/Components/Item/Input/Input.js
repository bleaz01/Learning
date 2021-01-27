import { TextField } from "@material-ui/core";
import React from "react";

import  './InputStyleSheet.scss';

const Input = ( {
    name, 
    inputRef, 
    defaultValue,
    placeholder,
    onchange
    
    }) =>{

    return (
        <input 
            className={'FormBase-input'}
            placeholder={placeholder}
            name={name} 
            defaultValue={defaultValue} 
            onChange={onchange}
            ref={inputRef}
         />

    )

}

export default Input