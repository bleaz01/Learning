import React from 'react'
import { useForm } from "react-hook-form";
import Button from '../../Item/Button/Button';
import Input from '../../Item/Input/Input';



import "./RegisterFormStyleSheet.scss"

const RegisterForm = ()=>{

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data =>  {
       console.log(data)     
    }
    
    return(
        <div className='RegisterForm-Container'>
            <div className='RegisterForm-Title'>
                Logo
                {/* <div className="RegisterFrom-Icon">
                    Logo
                </div> */}
            </div>
           <form className='RegisterForm-Form' onSubmit={handleSubmit(onSubmit)}>
                <Input
                    placeholder="name"
                    name="name" 
                    // defaultValue={defaultValue && 'test'} 
                    inputRef={register} 
                    />
                <Input 
                    placeholder="email"
                    name="email" 
                    // defaultValue={defaultValue && 'test'} 
                    inputRef={register} 
                />
                 <select className='FormBase-input' name="role" ref={register}>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                 </select>
                 <Button buttonSize={"small"} onclick={onSubmit}>Register</Button> 

            </form>  

        </div>

    )
}

export default RegisterForm