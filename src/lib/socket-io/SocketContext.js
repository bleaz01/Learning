import React,{createContext,useEffect,useRef, useState} from 'react';
import Peer from 'simple-peer';
import { socket } from '.';


const SocketContext = createContext();

const contextProvider =({children})=>{

    const [userStream, setUserStream]= useState(null);
    const [recevingCall, setRecevingCall]= useState()
    const [callAccepted, setCallAccepted]= useState(false)
    const [callEnded, setCallEnded]= useState(false)
    const [name, setName] =useState()

    const [call, setCall] = useState({})


    const [me,setMe]= useState('')


    const video = useRef({})
    const otherVideo = useRef({})
    const connectionRef = useRef({})

    useEffect(()=>{

        navigator.mediaDevices.getUserMedia({video:true, audio:true})
        .then((stream) => {
            // console.log(stream)
            setUserStream(stream)
            video.current = stream
        })

        socket.on('me',(id)=>{
            setMe(id)
        })

        socket.on('callUser', ({from, name: callName, signal})=>{
            setCall({isResevingCall: true, from, callName, signal })
        })
    },[])

    const answerCall =( )=>{
       setCallAccepted(true)

       const peer = new Peer({
           initiator: false, trickle:false, userStream
       })

       peer.on('signal',(data)=>{
            socket.emit('answerCall', ({signal:data, to: call.from}))
       })

       peer.on('stream',(currentUser)=>{
           
        otherVideo.current =  currentUser

        })
        peer.signal(call.signal)

        connectionRef.current = peer
    }
    const Callended =(id)=>{
        const peer = new Peer({
            initiator: true, trickle:false, userStream
        })
        peer.on('signal',(data)=>{
            socket.emit('callUser', ({userToCall:id, signalData:data, from: me}))
       })

       peer.on('stream',(currentUser)=>{
           
        otherVideo.current =  currentUser

        })

        socket.on('callAccepted', (signal)=>{
            setCallAccepted(true)

            peer.on(signal)
        })

        connectionRef.current = peer


    }

    const CallUser =()=>{
        setCallEnded(true)
        connectionRef.current = null
        window.location.reload()

    }

    return(
       <SocketContext.Provider value={{
           call,
           callAccepted,
           callEnded,
           CallUser,
           Callended,
           answerCall,
           me,
           video,
           otherVideo,
           name,
           setName

       }}>
           {children}

       </SocketContext.Provider>

    )

}
export{ SocketContext, contextProvider}