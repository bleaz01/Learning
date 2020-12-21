import React from 'react'
import { useForm } from "react-hook-form";

import './FormsBaseStyleSheet.scss'
const FormBase = (props) =>{

    const { register, handleSubmit, watch, errors } = useForm();

    // console.log(watch("search")); // watch input value by passing the name of it


    const 
    {
        onSubmit, 
        StyleForm, 
        name , 
        defaultValue,
        placeholder

    } = props


    return(
        <div className='FormBase-container'>
             <form className={StyleForm} onSubmit={handleSubmit(onSubmit)}>
                <input 
                    className={'FormBase-input'}
                    placeholder={placeholder}
                    name={'tes'&& name} 
                    defaultValue={defaultValue && 'test'} 
                    ref={register} />
            </form>  
        </div>
    )
}
export default FormBase;