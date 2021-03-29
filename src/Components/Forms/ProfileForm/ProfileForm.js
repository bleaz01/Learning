import React from 'react'
import {useDispatch} from 'react-redux';
import { useForm } from "react-hook-form";
import { getCurrentUser } from '../../../lib/redux/actions/user';
import Input from '../../Item/Input/Input';
import Button from '../../Item/Button/Button';

const ProfileForm = () =>{

    const dispatch = useDispatch()
    const { register, handleSubmit, watch, errors } = useForm();

    const currentUser = dispatch(getCurrentUser())

    console.log(currentUser,'my')
    const onSubmit = (data)=>{

        console.log(data)

    }


    return(

        <div>
              <form className='RegisterForm-Form' onSubmit={handleSubmit(onSubmit)}>
                <Input
                    placeholder="email"
                    name="email" 
                    defaultValue={currentUser.email} 
                    inputRef={register} 
                    />
                <Input 
                    placeholder="name"
                    name="name" 
                    defaultValue={currentUser.name} 
                    inputRef={register} 
                />
                <Input 
                    placeholder="last_name"
                    name="last_name" 
                    defaultValue={currentUser.last_name} 
                    inputRef={register} 
                />
                  <Input 
                    placeholder="year"
                    name="year" 
                    defaultValue={currentUser.year} 
                    inputRef={register} 
                />
                 <Button buttonSize={"small"} onclick={onSubmit}>Login</Button> 


            </form>  

        </div>

    )
}

export default ProfileForm