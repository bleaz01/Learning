// ES6 import or TypeScript
import { io } from "socket.io-client";
export const socket = io("http://localhost:4000", {transports: ['websocket', 'polling', 'flashsocket']})

// socket.on('message',(msg)=>{
//     console.log(msg)
// })


// export const createRoom = (name)=>{
//     socket.on("room", ()=>{

//         socket.join(name, ()=>{

//         })

//     })
   
// }
// export const sendMessage = ()=>{
//     socket.emit('sed', 'Learn')
// }