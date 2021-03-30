import {socket} from "../../../lib/socket-io"

//socket-io
const user ="jeasonLOUIO"

export const handleUser =()=>{
    socket.emit('user',(user))
}

export const createRoom =(name)=>{
    socket.emit('room', name)
}


export const getNameRoom =()=>{
    socket.on('msgToRoom',(text)=>{
        console.log(text, "llllll")
    })

}


export const sendMessage =(msg)=>{
    socket.emit("sendMessage",msg)
}

export const showMyMessage =()=>{
    let text
    socket.on("confirmeMesage",(_text)=> {
        text = _text
    })
    return text
}
export const getMessage =()=>{
    let listMsg
    socket.on('getMessage',(_listMsg)=>{
        listMsg = _listMsg
    })

    return listMsg
}