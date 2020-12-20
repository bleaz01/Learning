import React from 'react'
import { useForm } from "react-hook-form";

import './FormsBaseStyleSheet.scss'
const FormBase = (props) =>{

    const { register, handleSubmit, watch, errors } = useForm();

    const 
    {
        onSubmit, 
        StyleForm, 
        name , 
        defaultValue

    } = props


    return(
        <div className='FormBase-container'>
             <form className={StyleForm} onSubmit={handleSubmit(onSubmit)}>
                <input 
                    className={'FormBase-input'}
                    name={'tes'&& name} 
                    defaultValue={defaultValue && 'test'} 
                    ref={register} />
            </form>  
        </div>
    )
}
export default FormBase;