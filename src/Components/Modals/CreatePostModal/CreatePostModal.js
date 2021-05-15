import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import {CREATE_POST} from '../../../lib/apollo/mutation/index'
import Button from '../../Item/Button/Button';
import Input from '../../Item/Input/Input';

import './CreatePostModalStyleSheet.scss'
const CreatePostModal = ({user}) =>{
    const { register, handleSubmit, watch, errors } = useForm();
    const [CreatePost,{error}] = useMutation(CREATE_POST);

    console.dir(error)
    const onSubmit = data => {

        const newPost ={
            ...data,
            userId:user.user[0]._id,
            date:"25/56/10"
        }

        // console.log(newPost,'nnn')
        CreatePost({variables: { ...newPost}})

    }
    return(
            <div className="PostModal-Container">
                <form className="PostForm-Form" onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        placeholder="title"
                        name="title"
                        // defaultValue={defaultValue && 'test'}
                        inputRef={register}
                    />
                    <Input
                        // placeholder="body"
                        name="body"
                        // defaultValue={defaultValue && 'test'}
                        inputRef={register}
                    />

                    <Input
                        placeholder="comment"
                        name="comment"
                        // defaultValue={defaultValue && 'test'}
                        inputRef={register}
                    />
                   
                    <Button
                        buttonStyles="color-white"
                        buttonSize="small"
                        onclick={onSubmit}
                        >
                        send
                    </Button>
                </form>
            </div>
    ) 
}

export default CreatePostModal