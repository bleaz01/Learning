import React, { useEffect, useRef, useState } from "react";
import { handleUsername, socket } from "../../../lib/socket-io";
import { useDispatch, useSelector } from "react-redux";
import Peer from "simple-peer"
// import TextInput from '../../Item/TextInput/TextInput';
// import { TextField } from "@material-ui/core";
import {
  handleUser,
  createRoom,
  sendMessage,
  getMessage
  // showMyMessage
} from "./index";
import { useForm } from "react-hook-form";

import "./MessengerStyleSheet.scss";
import FormBase from "../../Forms/FormBase/FormBase";
import SideBar from "../../layout/ModalSidebar/SideBar";
import Button from "../../Item/Button/Button";
import VideoPlayer from "./videoChat/VideoPlayer";
import Options from "./videoChat/Option";
import Notifications from "./videoChat/Notifications";

const Messenger = () => {
  let user = useSelector(state => state.user);
  const [response, setResponse] = useState([]);
  const [theArray, setTheArray] = useState([]);
  const [userStream, setUserStream]= useState({});
  const [me,setMe]= useState()
  const [recevingCall, setRecevingCall]= useState()
  

  const { register, handleSubmit } = useForm();

  // console.log(user)

  // let socketRef = useRef()

  const video = useRef({})

  useEffect(() => {

    
    let i = 0;
    socket.on('me',(id)=>{
      setMe(id)
    })
    socket.on("confirmMessage", msg => {
      setTheArray(oldArray => [...oldArray, msg]);
    });
    socket.on("newMessage", (text, usernameSender) => {
      setTheArray(oldArray => [...oldArray, text]);
    });
    
    handleUsername(user);
    i++;
  }, [4]);
  const renderVideo =() =>{
    navigator.mediaDevices.getUserMedia({video:true, audio:true}).then((stream) => {
      // console.log(stream)
      setUserStream(stream)
      if(video.current){
        video.current = stream
      }
      console.log(video.current)      
    })
  }
  const renderTchat = () => {
    //    if(response){
    return theArray.map(ms => {
      //    console.log(ms.msg, '=> inside')
      return <div className="buble-msg">{ms.msg} </div>;
      //  <div>{ms.msg}</div>
    });
    //    }
  };

  const onSubmit = data => {
    if (data.msg != undefined) {
      sendMessage(data.msg);
      console.log(data);
    }
  };
  
  return (
    <div className="Msg-container">
      <div className="side">
        <SideBar>Messenger</SideBar>
      </div>
      <div className="Msg-Main">
        {/* {userStream && <div>{userStream}</div>} */}
        <div className="Msg-header">Group Name</div>
        <div>
          <div className="video-content">
            <VideoPlayer/>
              <Options>
                  <Notifications/>
              </Options>
          </div>
          <div className="Msg-content">
            <div className="msg-boxe">
              {renderTchat()}
              <div className="corner">
              
              </div>
            </div>
          </div>
        </div>
        <div className="Msg-footer">
          <div className="Msg-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <textarea
                className="textarea-style"
                name="msg"
                defaultValue="..."
                ref={register}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Button onclick={onSubmit}>send</Button>
                <Button onclick={renderVideo}>
                  <i class="fas fa-video fa-1x"></i>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;

{
  /* {handleMessage} */
}
{
  /* {ui.map((name)=>{
                        console.log(ui,'now')
                        return <div>
                                {name}
                        </div>
                    })} */
}
{
  /* <button onClick={ ()=> console.log("lkdlk")}>
                        send
                    </button> */
}
