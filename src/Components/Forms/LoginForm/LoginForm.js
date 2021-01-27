import React from 'react'
import { useForm } from "react-hook-form";
import Button from '../../Item/Button/Button';
import Input from '../../Item/Input/Input';



// import "./LoginFormStyleSheet.scss"

const LoginForm = ()=>{

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
                 <Button buttonSize={"small"} onclick={onSubmit}>Login</Button> 

            </form>  

        </div>

    )
}

export default LoginForm