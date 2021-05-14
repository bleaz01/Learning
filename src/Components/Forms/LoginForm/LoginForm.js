import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import Button from '../../Item/Button/Button';
import Input from '../../Item/Input/Input';
import {useDispatch} from "react-redux"
import useAuthentication from "../../../lib/hooks/useAuthent"


// import "./LoginFormStyleSheet.scss"

const LoginForm = ()=>{
    const dispatch = useDispatch()
    const { register, handleSubmit, watch, errors } = useForm();

   
    const {handleUserLogin} = useAuthentication(dispatch)

    const onSubmit = (data) =>  {
        
        if(data.email){

            const userEmail = data.email
            const userPassword = data.password
            handleUserLogin(userEmail, userPassword).then((currentUser) => {
                currentUser && console.log(currentUser,"store redux user connecté")

            }).catch(err=> console.log(err))
           

        }
       
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
                    placeholder="email"
                    name="email" 
                    // defaultValue={defaultValue && 'test'} 
                    inputRef={register} 
                    />
                <Input 
                    placeholder="password"
                    name="password" 
                    // defaultValue={defaultValue && 'test'} 
                    inputRef={register} 
                />
                 <Button buttonSize={"small"} onclick={onSubmit}>Login</Button> 

            </form>  

        </div>

    )
}

export default LoginForm