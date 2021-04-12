import React,{useState} from 'react';
import  ChannelList  from './ChannelList';
import './chatStyleSheet.scss';



const Chat =()=>{
    const[channels, setchannels] = useState([
        { id: 1, name: 'first', participants: 10 }
    ])
    return(
        <div className='chat-app'>
            <ChannelList 
            channels={channels}
            /> 
        </div>
    )
}

export default Chat

