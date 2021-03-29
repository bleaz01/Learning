import React, { useEffect } from 'react';
import TextInput from '../../Item/TextInput/TextInput';
// import { TextField } from "@material-ui/core";
import {handleUser,createRoom,getNameRoom} from "./index"
import { useForm } from "react-hook-form";

import './MessengerStyleSheet.scss'

const Messenger = () =>{

    useEffect(()=>{
        handleUser()
       

    })

    

    const { control } = useForm();

    const onSubmit = data => console.log(data);


    return(
            <div className="Msg-container">
                <div className="Msg-header">
                    title
                </div>
                <div className="Msg-content">
                    threads
                    <button onClick={() => createRoom('rouez')}>
                        room
                    </button>
                </div>
                <div className="Msg-footer">
                    <div className="Msg-form">
                        <TextInput 
                            name="firstName" 
                            control={control} 
                            onSubmit={onSubmit}
                            defaultValue='text'
                            StyleTextInput='Msg-formC'
                        />
                    </div>
                </div>
            </div>
    )
}

export default Messenger;