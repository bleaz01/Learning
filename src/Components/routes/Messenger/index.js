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