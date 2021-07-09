import { TextField } from "@material-ui/core";
import React from "react";

import  './InputStyleSheet.scss';



const EscapeOutput = (toOutput) =>{
    return toOutput.replace(/\&/g, '&amp;')
        .replace(/\</g, '&lt;')
        .replace(/\>/g, '&gt;')
        .replace(/\"/g, '&quot;')
        .replace(/\'/g, '&#x27')
        .replace(/\//g, '&#x2F');
}
const EmailInput=(input)=>{
    let err;
    
    if (input.trim() === '') return err = "email needed"
    if (
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          input,
        )
      ) {
        return err = 'Please enter a valid email';
    }
    return EscapeOutput(input)


} 

const Password = (input) =>{
    let err;
    if (input.trim() === '') return err = "password needed"

    if(/^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/gm.test(input,)){
        return err = 'Password should be at least one capital letter, one small letter, one number and 8 character length';
    }
    return EscapeOutput(input)

}

const Input = ( {
    name, 
    inputRef, 
    defaultValue,
    placeholder,
    onchange
    
    }) =>{

        // if(name ="email") 
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