import React from 'react'
import { useForm } from "react-hook-form";
import {useDispatch} from 'react-redux';

import Button from '../../Item/Button/Button';
import Input from '../../Item/Input/Input';
import useAuthentication from "../../../lib/hooks/useAuthent"
import {useMutation} from '@apollo/client'
import { ADD_USER } from '../../../lib/apollo/mutation'


import "./RegisterFormStyleSheet.scss"

const RegisterForm = ()=>{
    const dispatch = useDispatch()


    const { register, handleSubmit, watch, errors } = useForm();
    const {handleUserRegistration} = useAuthentication(dispatch)
    // const [addUser, { data }] = useMutation(ADD_USER);

    const onSubmit = data =>  {

        const use = data

        handleUserRegistration(use).then(()=>{
            // addUser({ variables: { email: data.email, password: data.password } });
            console.log("successsfuly")
        })

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
                 {/* <select className='FormBase-input' name="role" ref={register}>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                 </select> */}
                 <Button buttonSize={"small"} onclick={onSubmit}>Register</Button> 

            </form>  

        </div>

    )
}

export default RegisterForm