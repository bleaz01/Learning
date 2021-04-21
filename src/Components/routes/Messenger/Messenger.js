import React, { useEffect } from 'react';
import {handleUsername, socket} from "../../../lib/socket-io"
import {useDispatch, useSelector} from "react-redux"


// import TextInput from '../../Item/TextInput/TextInput';
// import { TextField } from "@material-ui/core";
import {
    handleUser,
    createRoom,
    sendMessage,
    getMessage,
    showMyMessage
} from "./index"
import { useForm } from "react-hook-form";

import './MessengerStyleSheet.scss'
import FormBase from '../../Forms/FormBase/FormBase';
import SideBar from '../../layout/ModalSidebar/SideBar';
import Button from '../../Item/Button/Button';




const Messenger = () =>{
    let user = useSelector((state) => state.user)

    user = user.user._profile.data.email
    console.log(user)
   useEffect(()=>{
       let i = 0
       handleUsername(user)
        i++

   },[4])
    const { register, handleSubmit, watch, errors } = useForm();


    const onSubmit = data => {
        sendMessage(data.text)

        console.log(data)
    }
    
    return(
        <div className="Msg-container">
            <SideBar>
                Messenger
            </SideBar>
            <div className="Msg-Main">
                <div className="Msg-header">
                    Group Name
                </div>
                <div className="Msg-content">
                    <div className='msg-boxe'>
                            <span>yello</span>
                            <div className="corner"></div>
                    </div>
                    
                </div>
                <div className="Msg-footer">
                    <div className="Msg-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <textarea  className="textarea-style" name="msg" defaultValue="..." ref={register} />
                            <div style={{ display:"flex", flexDirection:"column"}}>
                                <Button onclick={onSubmit}>
                                    send
                                </Button>
                                <Button onclick={onSubmit}>
                                    <i class="fas fa-video fa-1x"></i>
                                </Button>
                            </div>      
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
          
    )
}

export default Messenger;


  {/* {handleMessage} */}
                    {/* {ui.map((name)=>{
                        console.log(ui,'now')
                        return <div>
                                {name}
                        </div>
                    })} */}
                    {/* <button onClick={ ()=> console.log("lkdlk")}>
                        send
                    </button> */}